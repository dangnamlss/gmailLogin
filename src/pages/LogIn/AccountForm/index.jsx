import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../../../components/FormInput";
import { validateEmailOrPhone } from "../../../utils/Validate";
import { checkIfUsernameExists } from "../../../data/MOCK_USER";
import LoadingScreen from "../../../components/LoadingScreen";
import "./styles.css";

export const AccountForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [emailOrPhoneError, setEmailOrPhoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = validateEmailOrPhone(setEmailOrPhoneError, emailOrPhone);

    if (valid) {
      if (!checkIfUsernameExists(emailOrPhone)) {
        setEmailOrPhoneError("Couldn't find your Account");
      } else {
        setEmailOrPhoneError("");
        setLoading(true);
        setTimeout(() => {
          localStorage.setItem("username", emailOrPhone);
          setLoading(false);
          navigate("/auth/log-in/password");
        }, 2000);
      }
    }
  };

  const handleForgetEmail = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/auth/find-email");
    }, 2000);
  };

  const handleCreateAccount = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/auth/create-account");
    }, 2000);
  };

  return (
    <div className="log-in-container">
      {loading && <LoadingScreen />}
      <h1 className="log-in-title">Sign in</h1>
      <div className="log-in-sub-title">to continue to Gmail</div>

      <form className="log-in-form" onSubmit={handleSubmit}>
        <FormInput
          type={"text"}
          placeholder={"Email or phone"}
          handleChange={setEmailOrPhone}
          value={emailOrPhone}
          error={emailOrPhoneError}
          setError={setEmailOrPhoneError}
        />
        <div className="forgot-email-btn blue-text" onClick={handleForgetEmail}>
          Forgot email?
        </div>
        <p className="guest-mode-text">
          Not your computer? Use Guest mode to sign in privately.
        </p>
        <a
          href="https://support.google.com/chrome/answer/6130773?hl=en-GB"
          className="learn-more-btn blue-text"
        >
          Learn more
        </a>
        <div className="log-in-form-btn-group">
          <div className="invisible-btn" onClick={handleCreateAccount}>
            <span className="blue-text">Create account</span>
          </div>
          <button className="blue-btn" type="submit">
            <span>Next</span>
          </button>
        </div>
      </form>
    </div>
  );
};
