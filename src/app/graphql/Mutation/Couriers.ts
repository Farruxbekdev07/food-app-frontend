import { gql } from "@apollo/client";

export const CREATE_COURIER = gql`
  mutation createCourier($userId: ID!) {
    createCourier(userId: $userId) {
      payload {
        _id
        name
        phone
        password
        orders {
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
  }
`;
