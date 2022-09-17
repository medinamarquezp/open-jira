import {
  EntriesProviderInterface,
  Entry,
  PartialEntry,
} from "interfaces/EntriesInterfaces";

type Action =
  | { type: "[Entries] toggle-add-entry"; payload: string }
  | { type: "[Entries] add-entry"; payload: Entry }
  | {
      type: "[Entries] update-entry";
      payload: { id: string; entry: PartialEntry };
    };

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
        (entry) => entry.id === action.payload.id
      );
      const originalEntry = state.entries[entryIndex];
      state.entries[entryIndex] = {
        ...originalEntry,
        ...action.payload.entry,
      } as Entry;
      return state;

    default:
      return state;
  }
};
