import { EntriesProviderInterface } from "./EntriesProvider";

type Action = { type: "[Entries] toggle-add-entry" };

export const entriesReducer = (
  state: EntriesProviderInterface,
  action: Action
) => {
  switch (action.type) {
    case "[Entries] toggle-add-entry":
      return { ...state, isAddingEntry: !state.isAddingEntry };
    default:
      return state;
  }
};
