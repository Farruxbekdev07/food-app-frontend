import { gql } from "@apollo/client";

export const GET_ALL_COURIERS = gql`
  query getCouriers($name: String, $phone: Int) {
    getCouriers(name: $name, phone: $phone) {
      payload {
        _id
        name
        phone
        orders {
          _id
          totalPrice
          createdAt
          status
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
