import { FC, PropsWithChildren, useEffect, useReducer } from "react";
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
import { getEntries } from "api/entries/entries.api";

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
      _id: uuidv4(),
      createdAt: Date.now(),
      content,
      status,
    };
    dispatch({ type: "[Entries] add-entry", payload });
  };

  const updateEntry = (id: string, entry: PartialEntryInterface) => {
    dispatch({ type: "[Entries] update-entry", payload: { id, entry } });
  };

  const refreshEntries = async () => {
    const entries = await getEntries();
    dispatch({ type: "[Entries] refresh-entries", payload: entries });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        toggleAddEntry,
        addEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
