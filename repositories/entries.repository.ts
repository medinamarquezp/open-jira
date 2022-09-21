import { Mongoose } from "mongoose";

import Entry from "db/models/entry.schema";
import { getConnection } from "db/connection";
import {
  EntryInterface,
  PartialEntryInterface,
} from "interfaces/EntriesInterfaces";

export const getEntryList = async (where = {}): Promise<EntryInterface[]> => {
  let connection!: Mongoose;
  let entries: EntryInterface[] = [];
  try {
    connection = await getConnection();
    entries = await Entry.find<EntryInterface>(where, "-__v").exec();
  } catch (error) {
    console.error(error);
  } finally {
    await connection.disconnect();
  }
  return entries;
};

export const createEntry = async (
  entry: PartialEntryInterface
): Promise<void> => {
  let connection!: Mongoose;
  try {
    connection = await getConnection();
    await Entry.create(entry);
  } catch (error) {
    console.error(error);
  } finally {
    await connection.disconnect();
  }
};

export const updateEntry = async (
  _id: number,
  entry: PartialEntryInterface
): Promise<void> => {
  let connection!: Mongoose;
  try {
    connection = await getConnection();
    await Entry.updateOne({ _id }, { ...entry });
  } catch (error) {
    console.error(error);
  } finally {
    await connection.disconnect();
  }
};
