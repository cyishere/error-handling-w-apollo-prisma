import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000", // this points to our server url
  cache: new InMemoryCache(),
});

const Provider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Provider;
