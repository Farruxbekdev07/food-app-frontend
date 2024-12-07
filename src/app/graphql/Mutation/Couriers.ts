import { gql } from "@apollo/client";

export const CREATE_COURIER = gql`
  mutation createCourier($userId: ID!) {
    createCourier(userId: $userId) {
      payload {
        _id
        _id
        name
        phone
        orders {
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
  }
`;

export const DELETE_COURIER = gql`
  mutation deleteCourierById($userId: ID!) {
    deleteCourierById(userId: $userId) {
      payload {
        _id
        name
        phone
        role
        photo
        telegramId
      }
    }
  }
`;
