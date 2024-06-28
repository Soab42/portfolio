import admin from "firebase-admin";
import { fireConfig } from "./fireConfig";

try {
  admin.initializeApp({
    credential: admin.credential.cert(fireConfig),
    databaseURL: "https://syfuddhin2k23-default-rtdb.firebaseio.com",
  });
  console.log("Initialized.");
} catch (error) {}

// const storage = getStorage().bucket();
// const Auth = admin.auth();
export { admin as default };
