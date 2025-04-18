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

export const ATTACH_ORDER = gql`
  subscription attachOrder {
    attachOrder {
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
