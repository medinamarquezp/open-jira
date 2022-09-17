import { EntriesProviderInterface, toggleState } from "./EntriesProvider";

type Action = { type: "[Entries] toggle-add-entry"; payload: string };

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
    default:
      return state;
  }
};
