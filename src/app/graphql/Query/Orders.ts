import { gql } from "@apollo/client";

export const GET_ORDER_BY_ID = gql`
  query getOrderById($orderID: ID!) {
    getOrderById(orderID: $orderID) {
      payload {
        _id
        totalPrice
        createdAt
        status
        totalPrice
        foods {
          id
          food {
            _id
            shortName
            name
            image
            description
            price
            discount
          }
          quantity
          price
          discount
          user
        }
        createdBy {
          _id
          telegramId
          name
          role
          phone
          photo
        }
      }
    }
  }
`;
