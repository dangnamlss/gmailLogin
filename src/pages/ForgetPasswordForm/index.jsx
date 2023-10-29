import { useState } from "react";
import { AccountList } from "../../components/AccountList";
import { FormInput } from "../../components/FormInput";
import { validatePassword } from "../../utils/Validate";
import { useTranslation } from "react-i18next";
import "./styles.css";

export const ForgetPasswordForm = () => {
  const { t } = useTranslation();

  const userName = localStorage.getItem("username");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = validatePassword(setPasswordError, password);

    if (valid) {
      setPasswordError("");
    }
  };
  return (
    <div className="forget-password-form-container">
      <h1 className="log-in-title">{t("content.accRecover")}</h1>
      <AccountList userName={userName} />

      <form className="forget-password-form" onSubmit={handleSubmit}>
        <div className="forget-password-sub-title">
        {t("content.accRecoverSub")}
        </div>
        <FormInput
          type={"password"}
          placeholder={t("content.enterLastPass")}
          value={password}
          handleChange={setPassword}
          error={passwordError}
          setError={setPasswordError}
        />

        <div className="forget-password-btn-group">
          <div className="invisible-btn">
            <span className="blue-text">{t("content.tryAnotherWay")}</span>
          </div>
          <button className="blue-btn" type="submit">
            <span>{t("content.next")}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
