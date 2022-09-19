import { connect, Mongoose } from "mongoose";

export const getConnection = async (): Promise<Mongoose> => {
  let connection!: Mongoose;
  try {
    connection = await connect(process.env.MONGODB_PATH || "");
  } catch (error) {
    console.error(error);
    throw new Error("Error on creating database connection");
  }
  return connection;
};
