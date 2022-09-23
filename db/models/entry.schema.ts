import { EntryInterface } from "interfaces/EntriesInterfaces";
import mongoose, { Model } from "mongoose";
const { Schema } = mongoose;

const EntrySchema = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: {
      values: ["todo", "doing", "done"],
      message: "{VALUE} is not supported",
    },
  },
});

const Entry: Model<EntryInterface> =
  mongoose.models.Entry || mongoose.model("Entry", EntrySchema);

export default Entry;
