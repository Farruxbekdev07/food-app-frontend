import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { toast } from "react-toastify";
import { onError } from "@apollo/client/link/error";

// import { signOut } from "store/reducer/AuthSlice";
// import { removeCenter } from "store/reducer/CenterSlice";
// import { UNAUTHENTICATED } from "utils/apolloErrorCodes";
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

const errorLink = onError(({ graphQLErrors }) => {
  //   if (graphQLErrors && graphQLErrors[0].extensions.code === UNAUTHENTICATED) {
  //     store.dispatch(signOut());
  //     store.dispatch(removeCenter());
  //     return;
  //   }
  //   if (graphQLErrors) {
  //     toast.error(graphQLErrors[0]?.message);
  //   }
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      //   GroupStudentPayment: {
      //     keyFields: [
      //       "payments",
      //       [
      //         "paidAt",
      //         "totalAmount",
      //         "isPaymentTransferred",
      //         "monthAsDate",
      //         "transferFromMonth",
      //         "month",
      //       ],
      //     ],
      //   },
      //   GroupStudentAttendancesInfo: {
      //     keyFields: ["_id", "shouldPayAmount", "totalAttendances"],
      //   },
      // Absence: {
      //   keyFields: ["_id", "reason", "result"],
      // },
    },
  }),
  link: ApolloLink.from([authMiddleware, errorLink, httpLink]),
});

export default client;
