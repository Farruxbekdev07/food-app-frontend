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

export const UPDATE_FOODS = gql`
  mutation updateFoodById($foodId: ID!, $food: FoodUpdateInput!) {
    updateFoodById(foodId: $foodId, food: $food) {
      payload {
        _id
        shortName
        name
        image
        description
        price
        discount
      }
    }
  }
`;
