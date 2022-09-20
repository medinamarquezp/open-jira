export type Status = "todo" | "doing" | "done";

export type ToggleState = { [status: string]: boolean };

export interface EntriesContextInterface {
  isAddingEntry: boolean;
  toggleState: ToggleState;
  entries: EntryInterface[];
  toggleAddEntry: (payload: string) => void;
  addEntry: (content: string, status: Status) => void;
  getEntriesByStatus: (status: Status) => EntryInterface[];
  updateEntry: (id: string, entry: PartialEntryInterface) => void;
}

export interface EntriesProviderInterface {
  isAddingEntry: boolean;
  toggleState: ToggleState;
  entries: EntryInterface[];
}

export interface EntryInterface {
  _id: string;
  content: string;
  createdAt: number;
  status: Status;
}

export interface PartialEntryInterface
  extends Omit<Partial<EntryInterface>, "_id"> {}
