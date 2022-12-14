import Entry from "db/models/entry.schema";
import { connect, disconnect } from "db/connection";
import { PartialEntryInterface } from "interfaces/EntriesInterfaces";

const entriesSeed: PartialEntryInterface[] = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut enim at turpis rhoncus congue a et libero.",
    status: "todo",
    createdAt: Date.now(),
  },
  {
    content:
      "Aenean facilisis sapien in varius facilisis. Vivamus sit amet nunc lacus.",
    status: "todo",
    createdAt: Date.now() - 10000,
  },
  {
    content:
      "Curabitur et sollicitudin nunc. Aliquam vitae ultrices nulla, id molestie dui.",
    status: "doing",
    createdAt: Date.now() - 100000,
  },
  {
    content:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mauris eros, aliquet et dapibus tincidunt, tincidunt at mauris.",
    status: "done",
    createdAt: Date.now() - 300000,
  },
];

export const seedEntries = async () => {
  await connect();
  await Entry.deleteMany();
  await Entry.insertMany(entriesSeed);
  await disconnect();
  return { message: "Entries seeded successfully" };
};
