import { FC, PropsWithChildren, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { EntriesContext } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";
import {
  EntryInterface,
  EntriesProviderInterface,
  ToggleState,
  Status,
  PartialEntryInterface,
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
    const payload: EntryInterface = {
      id: uuidv4(),
      createdAt: Date.now(),
      content,
      status,
    };
    dispatch({ type: "[Entries] add-entry", payload });
  };

  const getEntriesByStatus = (status: Status) => {
    return state.entries.filter((entry) => entry.status === status);
  };

  const updateEntry = (id: string, entry: PartialEntryInterface) => {
    dispatch({ type: "[Entries] update-entry", payload: { id, entry } });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        toggleAddEntry,
        addEntry,
        getEntriesByStatus,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
