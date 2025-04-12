import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

export async function GET(request) {
    try {
        // Extract disease name from query parameters
        const { searchParams } = new URL(request.url);
        const diseaseQuery = searchParams.get("disease");

        if (!diseaseQuery) {
            return new Response(JSON.stringify({ message: "Please provide a disease name as a query parameter." }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Define paths to Excel files
        const descriptionPath = path.join(process.cwd(), "public", "symptom_Description.csv");
        const precautionPath = path.join(process.cwd(), "public", "symptom_precaution.csv");

        // Read and parse description file
        const descriptionBuffer = fs.readFileSync(descriptionPath);
        const descriptionWorkbook = XLSX.read(descriptionBuffer, { type: "buffer" });
        const descriptionSheet = descriptionWorkbook.Sheets[descriptionWorkbook.SheetNames[0]];
        const descriptions = XLSX.utils.sheet_to_json(descriptionSheet);

        // Read and parse precaution file
        const precautionBuffer = fs.readFileSync(precautionPath);
        const precautionWorkbook = XLSX.read(precautionBuffer, { type: "buffer" });
        const precautionSheet = precautionWorkbook.Sheets[precautionWorkbook.SheetNames[0]];
        const precautions = XLSX.utils.sheet_to_json(precautionSheet);

        // Create a dictionary for quick lookup
        const descriptionMap = {};
        descriptions.forEach(item => {
            descriptionMap[item.Disease.toLowerCase()] = item.Description || "Enough information is not available.";
        });

        const precautionMap = {};
        precautions.forEach(item => {
            precautionMap[item.Disease.toLowerCase()] = [
                item.Precaution_1, 
                item.Precaution_2, 
                item.Precaution_3, 
                item.Precaution_4
            ].filter(Boolean); // Removes empty values

            if (precautionMap[item.Disease.toLowerCase()].length === 0) {
                precautionMap[item.Disease.toLowerCase()] = ["Enough information is not available."];
            }
        });

        // Convert input query to lowercase for case-insensitive search
        const diseaseKey = diseaseQuery.toLowerCase();

        // Retrieve data
        const responseData = {
            Disease: diseaseQuery,
            Description: descriptionMap[diseaseKey] || "Enough information is not available.",
            Precaution: precautionMap[diseaseKey] || ["Enough information is not available."]
        };

        // Return JSON response
        return new Response(JSON.stringify(responseData), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        return new Response(JSON.stringify({ message: "Failed to load data", error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}