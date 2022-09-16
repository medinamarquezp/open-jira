import { createContext } from "react";

interface EntriesContextInterface {
  isAddingEntry: boolean;
  toggleAddEntry: () => void;
}

export const EntriesContext = createContext({} as EntriesContextInterface);
