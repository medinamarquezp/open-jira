import { createContext } from "react";

export type ToggleState = { [status: string]: boolean };

interface EntriesContextInterface {
  isAddingEntry: boolean;
  toggleState: ToggleState;
  toggleAddEntry: (payload: string) => void;
}

export const EntriesContext = createContext({} as EntriesContextInterface);
