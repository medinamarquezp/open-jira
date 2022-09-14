import { FC, PropsWithChildren, useReducer } from "react";
import { UIContext } from "./UIContext";
import { uiReducer } from "./uiReducer";

export interface UIProviderInterface {
  isSidebarOpened: boolean;
}

const INITIAL_STATE: UIProviderInterface = {
  isSidebarOpened: false,
};

interface Props extends PropsWithChildren {}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

  const toggleSidebar = () => {
    dispatch({ type: "[UI] toggle-sidebar" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        toggleSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
