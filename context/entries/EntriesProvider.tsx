import { FC, PropsWithChildren, useReducer } from "react";
import { EntriesContext } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";
import {
  EntriesProviderInterface,
  ToggleState,
} from "interfaces/EntriesInterfaces";

export const toggleState: ToggleState = {
  todo: false,
  doing: false,
  done: false,
};

const INITIAL_STATE: EntriesProviderInterface = {
  isAddingEntry: false,
  toggleState,
};

interface Props extends PropsWithChildren {}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, INITIAL_STATE);

  const toggleAddEntry = (payload: string) => {
    dispatch({ type: "[Entries] toggle-add-entry", payload });
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
