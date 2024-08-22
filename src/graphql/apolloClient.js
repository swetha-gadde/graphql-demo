/** The code below initializes a new instance of ApolloClient with a link to the Rick and Morty GraphQL API 
and sets up an in-memory cache for query results.
*/ 


import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
    cache : new InMemoryCache(),
    link: new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
});
export default client;