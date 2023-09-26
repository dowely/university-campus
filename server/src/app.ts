import { MongoClient, ServerApiVersion, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DB_CONNECTION_STRING: string;
    }
  }
}

const client = new MongoClient(process.env.DB_CONNECTION_STRING, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export let db: Db;

(async () => {
  try {
    await client.connect();

    db = client.db();

    console.log("\x1b[96m[app]: Connected to the database...\x1b[0m");
  } catch (e) {
    console.log("\x1b[91m[app]: Failed connecting to the database:\n\x1b[0m", e);
    return;
  }

  try {
    (await import("./server")).default.listen(process.env.PORT, () => {
      console.log(`\x1b[34m[app]: Listening on port ${process.env.PORT}...\x1b[0m`);
    });
  } catch (e) {
    console.log("\x1b[91m[app]: Failed starting the server:\n\x1b[0m", e);
  }
})();
