import { gql } from "@apollo/client";

export const GET_ALL_COURIERS = gql`
  query getCouriers($name: String, $phone: Int) {
    getCouriers(name: $name, phone: $phone) {
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
              isFavorite
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
