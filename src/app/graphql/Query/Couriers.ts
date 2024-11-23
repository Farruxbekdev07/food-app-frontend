import { gql } from "@apollo/client";

export const GET_ALL_COURIERS = gql`
  query getCouriers($name: String, $phone: Int) {
    getCouriers(name: $name, phone: $phone) {
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
