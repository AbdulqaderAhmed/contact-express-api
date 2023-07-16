import mongoose from "mongoose";

const connected = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION);
    console.log(
      `Connection established ${connect.connection.host} ${connect.connection.name}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connected;
