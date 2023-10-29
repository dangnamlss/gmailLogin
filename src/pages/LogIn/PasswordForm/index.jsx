import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AccountList } from "../../../components/AccountList";
import { FormInput } from "../../../components/FormInput";
import { validatePassword } from "../../../utils/Validate";
import { checkPassword } from "../../../data/MOCK_USER";
import LoadingScreen from "../../../components/LoadingScreen";
import "./styles.css";

export const PasswordForm = () => {
  const { t } = useTranslation();

  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleForgetPassword = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/auth/find-password");
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = validatePassword(setPasswordError, password);

    if (valid) {
      if (!checkPassword(username, password)) {
        setPasswordError(
          "Wrong password. Try again or click Forgot password to reset it."
        );
      } else {
        setPasswordError("");
        setLoading(true);
        setTimeout(() => {
          localStorage.setItem("token", "abcdefghijklmnopqrstuvwxyz");
          setLoading(false);
          navigate("/");
        }, 2000);
      }
    }
  };

  return (
    <div className="password-form-container">
      {loading && <LoadingScreen />}
      <h1 className="welcome-text">{t("content.welcome")}</h1>
      <AccountList userName={username} />
      <form className="password-form" onSubmit={handleSubmit}>
        <FormInput
          type={"password"}
          placeholder={t("content.enterPass")}
          value={password}
          handleChange={setPassword}
          error={passwordError}
          setError={setPasswordError}
        />

        <div className="log-in-form-btn-group">
          <div className="invisible-btn" onClick={handleForgetPassword}>
            <span className="blue-text">{t("content.forgotPass")}</span>
          </div>
          <button type="submit" className="blue-btn">
            <span>{t("content.next")}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
