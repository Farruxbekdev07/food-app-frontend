import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
  query getAllCategories {
    getAllCategories {
      payload {
        _id
        name
        image
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
