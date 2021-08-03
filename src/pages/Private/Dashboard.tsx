import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Dashboard() {
  const authContext = React.useContext(AuthContext);
  const toggleAuth = () => {
    authContext.updateContext("isAuth", !authContext.isAuth);
  };
  return (
    <div>
      Dashboard
      <Link to="/app/privatepageone">Link</Link>
      <button onClick={toggleAuth}>Toggle auth</button>
    </div>
  );
}
