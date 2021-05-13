import { gql, useQuery } from "@apollo/client";
import { List, Loader, Message, Segment } from "semantic-ui-react";
import PageHeader from "../components/PageHeader";

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      username
    }
  }
`;

const Home = () => {
  // we use `useQuery` method to get data from server
  const { loading, error, data } = useQuery(GET_USERS);

  const users = data?.getUsers || [];

  let content;

  if (loading) {
    content = (
      <Segment>
        <Loader active inline />
      </Segment>
    );
  } else if (error) {
    content = <Message negative>{error}</Message>;
  } else if (users.length < 1) {
    content = <Segment>There&#39;s no user here.</Segment>;
  } else {
    content = (
      <List as="ul">
        {users.map((user) => (
          <List.Item as="li" key={user.id}>
            {user.username}
          </List.Item>
        ))}
      </List>
    );
  }

  return (
    <div className="wrapper">
      <PageHeader>User List</PageHeader>

      {content}
    </div>
  );
};

export default Home;
