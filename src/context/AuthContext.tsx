import React from "react";

interface AuthContextState {
  isAuth: boolean;
}

interface AuthContextProps extends AuthContextState {
  updateContext: (key: keyof AuthContextState, value: any) => void;
}

export const AuthContext = React.createContext<AuthContextProps>({
  isAuth: false,
  updateContext: () => {},
});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<AuthContextState>({
    isAuth: false,
  });

  const updateContext = (key: keyof AuthContextState, value: any) => {
    setState((currentState) => {
      return {
        ...currentState,
        [key]: value,
      };
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, updateContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContextConsumer = AuthContext.Consumer;
