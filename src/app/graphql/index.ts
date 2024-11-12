import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

import { store } from "../../store";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_BACKEND_URL,
});

const authMiddleware = new ApolloLink((operation: any, forward: any) => {
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
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authMiddleware, httpLink]),
});

export default client;
