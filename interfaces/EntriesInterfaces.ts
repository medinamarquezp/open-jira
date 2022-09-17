export type ToggleState = { [status: string]: boolean };

export interface EntriesContextInterface {
  isAddingEntry: boolean;
  toggleState: ToggleState;
  toggleAddEntry: (payload: string) => void;
}

export interface EntriesProviderInterface {
  isAddingEntry: boolean;
  toggleState: ToggleState;
}
