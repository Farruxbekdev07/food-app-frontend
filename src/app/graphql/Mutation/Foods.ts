import { gql } from "@apollo/client";

export const CREATE_FOODS = gql`
  mutation createFood($food: FoodInput!) {
    createFood(food: $food) {
      payload {
        _id
        title
        name
        description
        price
        discount
      }
    }
  }
`;
