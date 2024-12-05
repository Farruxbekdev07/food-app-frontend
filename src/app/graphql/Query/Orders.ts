import { gql } from "@apollo/client";

export const GET_ALL_ORDERS = gql`
  query getOrders($statuses: String, $page: Int, $limit: Int) {
    getOrders(statuses: $statuses, page: $page, limit: $limit) {
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

export const GET_ORDER_BY_ID = gql`
  query getOrderById($orderId: ID!) {
    getOrderById(orderId: $orderId) {
      payload {
        _id
        status
        createdAt
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
          photo
          phone
          telegramId
        }
      }
    }
  }
`;

export const GET_ORDERS_BY_USER_ID = gql`
  query getOrdersByUserId($status: String) {
    getOrdersByUserId(status: $status) {
      payload {
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
`;

export const GET_ORDERS = gql(`
  query getOrders($statuses: String, $page: Int, $limit: Int) {
      getOrders(statuses: $statuses, page: $page, limit: $limit) {
        payload {
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
`);
