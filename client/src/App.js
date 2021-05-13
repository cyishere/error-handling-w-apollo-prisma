import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { List } from "semantic-ui-react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="full-page">
        <List bulleted horizontal>
          <List.Item as={Link} to="/">
            Home
          </List.Item>
          <List.Item as={Link} to="/register">
            Register
          </List.Item>
        </List>
        <Switch>
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
