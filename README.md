# Faceter API

## GraphQL API for Faceter.[^1]


### possible Query Request
> ```graphql
> type Query {
>      hello(name: String): String,
>      users(id: Int, name: String, email: String, password: String): [User]
>      posts(id: Int, respond: Int, author: Int, type: PostType, content: String, date: String): [Post]
>      reactions(userId: Int, postId: Int, reactionType: String): [Reaction]
>      follow(followerId: Int, followedId: Int): [Follow]
> }
> ```


[^1]: unofficial API
