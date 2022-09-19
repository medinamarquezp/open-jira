import type { NextApiRequest, NextApiResponse } from "next";
import { seedEntries } from "db/seeds/entries.seed";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (process.env.NODE_ENV !== "development") {
      throw new Error("Endpoint not found");
    }
    if (req.headers.code !== process.env.INTERNAL_KEY) {
      throw new Error("Invalid internal key");
    }
    const result = await seedEntries();
    res.status(200).json(result);
  } catch (err) {
    const { message } = err as Error;
    res.status(404).json({ message });
  }
}
