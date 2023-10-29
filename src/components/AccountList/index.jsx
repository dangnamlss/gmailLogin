import { icons } from "../../themes";
import "./styles.css";

export const AccountList = ({ userName }) => {
  return (
    <div className="account-list-container">
      <div className="acc-list">
        <img src={icons.icAvatar} alt="Avatar" />
        <label>{userName}</label>
      </div>
    </div>
  );
};
