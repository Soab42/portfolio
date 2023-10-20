import { NextResponse as res } from "next/server";
import fs from "fs";
import path from "path";
export async function POST(Request) {
  // console.log(Request);
  // Path to the JSON file
  const filePath = "./data/text.json";

  // Read the existing JSON data from the file
  fs.readFile(filePath, "utf8", (readErr, data) => {
    if (readErr) {
      console.error(readErr);
      return res.json(
        { error: "Error reading JSON file." },
        {
          status: 500,
        }
      );
    }

    // Parse the existing data into a JavaScript object
    const existingData = JSON.parse(data);

    // Sample data to be appended
    const newData = Request.body();
    // Append the new data to the existing data
    existingData.push(newData);
    // console.log(existingData);

    // Write the updated JSON data back to the file
    fs.writeFile(
      filePath,
      JSON.stringify(existingData, null, 2),
      (writeErr) => {
        if (writeErr) {
          console.error(writeErr);
          return res.json(
            { error: "Error writing JSON file." },
            { status: 500 }
          );
        } else {
          console.log("Data appended and JSON file written successfully.");
          return res.json(
            {
              message: "Data appended and JSON file written successfully.",
            },
            {
              status: 200,
            }
          );
        }
      }
    );
  });
}
export async function GET() {
  // Define the path to the JSON file
  try {
    const filePath = path.join(process.cwd(), "data/text.json");
    // Read the JSON file
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    console.log(jsonData);

    // Send the JSON data as a response
    return res.json(jsonData, { status: 200 });
  } catch (error) {
    console.error(error);
    return res.json({ error: "Error reading JSON file" }, { status: 500 });
  }
}
