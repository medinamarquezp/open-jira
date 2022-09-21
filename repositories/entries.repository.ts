import Entry from "db/models/entry.schema";
import { connect, disconnect } from "db/connection";
import {
  EntryInterface,
  PartialEntryInterface,
} from "interfaces/EntriesInterfaces";

export const getEntryList = async (where = {}): Promise<EntryInterface[]> => {
  await connect();
  const entries = await Entry.find<EntryInterface>(where, "-__v").exec();
  await disconnect();
  return entries;
};

export const createEntry = async (
  entry: PartialEntryInterface
): Promise<void> => {
  await connect();
  await Entry.create(entry);
  await disconnect();
};

export const updateEntry = async (
  _id: number,
  entry: PartialEntryInterface
): Promise<void> => {
  await connect();
  await Entry.updateOne({ _id }, { ...entry });
  await disconnect();
};
