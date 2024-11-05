import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($user: UserInput!) {
    createUser(user: $user) {
      payload {
        _id
        telegramId
        name
        role
        phone
        cart {
          _id
          user
          foods {
            _id
            title
            name
            description
            price
            discount
          }
        }
      }
    }
  }
`;
