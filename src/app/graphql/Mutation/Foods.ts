import { gql } from "@apollo/client";

export const CREATE_FOOD = gql`
  mutation createFood($food: FoodInput!, $image: Upload) {
    createFood(food: $food, image: $image) {
      payload {
        _id
        shortName
        name
        image
        description
        price
        discount
        likes
        category {
          _id
          name
          image
        }
      }
    }
  }
`;

export const CREATE_CART_ITEM = gql`
  mutation createCartItem($data: CartItemInput) {
    createCartItem(data: $data) {
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
          likes
          category {
            _id
            name
            image
          }
        }
      }
    }
  }
`;

export const UPDATE_CART_FOOD_QUANTITY = gql`
  mutation updateCartFoodQuantity($cartItemId: ID, $quantity: Int) {
    updateCartFoodQuantity(cartItemId: $cartItemId, quantity: $quantity) {
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
          likes
          category {
            _id
            name
            image
          }
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
          category {
            _id
            name
            image
          }
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
        name
        price
        discount
        shortName
        description
      }
    }
  }
`;

export const DELETE_FOOD_BY_ID = gql`
  mutation deleteFoodById($foodId: ID!) {
    deleteFoodById(foodId: $foodId) {
      payload {
        _id
        name
        image
        price
        likes
        discount
        shortName
        description
        category {
          _id
          name
          image
        }
      }
    }
  }
`;
