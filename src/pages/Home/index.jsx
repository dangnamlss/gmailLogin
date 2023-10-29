import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";

export const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogOut = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      setLoading(false);
      navigate("/auth/log-in/account");
    }, 2000);
  };
  return (
    <div>
      {loading && <LoadingScreen />}
      <h1>HOME PAGE</h1>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};
