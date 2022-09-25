import type { NextApiRequest, NextApiResponse } from "next";
import { updateEntry, deleteEntry } from "repositories/entries.repository";

export default async function entry(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "PATCH":
      const id = req.query.id as string;
      const { content, status } = req.body;
      await updateEntry(id, {
        ...(content && { content }),
        ...(status && { status }),
      });
      return res.status(200).json({ message: "Entry updated successfully" });
    case "DELETE":
      const idToDelete = req.query.id as string;
      await deleteEntry(idToDelete);
      return res.status(200).json({ message: "Entry deleted successfully" });
    default:
      return res.status(404).json({ name: "Resource not found" });
  }
}
