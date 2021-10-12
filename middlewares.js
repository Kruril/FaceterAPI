const {makeExecutableSchema} = require("@graphql-tools/schema");
const {readFileSync} = require("fs");

const queries = require('./src/server/queries/queries')


const schema = makeExecutableSchema({
    typeDefs: readFileSync('./graphql/schema.graphql', 'utf8'),
    resolvers: {
        Query: {
            hello: (_, {name}) =>`Hello world! ${name}`,
            users: (_, filters) => queries.getUsers(filters),
            posts: (_, filters) => queries.getPosts(filters),
            reactions: (_, filters) => queries.getReactions(filters),
            follow: (_, filters) => queries.getFollow(filters),
        },
        Post: {
            author: async (post) => {
                const author = await queries.getUsers({id: post.author})
                return author[0]
            }
        },
        User: {
            posts: async (user) => {
                return await queries.getPosts({author: user.id})
            },
            followed: async (user) => {
                return await queries.getFollow({followerId: user.id})
            }
        },
        Follow: {
            follower: async (follow) => {
                const follower = await queries.getUsers({id: follow.followerId})
                return follower[0]
            },
            followed: async (follow) => {
                const followed = await queries.getUsers({id: follow.followedId})
                return followed[0]
            }
        },
        Reaction: {
            user: async (reaction) => {
                const user = await queries.getUsers({id: reaction.userId})
                return user[0]
            },
            post: async (reaction) => {
                const post = await queries.getPosts({id: reaction.postId})
                return post[0]
            }
        }
    }
});

module.exports = schema
