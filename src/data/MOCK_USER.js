export const MOCK_USER = [
  {
    id: 1,
    username: "admin@gmail.com",
    password: "123456aA@",
  },
];

export const checkIfUsernameExists = (userName) => {
  return MOCK_USER.some((user) => user.username === userName);
};

export const checkPassword = (userName, password) => {
  const user = MOCK_USER.find((user) => user.username === userName);
  if (user) {
    return user.password === password;
  }
  return false;
};
