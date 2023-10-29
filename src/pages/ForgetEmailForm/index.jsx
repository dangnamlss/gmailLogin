import { useState } from "react";
import { FormInput } from "../../components/FormInput";
import { validateEmailOrPhone } from "../../utils/Validate";
import { useTranslation } from "react-i18next";
import "./styles.css";

export const ForgetEmailForm = () => {
  const { t } = useTranslation();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [emailOrPhoneError, setEmailOrPhoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = validateEmailOrPhone(setEmailOrPhoneError, emailOrPhone);

    if (valid) {
      setEmailOrPhoneError("");
    }
  };
  
  return (
    <div className="forget-email-form-container">
      <h1 className="welcome-text">{t("content.findEmail")}</h1>
      <div className="log-in-sub-title">
      {t("content.findEmailSub")}
      </div>

      <form className="forget-email-form" onSubmit={handleSubmit}>
        <FormInput
          type={"text"}
          placeholder={t("content.emailOrPhone")}
          value={emailOrPhone}
          handleChange={setEmailOrPhone}
          error={emailOrPhoneError}
          setError={setEmailOrPhoneError}
        />
        <div className="forget-email-btn-group">
          <button className="blue-btn">
            <span>{t("content.next")}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
