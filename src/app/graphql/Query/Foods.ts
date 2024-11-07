import { gql } from "@apollo/client";

export const GET_ALL_FOODS = gql`
  query getAllFoods {
    getAllFoods {
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
