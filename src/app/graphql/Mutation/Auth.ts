import { gql } from "@apollo/client";

export const LOGIN = gql`
  query login($auth: AuthInput) {
    login(auth: $auth) {
      token
      user {
        _id
        name
        role
        phone
        telegramId
      }
    }
  }
`;
