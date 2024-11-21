import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
  query getUserById($userId: ID) {
    getUserById(userId: $userId) {
      payload {
        _id
        name
        phone
        role
        photo
        telegramId
      }
    }
  }
`;

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      payload {
        _id
        name
        phone
        role
        photo
        telegramId
      }
    }
  }
`;
