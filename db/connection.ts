import { connect } from "mongoose";

const getConnection = async () => {
  try {
    return await connect(process.env.MONGODB_PATH || "");
  } catch (error) {
    console.error(error);
  }
};
