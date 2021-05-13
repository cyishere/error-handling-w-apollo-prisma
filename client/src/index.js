import React from "react";
import ReactDOM from "react-dom";
import ApolloProvider from "./ApolloProvider";
import App from "./App";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <ApolloProvider>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
