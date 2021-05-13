import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    passconf: "",
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form>
      <Form.Field>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={userInfo.username}
          onChange={handleChange}
          placeholder="Please input your username"
        />
      </Form.Field>
      <Form.Field>
        <label>E-mail:</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          placeholder="Please input your email"
        />
      </Form.Field>
      <Form.Field>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
          placeholder="Please input your password"
        />
      </Form.Field>
      <Form.Field>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="passconf"
          value={userInfo.passconf}
          onChange={handleChange}
          placeholder="Please confirm your password"
        />
      </Form.Field>
      <Button primary type="submit">Register</Button>
    </Form>
  );
};

export default Register;
