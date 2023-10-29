import { useState } from "react";
import { FormInput } from "../../components/FormInput";
import "./styles.css";
import { validateFirstName, validateLastName } from "../../utils/Validate";
import { useTranslation } from "react-i18next";

export const CreateAccountForm = () => {
  const { t } = useTranslation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const validFirstName = validateFirstName(setFirstNameError, firstName);
    const validLastName = validateLastName(setLastNameError, lastName);

    if (validFirstName && validLastName) {
      setFirstNameError('')
      setLastNameError('')
    }
  };
  return (
    <div className="create-account-form-container">
      <h1 className="welcome-text">{t("content.createAccTitle")}</h1>
      <div className="log-in-sub-title">{t("content.enterName")}</div>

      <form className="create-account-form" onSubmit={handleSubmit}>
        <div className="create-account-input-group">
          <FormInput
            type={"text"}
            placeholder={t("content.firstName")}
            value={firstName}
            handleChange={setFirstName}
            error={firstNameError}
            setError={setFirstNameError}
          />
          <FormInput
            type={"text"}
            placeholder={t("content.surName")}
            value={lastName}
            handleChange={setLastName}
            error={lastNameError}
            setError={setLastNameError}
          />
        </div>
        <div className="forget-email-btn-group">
          <button type="submit" className="blue-btn">
            <span>{t("content.next")}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
