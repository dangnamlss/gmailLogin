import { useState } from "react";
import "./styles.css";
import { icons } from "../../themes";

export const FormInput = ({
  placeholder,
  type,
  handleChange,
  value,
  error,
  setError,
}) => {
  const [isShowPass, setIsShowPass] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleCheckShowPass = (e) => {
    e.stopPropagation();
    setIsShowPass(!isShowPass);
  };

  const handleInputFocus = () => {
    if (setError) {
      setError("");
    }
    setIsFocused(true);
  };

  const handleInputBlur = (e) => {
    if (e.target.value) return;
    setIsFocused(false);
  };

  return (
    <div className="input-container">
      <input
        className={`text-input ${isFocused ? "focused" : ""} ${
          error ? "errored-i" : ""
        }`}
        type={isShowPass ? "text" : type}
        onFocus={handleInputFocus}
        onBlur={(e) => handleInputBlur(e)}
        onChange={(e) => handleChange(e.target.value)}
        value={value}
      />
      <label
        className={`placeholder ${isFocused ? "focused" : ""} ${
          error ? "errored-p" : ""
        }`}
      >
        {placeholder}
      </label>
      {error && (
        <div className="input-error">
          <img className="error-img" src={icons.icError} alt="error icon" />
          <span className="error-text">{error}</span>
        </div>
      )}
      {type === "password" && (
        <div className="show-pass-checkbox">
          <input
            type="checkbox"
            id="show-pass"
            onChange={(e) => handleCheckShowPass(e)}
          />
          <label htmlFor="show-pass">Show password</label>
        </div>
      )}
    </div>
  );
};
