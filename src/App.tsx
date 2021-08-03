import React from "react";

import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { GlobalUiContextProvider } from "./context/GlobalUIContext";
import Router from "./router";
function App() {
  return (
    <GlobalUiContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthContextProvider>
    </GlobalUiContextProvider>
  );
}

export default App;
