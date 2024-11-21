import { gql } from "@apollo/client";

export const GET_ORDER_BY_ID = gql`
  query getOrderById($orderId: ID!) {
    getOrderById(orderId: $orderId) {
      payload {
        _id
        totalPrice
        createdAt
        status
        to
        foods {
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
        createdBy {
          _id
          name
          phone
          role
          photo
          telegramId
        }
      }
    }
  }
`;
