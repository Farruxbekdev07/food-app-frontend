import { gql } from "@apollo/client";

export const CREATE_FOODS = gql`
  mutation createFood($food: FoodInput!) {
    createFood(food: $food) {
      payload {
        _id
        shortName
        name
        description
        price
        discount
      }
    }
  }
`;

export const CREATE_CART_ITEM = gql`
  mutation createCartItem($food: ID) {
    createCartItem(food: $food) {
      payload {
        _id
        quantity
        price
        user
        food {
          _id
          shortName
          name
          description
          price
          discount
        }
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

export const DELETE_FOOD = gql`
  mutation deleteFoodById($foodId: ID!) {
    deleteFoodById(foodId: null) {
      payload
    }
  }
`;
