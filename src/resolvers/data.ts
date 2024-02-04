import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query GetData($token: String!) {
    getData(token: $token) {
      protectedData
      user {
        email
        name
      }
    }
  }
`;
