import { gql } from "@apollo/client";

export const GET_ALL_FOODS = gql`
  query getAllFoods($name: String, $categories: [ID]) {
    getAllFoods(name: $name, categories: $categories) {
      payload {
        _id
        shortName
        name
        image
        description
        price
        discount
        category {
          name
        }
        likes
      }
    }
  }
`;

export const GET_FOOD_BY_ID = gql`
  query getFoodById($foodId: ID!) {
    getFoodById(foodId: $foodId) {
      payload {
        _id
        shortName
        name
        image
        description
        price
        discount
        category {
          name
        }
        likes
      }
    }
  }
`;

export const GET_CART_ITEMS = gql`
  query getCartItemsByUserId {
    getCartItemsByUserId {
      payload {
        totalPrice
        items {
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
            category {
              name
            }
            likes
          }
        }
      }
    }
  }
`;

export const GET_FOODS_BY_CATEGORY = gql`
  query getFoodsByCategory($categoryId: ID!) {
    getFoodsByCategory(categoryId: $categoryId) {
      payload {
        _id
        shortName
        name
        image
        description
        price
        discount
        category {
          name
        }
        likes
      }
    }
  }
`;

export const GET_FAVORITE_FOODS = gql`
  query getFavoriteFoods {
    getFavoriteFoods {
      payload {
        _id
        shortName
        name
        image
        description
        price
        discount
        category {
          name
        }
        likes
      }
    }
  }
`;
