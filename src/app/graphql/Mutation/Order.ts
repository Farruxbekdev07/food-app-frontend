import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation createOrder($address: [Float!]!) {
    createOrder(order: { address: $address }) {
      payload {
        _id
        status
        address
        createdAt
        updatedAt
        totalPrice
        orderItems {
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
            shortName
            description
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
          role
          phone
          photo
          createdAt
          updatedAt
          telegramId
        }
      }
    }
  }
`;
