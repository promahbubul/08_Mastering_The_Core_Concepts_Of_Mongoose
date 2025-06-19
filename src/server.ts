import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from './app/config';
dotenv.config();

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`server running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
