import React from "react";
import { Link } from "react-router-dom";

export default function PrivatePageOne() {
  return (
    <div>
      Private Page One
      <Link to="/app">Dashboard</Link>
      <Link to="/unauth">Unauth</Link>
    </div>
  );
}
