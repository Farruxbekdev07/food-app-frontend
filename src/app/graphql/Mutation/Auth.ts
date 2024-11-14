import { gql } from "@apollo/client";

export const LOGIN = gql`
  query login($auth: AuthInput!) {
    login(auth: $auth) {
      token
      user {
        _id
        telegramId
        name
        role
        phone
        photo
      }
    }
  }
`;
