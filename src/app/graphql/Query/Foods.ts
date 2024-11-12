import { gql } from "@apollo/client";

export const GET_ALL_FOODS = gql`
  query getAllFoods {
    getAllFoods {
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

export const GET_FOOD = gql`
  query getFoodById($foodId: ID!) {
    getFoodById(foodId: $foodId) {
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

export const GET_CART_ITEMS = gql`
  query getCartItemsByUserId {
    getCartItemsByUserId {
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
