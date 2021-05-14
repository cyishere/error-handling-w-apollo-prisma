const { UserInputError } = require("apollo-server");

const resolvers = {
  Query: {
    getUsers: (_, __, { prisma }) => {
      const users = prisma.user.findMany({});

      return users;
    },
  },
  Mutation: {
    register: (_, { email, username, password, passconf }, { prisma }) => {
      let errors = {};

      try {
        if (email.trim() === "") errors.email = "Email must not be empty.";
        if (username.trim() === "")
          errors.username = "Username must not be empty.";
        if (password === "") errors.password = "Password must not be empty.";
        if (passconf !== password) errors.passconf = "Passwords must match.";

        if (Object.keys(errors).length > 0) {
          // now `errors` will throw to the `catch` block
          throw errors;
        }

        const user = prisma.user.create({
          data: {
            email,
            username,
            password,
          },
        });

        return user;
      } catch (err) {
        throw new UserInputError("Bad User Input", { errors: err });
      }
    },
  },
};

module.exports = resolvers;
