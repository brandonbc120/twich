import mongoose from "mongoose";

const connect = async (): Promise<boolean> => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export default connect;
