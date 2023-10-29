import { useState } from "react";
import { Outlet } from "react-router-dom";
import { logos } from "../../themes";
import { useTranslation } from "react-i18next";
import "./styles.css";

export const AuthLayout = () => {
  const { i18n, t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="auth-container">
      <div className="log-in-sign-up-wrapper">
        <div className="form-frame">
          <img src={logos.lgGoogle} alt="Google logo" />
          <Outlet />
        </div>
        <div className="footer-menu">
          <select
            name="languages"
            id="languages"
            className="language-selector"
            onChange={handleChangeLanguage}
            value={selectedLanguage}
          >
            <option value="en">{t("content.english")}</option>
            <option value="vi">{t("content.vietnamese")}</option>
          </select>
          <div className="help-list">
            <div className="help-list-item">
              <a href="https://support.google.com/accounts?hl=en&p=account_iph">
                {t("content.help")}
              </a>
            </div>
            <div className="help-list-item">
              <a href="https://accounts.google.com/TOS?loc=VN&hl=en&privacy=true">
                {t("content.privacy")}
              </a>
            </div>
            <div className="help-list-item">
              <a href="https://accounts.google.com/TOS?loc=VN&hl=en">
                {t("content.terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
