import React from "react";

interface GlobalUIContextState {
  isLoading: boolean;
}

interface GlobalUIContextProps extends GlobalUIContextState {
  updateContext: (key: keyof GlobalUIContextState, value: any) => void;
}

export const GlobalUIContext = React.createContext<GlobalUIContextProps>({
  isLoading: false,
  updateContext: () => {},
});

export const GlobalUiContextProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<GlobalUIContextState>({
    isLoading: false,
  });

  const updateContext = (key: keyof GlobalUIContextState, value: any) => {
    setState((currentState) => {
      return {
        ...currentState,
        [key]: value,
      };
    });
  };

  return (
    <GlobalUIContext.Provider value={{ ...state, updateContext }}>
      {children}
    </GlobalUIContext.Provider>
  );
};
