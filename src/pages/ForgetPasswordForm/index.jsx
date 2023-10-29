import { useState } from "react";
import { AccountList } from "../../components/AccountList";
import { FormInput } from "../../components/FormInput";
import "./styles.css";
import { validatePassword } from "../../utils/Validate";

export const ForgetPasswordForm = () => {
  const userName = localStorage.getItem("username");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = validatePassword(setPasswordError, password);

    if (valid) {
      setPasswordError("");
      console.log("send password to server");
    }
  };
  return (
    <div className="forget-password-form-container">
      <h1 className="log-in-title">Account recovery</h1>
      <AccountList userName={userName} />

      <form className="forget-password-form" onSubmit={handleSubmit}>
        <div className="forget-password-sub-title">
          Enter the last password you remember using with this Google Account
        </div>
        <FormInput
          type={"password"}
          placeholder={"Enter last password"}
          value={password}
          handleChange={setPassword}
          error={passwordError}
          setError={setPasswordError}
        />

        <div className="forget-password-btn-group">
          <div className="invisible-btn">
            <span className="blue-text">Try another way</span>
          </div>
          <button className="blue-btn" type="submit">
            <span>Next</span>
          </button>
        </div>
      </form>
    </div>
  );
};
