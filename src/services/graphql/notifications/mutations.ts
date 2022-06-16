import {gql} from "@apollo/client"

export const READ_NOTIFICATION = gql`
  mutation ReadNotification($input: ReadNotificationInput!) {
    readNotification(input: $input) {
      _id
    }
  }
`;