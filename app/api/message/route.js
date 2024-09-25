<<<<<<< HEAD
import admin from "@/firebase";
import { NextResponse as res } from "next/server";

export async function POST(req) {
  const data = await req.json();
  // console.log(await req.json());
  const firebaseDatabaseRef = admin.database().ref();

  firebaseDatabaseRef.child("portfolio/message").push().set(data);

  return res.json({ data: data });
}

export async function GET(req) {
  try {
    const snapshot = await admin
      .database()
      .ref("portfolio/message")
      .once("value");

    const data = snapshot.val();
    // console.log(data);
    return res.json(Object.values(data));
  } catch (error) {
    console.error("Error: " + error.message);
    return res.json({ error: error.message }, { status: 500 });
  }
  // return res.json({ data: data });
}
=======
import admin from "@/firebase";
import { NextResponse as res } from "next/server";

export async function POST(req) {
  const data = await req.json();
  // console.log(await req.json());
  const firebaseDatabaseRef = admin.database().ref();

  firebaseDatabaseRef.child("portfolio/message").push().set(data);

  return res.json({ data: data });
}

export async function GET(req) {
  try {
    const snapshot = await admin
      .database()
      .ref("portfolio/message")
      .once("value");

    const data = snapshot.val();
    // console.log(data);
    return res.json(Object.values(data));
  } catch (error) {
    console.error("Error: " + error.message);
    return res.json({ error: error.message }, { status: 500 });
  }
  // return res.json({ data: data });
}
>>>>>>> 41aacb10138a7bc96d479eebc451410c1dd06ab7
