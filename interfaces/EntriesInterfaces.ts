export type Status = "todo" | "doing" | "done";

export type ToggleState = { [status: string]: boolean };

export interface EntriesContextInterface {
  isAddingEntry: boolean;
  toggleState: ToggleState;
  entries: Entry[];
  toggleAddEntry: (payload: string) => void;
  addEntry: (content: string, status: Status) => void;
  getEntriesByStatus: (status: Status) => Entry[];
  updateEntry: (id: string, entry: PartialEntry) => void;
}

export interface EntriesProviderInterface {
  isAddingEntry: boolean;
  toggleState: ToggleState;
  entries: Entry[];
}

export interface Entry {
  id: string;
  content: string;
  createdAt: number;
  status: Status;
}

export interface PartialEntry
  extends Omit<Partial<Entry>, "id" | "createdAt"> {}
