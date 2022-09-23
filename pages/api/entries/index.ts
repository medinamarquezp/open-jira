import type { NextApiRequest, NextApiResponse } from "next";
import { getEntryList, createEntry } from "repositories/entries.repository";

export default async function entries(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const { status } = req.query;
      const entries = await getEntryList({ ...(status && { status }) });
      return res.status(200).json({ entries });
    case "POST":
      const { content, status: newStatus } = req.body;
      const entry = { content, status: newStatus, createdAt: Date.now() };
      const createdEntry = await createEntry(entry);
      return res.status(201).json({ ...createdEntry });
    default:
      return res.status(404).json({ name: "Resource not found" });
  }
}
