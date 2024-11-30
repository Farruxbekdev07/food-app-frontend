import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getUsers($phone: String) {
    getUsers(filter: { phone: $phone }) {
      payload {
        _id
        name
        phone
        role
        photo
        telegramId
        createdAt
        updatedAt
      }
    }
  }
`;
