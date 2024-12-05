import {
  NextLink,
  HttpLink,
  Operation,
  ApolloLink,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { toast } from "react-toastify";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";

import { store } from "../../store";
import { logOut } from "../../store/reducer/authSlice";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_BACKEND_URL || "http://localhost:8000",
});

const authMiddleware = new ApolloLink(
  (operation: Operation, forward: NextLink) => {
    const token = store.getState().auth?.token;

    operation.setContext(({ headers = {} }) => {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : null,
        },
      };
    });

    return forward(operation);
  }
);

const processedErrors = new Set<string>();
let isLoggingOut = false;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    const hasUnauthenticatedError = graphQLErrors.some(
      ({ extensions }) => extensions?.code === "UNAUTHENTICATED"
    );

    // Agar "UNAUTHENTICATED" bo'lsa, `logOut` faqat bir marta chaqiriladi
    if (hasUnauthenticatedError && !isLoggingOut) {
      isLoggingOut = true;
      store.dispatch(logOut());
    }

    graphQLErrors.forEach(({ message, extensions }) => {
      const uniqueErrorKey = `${extensions?.code}-${message}`;

      // Xato faqat bir marta ko'rsatiladi
      if (!processedErrors.has(uniqueErrorKey)) {
        processedErrors.add(uniqueErrorKey);
        toast.error(message);
      }
    });
  }

  if (networkError) {
    const uniqueNetworkErrorKey = `NetworkError-${networkError.message}`;

    // Network xatolari faqat bir marta ko'rsatiladi
    if (!processedErrors.has(uniqueNetworkErrorKey)) {
      processedErrors.add(uniqueNetworkErrorKey);
      toast.error(networkError.message);
    }
  }

  // 5 soniyadan so'ng `processedErrors` tozalanadi
  setTimeout(() => {
    processedErrors.clear();
    isLoggingOut = false;
  }, 5000);
});

const retryLink = new RetryLink({
  attempts: {
    max: 1, // Maksimum qayta urinib ko‘rish soni
    retryIf: (error) => !!error, // Faqat xatolik bo‘lsa qayta urinish
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Courier: {
        keyFields: ["_id"],
      },
      QueryBuilder: {
        fields: {
          getCouriers: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  link: ApolloLink.from([retryLink, errorLink, authMiddleware, httpLink]),
});

export default client;
