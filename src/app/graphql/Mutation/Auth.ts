import { gql } from "@apollo/client";

export const LOGIN = gql`
  query telegramUserLogin($auth: TelegramUserInput!) {
    telegramUserLogin(auth: $auth) {
      token
      user {
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
