import { useState } from "react";
import { FormInput } from "../../components/FormInput";
import { validateEmailOrPhone } from "../../utils/Validate";
import "./styles.css";

export const ForgetEmailForm = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [emailOrPhoneError, setEmailOrPhoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = validateEmailOrPhone(setEmailOrPhoneError, emailOrPhone);

    if (valid) {
      setEmailOrPhoneError("");
      console.log("send mail or phone to server");
    }
  };
  
  return (
    <div className="forget-email-form-container">
      <h1 className="welcome-text">Find your Email</h1>
      <div className="log-in-sub-title">
        Enter your phone number or recovery email
      </div>

      <form className="forget-email-form" onSubmit={handleSubmit}>
        <FormInput
          type={"text"}
          placeholder={"Phone number or email"}
          value={emailOrPhone}
          handleChange={setEmailOrPhone}
          error={emailOrPhoneError}
          setError={setEmailOrPhoneError}
        />
        <div className="forget-email-btn-group">
          <button className="blue-btn">
            <span>Next</span>
          </button>
        </div>
      </form>
    </div>
  );
};
