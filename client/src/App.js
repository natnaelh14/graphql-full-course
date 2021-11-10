import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DisplayData from "./DisplayData";
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });
  return (
    <ApolloProvider client={client}>{/* The client you are passing is the client you created at the top. */}
      <div className="App">
        <DisplayData />
      </div>
    </ApolloProvider>
  );
}

export default App;
