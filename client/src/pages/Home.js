import { List, Segment } from "semantic-ui-react";
import PageHeader from "../components/PageHeader";

const Home = () => {
  const users = [];

  return (
    <div className="wrapper">
      <PageHeader>User List</PageHeader>

      {users.length < 1 ? (
        <Segment>There&#39;s no user here.</Segment>
      ) : (
        <List as="ul">
          {users.map((user) => (
            <List.Item as="li" key={user.id}>
              {user.username}
            </List.Item>
          ))}
        </List>
      )}
    </div>
  );
};

export default Home;
