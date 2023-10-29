export const validateEmailOrPhone = (setEmailError, account) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const phoneRegex = /^\d{10}$/;

  if (account === "") {
    setEmailError("Enter an email or phone number");
    return false;
  }

  if (!emailRegex.test(account) && !phoneRegex.test(account)) {
    setEmailError("Enter a valid email or phone number");
    return false;
  }

  return true;
};

export const validatePassword = (setPasswordError, password) => {
  if (password === "") {
    setPasswordError("Enter a password");
    return false;
  }

  if (password.length < 6) {
    setPasswordError("Password must be at least 6 characters");
    return false;
  }

  return true;
};

export const validateFirstName = (setFirstNameError, firstName) => {
  if (firstName.trim() === "") {
    setFirstNameError("Enter a first name");
    return false;
  }

  if (firstName.length < 2) {
    setFirstNameError("First name must be at least 2 characters");
    return false;
  }

  if (!/^[a-zA-Z]+$/.test(firstName)) {
    setFirstNameError("First name must contain only letters");
    return false;
  }

  return true;
};

export const validateLastName = (setLastNameError, lastName) => {
  if (lastName.trim() === "") {
    setLastNameError("Enter a last name");
    return false;
  }

  if (lastName.length < 2) {
    setLastNameError("Last name must be at least 2 characters");
    return false;
  }

  if (!/^[a-zA-Z]+$/.test(lastName)) {
    setLastNameError("Last name must contain only letters");
    return false;
  }

  return true;
};
