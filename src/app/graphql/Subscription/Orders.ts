import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  subscription createOrder {
    createOrder {
      payload {
        _id
        totalPrice
        status
        address
        orderItems {
          _id
          food {
            _id
            shortName
            name
            image
            description
            price
            discount
            category {
              _id
              name
              image
            }
            likes
          }
          quantity
          price
          discount
          user
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
        createdAt
        updatedAt
      }
    }
  }
`;
