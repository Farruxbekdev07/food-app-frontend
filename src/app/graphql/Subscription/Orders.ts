import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  subscription createOrder($address: [Float!]!) {
    createOrder(order: { address: $address }) {
      payload {
        _id
        totalPrice
        status
        address
        createdAt
        updatedAt
        orderItems {
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
          createdAt
          updatedAt
        }
      }
    }
  }
`;
