import { gql } from "@apollo/client";

export const CREATE_COURIER = gql`
  mutation createCourier($userId: ID!) {
    createCourier(userId: $userId) {
      payload {
        _id
        user {
          _id
          name
          phone
          role
          photo
          telegramId
          createdAt
          updatedAt
        }
        orders {
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
              isFavorite
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
