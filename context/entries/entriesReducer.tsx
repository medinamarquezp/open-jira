import { EntriesProviderInterface, Entry } from "interfaces/EntriesInterfaces";

type Action =
  | { type: "[Entries] toggle-add-entry"; payload: string }
  | { type: "[Entries] add-entry"; payload: Entry };

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
      const entry = action.payload;
      const entries = [entry, ...state.entries];
      return { ...state, entries };
    default:
      return state;
  }
};
