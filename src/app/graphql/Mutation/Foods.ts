import { gql } from "@apollo/client";

export const CREATE_FOODS = gql`
  mutation createFood($food: FoodInput!) {
    createFood(food: $food) {
      payload {
        _id
        name
        title
        price
        discount
        description
      }
    }
  }
`;

export const UPDATE_FOODS = gql`
  mutation updateFood($food: FoodInput!) {
    updateFood(food: $food) {
      payload {
        _id
        name
        title
        price
        discount
        description
      }
    }
  }
`;
