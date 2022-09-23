import {
  EntryInterface,
  PartialEntryInterface,
  Status,
} from "interfaces/EntriesInterfaces";
import { client } from "../client.instance";

export const getEntriesApi = async (
  status?: Status
): Promise<EntryInterface[]> => {
  const path = status ? `/entries?status=${status}` : `/entries`;
  const response = await client.get<{ entries: EntryInterface[] }>(path);
  return response.data.entries;
};

export const createEntryApi = async (
  data: PartialEntryInterface
): Promise<EntryInterface> => {
  const response = await client.post("/entries", data);
  const createdEntry = response.data._doc;
  delete createdEntry.__v;
  return createdEntry;
};

export const updateEntryApi = async (
  id: string,
  data: PartialEntryInterface
) => {
  const path = `/entries/${id}`;
  await client.patch(path, data);
};
