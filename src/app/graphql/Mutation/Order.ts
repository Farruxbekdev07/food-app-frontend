import { gql } from "@apollo/client";

export const DELETE_ORDER = gql`
  mutation deleteFoodById($food: ID!) {
    deleteFoodById(food: $food) {
      payload
    }
  }
`;
