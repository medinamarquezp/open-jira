import {
  EntriesProviderInterface,
  EntryInterface,
  PartialEntryInterface,
} from "interfaces/EntriesInterfaces";

type Action =
  | { type: "[Entries] toggle-add-entry"; payload: string }
  | { type: "[Entries] add-entry"; payload: EntryInterface }
  | {
      type: "[Entries] update-entry";
      payload: { id: string; entry: PartialEntryInterface };
    }
  | { type: "[Entries] refresh-entries"; payload: EntryInterface[] };

export const entriesReducer = (
  state: EntriesProviderInterface,
  action: Action
) => {
  switch (action.type) {
    case "[Entries] toggle-add-entry":
      const entrySlug = action.payload;
      const toggleState = {
        ...state.toggleState,
        [entrySlug]: !state.toggleState[entrySlug],
      };
      const isAddingEntry = Object.values(toggleState).includes(true);
      return { ...state, isAddingEntry, toggleState };

    case "[Entries] add-entry":
      const addedEntry = action.payload;
      const entries = [addedEntry, ...state.entries];
      return { ...state, entries };

    case "[Entries] update-entry":
      const entryIndex = state.entries.findIndex(
        (entry) => entry._id === action.payload.id
      );
      const originalEntry = state.entries[entryIndex];
      state.entries[entryIndex] = {
        ...originalEntry,
        ...action.payload.entry,
      } as EntryInterface;
      return state;
    case "[Entries] refresh-entries":
      return { ...state, entries: action.payload };
    default:
      return state;
  }
};
