import { Outlet } from "react-router-dom";
import { logos } from "../../themes";
import "./styles.css";

export const AuthLayout = () => {
  return (
    <div className="auth-container">
      <div className="log-in-sign-up-wrapper">
        <div className="form-frame">
          <img src={logos.lgGoogle} alt="Google logo" />
          <Outlet />
        </div>
        <div className="footer-menu">
          <select className="language-selector">
            <option>English</option>
            <option>Vietnamese</option>
          </select>
          <ul>
            <li>
              <a href="https://support.google.com/accounts?hl=en&p=account_iph">
                Help
              </a>
            </li>
            <li>
              <a href="https://accounts.google.com/TOS?loc=VN&hl=en&privacy=true">
                Privacy
              </a>
            </li>
            <li>
              <a href="https://accounts.google.com/TOS?loc=VN&hl=en">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
