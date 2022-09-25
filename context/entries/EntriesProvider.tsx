import { FC, PropsWithChildren, useEffect, useReducer } from "react";

import { EntriesContext } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";
import {
  EntriesProviderInterface,
  ToggleState,
  Status,
  PartialEntryInterface,
} from "interfaces/EntriesInterfaces";
import {
  getEntriesApi,
  createEntryApi,
  updateEntryApi,
  deleyeEntryApi,
} from "api/entries/entries.api";

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

  const addEntry = async (content: string, status: Status) => {
    const payload = await createEntryApi({
      content,
      status,
    });
    await dispatch({ type: "[Entries] add-entry", payload });
  };

  const updateEntry = async (id: string, entry: PartialEntryInterface) => {
    await updateEntryApi(id, entry);
    await refreshEntries();
    dispatch({ type: "[Entries] update-entry", payload: { id, entry } });
  };

  const deleteEntry = async (id: string) => {
    await deleyeEntryApi(id);
    await refreshEntries();
  };

  const refreshEntries = async () => {
    const entries = await getEntriesApi();
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
        deleteEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
