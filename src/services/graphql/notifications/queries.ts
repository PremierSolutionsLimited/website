import {gql} from "@apollo/client"

export const GET_NOTIFICATIONS = gql `
    query Notifications ($pagination: Pagination) {
    notifications(pagination: $pagination) {
        _id
        title
        body
        data
        read
        readAt
        createdAt
    }
}
`