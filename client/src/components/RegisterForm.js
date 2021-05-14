import { useState } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { Button, Form, Message } from "semantic-ui-react";

const REGISTER = gql`
  mutation Register(
    $email: String!
    $username: String!
    $password: String!
    $passconf: String!
  ) {
    register(
      email: $email
      username: $username
      password: $password
      passconf: $passconf
    ) {
      id
      username
      email
    }
  }
`;

const initialUserState = {
  username: "",
  email: "",
  password: "",
  passconf: "",
};

const Register = () => {
  const [userInfo, setUserInfo] = useState(initialUserState);
  // add a new state to store the error messages
  const [errors, setErrors] = useState(initialUserState);

  // add a new state to store the register result
  const [registerResult, setRegisterResult] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const [doRegister, { loading, error }] = useMutation(REGISTER, {
    onError: (err) => {
      // when we get the error messages, we set it to the `errors` state
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    onCompleted: (data) => {
      // when the mutation complete, set the response to `registerState` state
      setRegisterResult(data.register);
    },
  });

  const registerSubmit = (e) => {
    e.preventDefault();
    doRegister({ variables: { ...userInfo } });
  };

  return (
    <>
      {error && error.message !== "Bad User Input" && (
        <Message negative>{error.message}</Message>
      )}
      <Form onSubmit={registerSubmit}>
        {/* change the JSX to `Form.Input` */}
        <Form.Input
          // conditional show the label content
          label={errors.username ? errors.username : "Username:"}
          type="text"
          name="username"
          value={userInfo.username}
          onChange={handleChange}
          placeholder="Please input your username"
          // if its status is error
          error={errors.username ? true : false}
        />
        <Form.Input
          label={errors.email ? errors.email : "E-mail:"}
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          placeholder="Please input your email"
          error={errors.email ? true : false}
        />
        <Form.Input
          label={errors.password ? errors.password : "Password:"}
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
          placeholder="Please input your password"
          error={errors.password ? true : false}
        />
        <Form.Input
          label={errors.passconf ? errors.passconf : "Confirm Password:"}
          type="password"
          name="passconf"
          value={userInfo.passconf}
          onChange={handleChange}
          placeholder="Please confirm your password"
          error={errors.passconf ? true : false}
        />
        <Button primary type="submit" loading={loading}>
          Register
        </Button>
      </Form>

      {/* when we have the register result, show this: */}
      {registerResult.username && (
        <Message positive>
          <Message.Header>Register Successfully!</Message.Header>
          <p>
            You&#39;re <strong>{registerResult.username}</strong> with{" "}
            <em>{registerResult.email}</em>.
          </p>
          <p>
            Back to <Link to="/">Home page</Link>
          </p>
        </Message>
      )}
    </>
  );
};

export default Register;
