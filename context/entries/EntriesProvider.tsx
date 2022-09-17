import { FC, PropsWithChildren, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { EntriesContext } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";
import {
  Entry,
  EntriesProviderInterface,
  ToggleState,
  Status,
} from "interfaces/EntriesInterfaces";

export const toggleState: ToggleState = {
  todo: false,
  doing: false,
  done: false,
};

const INITIAL_STATE: EntriesProviderInterface = {
  isAddingEntry: false,
  toggleState,
  entries: [],
};

interface Props extends PropsWithChildren {}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, INITIAL_STATE);

  const toggleAddEntry = (payload: string) => {
    dispatch({ type: "[Entries] toggle-add-entry", payload });
  };

  const addEntry = (content: string, status: Status) => {
    const payload: Entry = {
      id: uuidv4(),
      createdAt: Date.now(),
      content,
      status,
    };
    dispatch({ type: "[Entries] add-entry", payload });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        toggleAddEntry,
        addEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
