import { gql } from "@apollo/client";

export const CREATE_FOOD = gql`
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

export const UPDATE_CART_FOOD_QUANTITY = gql`
  mutation UpdateCartFoodQuantity($food: ID, $quantity: Int) {
    updateCartFoodQuantity(food: $food, quantity: $quantity) {
      payload {
        _id
        quantity
        price
        discount
        user
        food {
          _id
          shortName
          name
          image
          description
          price
          discount
          category
          likes
        }
      }
    }
  }
`;

export const DELETE_CART_ITEM = gql`
  mutation deleteCartItem($food: ID) {
    deleteCartItem(food: $food) {
      payload {
        _id
        user
        price
        quantity
        discount
        food {
          _id
          name
          image
          price
          likes
          discount
          category
          shortName
          description
        }
      }
    }
  }
`;

export const UPDATE_FOOD_BY_ID = gql`
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

export const DELETE_FOOD_BY_ID = gql`
  mutation deleteFoodById($foodId: ID!) {
    deleteFoodById(foodId: null) {
      payload
    }
  }
`;
