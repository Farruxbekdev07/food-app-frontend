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
    operation.setContext(({ headers = {} }) => {
      const token = store.getState().auth?.token;
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
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

    if (hasUnauthenticatedError && !isLoggingOut) {
      isLoggingOut = true;
      store.dispatch(logOut());
      client.clearStore().finally(() => {
        isLoggingOut = false;
      });
    }

    graphQLErrors.forEach(({ message, extensions }) => {
      const uniqueErrorKey = `${extensions?.code}-${message}`;

      if (!processedErrors.has(uniqueErrorKey)) {
        processedErrors.add(uniqueErrorKey);
        toast.error(message);
      }
    });
  }

  if (networkError) {
    const uniqueNetworkErrorKey = `NetworkError-${networkError.message}`;

    if (!processedErrors.has(uniqueNetworkErrorKey)) {
      processedErrors.add(uniqueNetworkErrorKey);
      toast.error(networkError.message);
    }
  }

  setTimeout(() => {
    processedErrors.clear();
    isLoggingOut = false;
  }, 10000);
});

const retryLink = new RetryLink({
  attempts: {
    max: 1,
    retryIf: (error) => !!error,
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
