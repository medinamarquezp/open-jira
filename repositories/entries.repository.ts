import Entry from "db/models/entry.schema";
import { connect, disconnect } from "db/connection";
import {
  EntryInterface,
  PartialEntryInterface,
} from "interfaces/EntriesInterfaces";

export const getEntryById = async (
  _id: string
): Promise<EntryInterface | null> => {
  await connect();
  const entry = await Entry.findOne<EntryInterface>({ _id }, "-__v");
  await disconnect();
  return entry;
};

export const getEntryList = async (where = {}): Promise<EntryInterface[]> => {
  await connect();
  const entries = await Entry.find<EntryInterface>(where, "-__v")
    .sort({ createdAt: -1 })
    .exec();
  await disconnect();
  return entries;
};

export const createEntry = async (entry: PartialEntryInterface) => {
  await connect();
  const createdEntry = new Entry(entry);
  await disconnect();
  return await createdEntry.save();
};

export const updateEntry = async (
  _id: string,
  entry: PartialEntryInterface
): Promise<void> => {
  await connect();
  await Entry.updateOne({ _id }, { ...entry });
  await disconnect();
};
