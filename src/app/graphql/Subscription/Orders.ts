import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  subscription CreateOrder($order: OrderInput!) {
    createOrder(order: $order) {
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
            category
            likes
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
