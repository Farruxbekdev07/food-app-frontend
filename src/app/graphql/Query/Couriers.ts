import { gql } from "@apollo/client";

export const GET_ALL_COURIERS = gql`
  query getCouriers($name: String, $phone: Int) {
    getCouriers(name: $name, phone: $phone) {
      payload {
        _id
        name
        phone
        password
      }
    }
  }
`;
