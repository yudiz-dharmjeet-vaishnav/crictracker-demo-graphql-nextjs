import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://gateway-dev.crictracker.ml/graphql",
    cache: new InMemoryCache(),
});

export default client;