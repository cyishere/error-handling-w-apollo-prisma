import { Header } from "semantic-ui-react";

const PageHeader = ({ children }) => {
  return <Header as="h1">{children}</Header>;
};

export default PageHeader;
