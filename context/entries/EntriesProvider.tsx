import { FC, PropsWithChildren, useReducer } from "react";
import { EntriesContext } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";

export interface EntriesProviderInterface {
  isAddingEntry: boolean;
}

const INITIAL_STATE: EntriesProviderInterface = {
  isAddingEntry: false,
};

interface Props extends PropsWithChildren {}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, INITIAL_STATE);

  const toggleAddEntry = () => {
    dispatch({ type: "[Entries] toggle-add-entry" });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        toggleAddEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
