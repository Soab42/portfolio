<<<<<<< HEAD
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
=======
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
>>>>>>> 41aacb10138a7bc96d479eebc451410c1dd06ab7
