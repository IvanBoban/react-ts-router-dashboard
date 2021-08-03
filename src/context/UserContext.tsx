import React from "react";

interface UserContextState {
  name: string | undefined;
}

interface UserContextProps extends UserContextState {
  updateContext: (key: keyof UserContextState, value: any) => void;
}

export const UserContext = React.createContext<UserContextProps>({
  name: undefined,
  updateContext: () => {},
});

export const UserContextProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<UserContextState>({
    name: undefined,
  });

  const updateContext = (key: keyof UserContextState, value: any) => {
    setState((currentState) => {
      return {
        ...currentState,
        [key]: value,
      };
    });
  };

  React.useEffect(() => {
    console.log("log from private router");
  }, []);

  return (
    <UserContext.Provider value={{ ...state, updateContext }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserContextConsumer = UserContext.Consumer;
