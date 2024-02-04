import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        name
      }
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $name: String!
    $signupEmail2: String!
    $signupPassword2: String!
  ) {
    signup(name: $name, email: $signupEmail2, password: $signupPassword2) {
      token
      user {
        email
        name
      }
    }
  }
`;
