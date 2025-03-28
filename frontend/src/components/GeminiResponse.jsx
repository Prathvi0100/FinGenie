// // import React from 'react'

// // const GeminiResponse = ({ response }) => {
// //     if (!response) return null; // Ensure response exists

// //     // Access response data and unwrap the top-level object
// //     const data = response.data.result || response.data; // Adjust based on your structure

// //     // Convert JSON to readable text
// //     const convertToText = (obj) => {
// //         if (typeof obj === "string" || typeof obj === "number") return obj; // Return directly if primitive
// //         if (Array.isArray(obj)) return obj.map(convertToText).join(", "); // Handle arrays
// //         if (typeof obj === "object" && obj !== null) {
// //             // Handle objects
// //             return Object.entries(obj)
// //                 .map(([key, value]) => `${key}: ${convertToText(value)}`)
// //                 .join("\n");
// //         }
// //         return ""; // Return empty for unsupported types
// //     };

// //     const text = convertToText(data);

// //     return (
// //         <div
// //             style={{
// //                 maxHeight: "400px", // Set maximum height
// //                 overflowY: "auto", // Enable vertical scrolling
// //                 border: "1px solid #ccc", // Optional: Add border for clarity
// //                 padding: "10px", // Optional: Add padding for readability
// //                 whiteSpace: "pre-wrap", // Preserve formatting
// //                 backgroundColor: "#343541", // Optional: Light background for readability
// //                 borderRadius: "12px", // Optional: Rounded corners
// //                 color: "#ececf1",
// //                 margin: "15px 0px",
// //                 padding: "20px",
// //                 whiteSpace: "pre-wrap",
// //             }}
// //         >
// //             <p>{text || "No text available"}</p>
// //         </div>
// //     );
// // };

// // export default GeminiResponse

// import React from 'react';

// const GeminiResponse = ({ response }) => {
//     if (!response) return null; // Ensure response exists

//     // Check for different response structures
//     const data = response?.data?.response || response?.data || response; 

//     // Convert JSON to readable text
//     const convertToText = (obj) => {
//         if (typeof obj === "string" || typeof obj === "number") return obj; // Return directly if primitive
//         if (Array.isArray(obj)) return obj.map(convertToText).join(", "); // Handle arrays
//         if (typeof obj === "object" && obj !== null) {
//             return Object.entries(obj)
//                 .map(([key, value]) => `${key}: ${convertToText(value)}`)
//                 .join("\n");
//         }
//         return ""; // Return empty for unsupported types
//     };

//     const text = convertToText(data);

//     return (
//         <div
//             style={{
//                 maxHeight: "400px",
//                 overflowY: "auto",
//                 border: "1px solid #ccc",
//                 padding: "10px",
//                 whiteSpace: "pre-wrap",
//                 backgroundColor: "#343541",
//                 borderRadius: "12px",
//                 color: "#ececf1",
//                 margin: "15px 0px",
//                 padding: "20px",
//             }}
//         >
//             <p>{text || "No response available"}</p>
//         </div>
//     );
// };

// export default GeminiResponse;

import React from 'react';

const GeminiResponse = ({ response }) => {
    if (!response) return null; // Ensure response exists

    // Check for different response structures
    const data = response?.data?.response || response?.data || response; 

    // Convert JSON to readable text
    const convertToText = (obj) => {
        if (typeof obj === "string" || typeof obj === "number") return obj; // Return directly if primitive
        if (Array.isArray(obj)) return obj.map(convertToText).join(", "); // Handle arrays
        if (typeof obj === "object" && obj !== null) {
            return Object.entries(obj)
                .map(([key, value]) => `${key}: ${convertToText(value)}`)
                .join("\n");
        }
        return ""; // Return empty for unsupported types
    };

    const text = convertToText(data);

    return (
        <div
            style={{
                maxHeight: "400px",
                overflowY: "auto",
                border: "1px solid #ccc",
                padding: "10px",
                whiteSpace: "pre-wrap",
                backgroundColor: "#343541",
                borderRadius: "12px",
                color: "#ececf1",
                margin: "15px 0px",
                padding: "20px",
            }}
        >
            <p>{text || "No response available"}</p>
        </div>
    );
};

export default GeminiResponse;
