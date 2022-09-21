import { EntryInterface, Status } from "interfaces/EntriesInterfaces";
import { client } from "../client.instance";

export const getEntries = async (
  status?: Status
): Promise<EntryInterface[]> => {
  const path = status ? `/entries?status=${status}` : `/entries`;
  const response = await client.get<{ entries: EntryInterface[] }>(path);
  return response.data.entries;
};
