import { gql } from "@apollo/client";

export const CREATE_CATEGORY = gql`
  mutation createCategory($category: CategoryInput!) {
    createCategory(category: $category) {
      payload {
        _id
        name
        image
      }
    }
  }
`;

export const UPDATE_CATEGORY_BY_ID = gql`
  mutation updateCategoryById($categoryId: ID!, $category: CategoryInput!) {
    updateCategoryById(categoryId: $categoryId, category: $category) {
      payload {
        _id
        name
        image
      }
    }
  }
`;

export const DELETE_CATEGORY_BY_ID = gql`
  mutation deleteCategoryById($categoryId: ID!) {
    deleteCategoryById(categoryId: $categoryId) {
      payload {
        _id
        name
        image
      }
    }
  }
`;
