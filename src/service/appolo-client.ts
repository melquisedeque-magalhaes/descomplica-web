import { InMemoryCache, ApolloClient } from '@apollo/client'

export const client = new ApolloClient({
    uri: process.env.BACKEND_URL_PROD || 'http://localhost:3333/graphql',
    cache: new InMemoryCache(),
})