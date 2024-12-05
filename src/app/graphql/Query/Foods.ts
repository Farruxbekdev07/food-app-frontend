import { gql } from "@apollo/client";

export const GET_ALL_FOODS = gql`
  query getAllFoods($name: String, $categories: [ID], $page: Int, $limit: Int) {
    getAllFoods(
      name: $name
      page: $page
      limit: $limit
      categories: $categories
    ) {
      page
      limit
      prevPage
      nextPage
      totalDocs
      totalPages
      hasPrevPage
      hasNextPage
      pagingCounter
      payload {
        _id
        name
        image
        price
        likes
        discount
        shortName
        description
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

export const GET_CART_ITEMS_BY_USER_ID = gql`
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

export const GET_CATEGORY_BY_ID = gql`
  query getCategoryById($categoryId: ID!) {
    getCategoryById(categoryId: $categoryId) {
      payload {
        _id
        name
        image
      }
    }
  }
`;
