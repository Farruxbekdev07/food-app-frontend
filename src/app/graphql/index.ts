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

import { store } from "../../store";

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

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      toast.error(message);
    });
  }

  if (networkError) {
    toast.error(networkError.message);
  }
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
  link: ApolloLink.from([errorLink, authMiddleware, httpLink]),
});

export default client;
