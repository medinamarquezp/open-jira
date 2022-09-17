import { FC, PropsWithChildren, useReducer } from "react";
import { EntriesContext, ToggleState } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";

export interface EntriesProviderInterface {
  isAddingEntry: boolean;
  toggleState: ToggleState;
}

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
