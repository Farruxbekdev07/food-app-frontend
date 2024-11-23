import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      payload {
        _id
        name
        role
        phone
        photo
        telegramId
      }
    }
  }
`;
