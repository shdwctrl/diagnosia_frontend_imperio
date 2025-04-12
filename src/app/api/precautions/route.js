import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

export async function GET() {
    try {
        // Define the path to the Excel file
        const filePath = path.join(process.cwd(), "public", "symptom_precaution.csv");

        // Read the file from the server
        const fileBuffer = fs.readFileSync(filePath);

        // Parse the Excel file
        const workbook = XLSX.read(fileBuffer, { type: "buffer" });

        // Get the first sheet name
        const sheetName = workbook.SheetNames[0];

        // Convert sheet data into JSON format
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        // Return JSON response
        return new Response(JSON.stringify(sheetData), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Failed to load data", error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}