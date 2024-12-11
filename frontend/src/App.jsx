import PublicNavbar from './components/PublicNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/HomePage'
// import Login from './components/Login'
import Register from './components/Register'
import Learn from './components/Learn';
function App() {
  return (<>
    <BrowserRouter>
      <PublicNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/register" element={<Register />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </BrowserRouter>

  </>

  )
}


export default App
// import { useState, useEffect, useCallback } from 'react';
// import { Modal, Typography, Box, TextField, LinearProgress } from '@mui/material';
// import axios from "axios";
// import GeminiResponse from './components/geminiResponse';

// function App() {
//   const [open, setOpen] = useState(false);
//   const [prompt, setPrompt] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [listening, setListening] = useState(false);
//   const [transcriptCaptured, setTranscriptCaptured] = useState(false); // Tracks if input was captured

//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   const recognition = SpeechRecognition ? new SpeechRecognition() : null;

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const speak = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.rate = 1;
//     utterance.pitch = 1;
//     utterance.volume = 1;
//     window.speechSynthesis.speak(utterance);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission
//     setResponse(""); // Clear previous response
//     setLoading(true); // Show loading spinner

//     try {
//       const res = await axios.post('http://localhost:5000/api/content', { prompt });

//       // Extract and sanitize the response text
//       const rawResponse = res.data.result || "Here is the response from Gemini.";
//       const sanitizedResponse = rawResponse.replace(/\bresult\b/gi, ""); // Remove standalone 'result' (case-insensitive)

//       setResponse(res); // Save the response for display
//       speak(sanitizedResponse.trim()); // Read the sanitized response aloud
//       setLoading(false); // Stop loading spinner
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       speak("There was an error fetching the response."); // Alert the user
//       setLoading(false);
//     }
//   };

//   const handleVoiceCommand = useCallback(
//     async (message) => {
//       if (message.includes("open modal")) {
//         setOpen(true);
//         speak("Opening the modal.");
//       } else if (message.includes("close modal")) {
//         setOpen(false);
//         speak("Closing the modal.");
//       } else if (message.includes("submit")) {
//         await handleSubmit({ preventDefault: () => { } });
//       } else {
//         setPrompt(message);
//         speak("Submitting your query.");
//         await handleSubmit({ preventDefault: () => { } });
//       }
//     },
//     [setOpen, setPrompt, handleSubmit]
//   );

//   useEffect(() => {
//     if (!recognition) {
//       console.error("Speech recognition not supported in this browser.");
//       speak("Speech recognition is not supported in your browser.");
//       return;
//     }

//     recognition.continuous = true; // Keep listening until explicitly stopped
//     recognition.interimResults = false; // Only process final results
//     recognition.lang = "en-US";

//     recognition.onstart = () => {
//       console.log("Speech recognition started.");
//       setListening(true);
//       setTranscriptCaptured(true); // Reset for new session
//       speak("Listening for your command...");
//     };

//     recognition.onresult = (event) => {
//       const transcript = event.results[event.resultIndex][0].transcript.toLowerCase();
//       console.log("You said:", transcript);
//       speak(`You said: ${transcript}`);
//       setTranscriptCaptured(true); // Mark input as captured
//       handleVoiceCommand(transcript);
//     };

//     recognition.onend = () => {
//       console.log("Speech recognition ended.");
//       setListening(false);

//       // If no valid input was captured, prompt the user
//       if (!transcriptCaptured) {
//         speak("I didn’t catch that. Please try again.");
//         recognition.start(); // Restart listening
//       }
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       setListening(false);

//       // Avoid premature feedback for specific errors
//       if (event.error === "no-speech") {
//         speak("I didn’t hear anything. Please try again.");
//         recognition.start(); // Restart listening
//       } else {
//         speak("There was an error with the speech recognition. Please try again.");
//       }
//     };
//   }, [recognition, handleVoiceCommand, transcriptCaptured]);

//   const startListening = () => {
//     if (recognition) {
//       console.log("Starting speech recognition...");
//       recognition.start();
//     } else {
//       speak("Speech recognition is not supported in your browser.");
//     }
//   };

//   return (
//     <div className="app">
//       <button
//         className="btn"
//         onClick={startListening}
//         disabled={listening}
//       >
//         {listening ? "Listening..." : "Start Voice Assistant"}
//       </button>
//       <button className="btn" onClick={handleOpen}>Click</button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         className="gemini-modal"
//       >
//         <Box className="container">
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Type Your Question
//           </Typography>
//           <form
//             style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
//             onSubmit={(e) => handleSubmit(e)}
//           >
//             <TextField
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               id="outlined-basic"
//               label="Query"
//               variant="outlined"
//               sx={{ margin: "15px 0px", width: '100%' }}
//             />
//             <button type="submit" className="btn" style={{ marginBottom: "15px" }}>Submit</button>
//           </form>
//           {loading && <LinearProgress sx={{ margin: "20px" }} />}
//           {response && !loading && <GeminiResponse response={response} />}
//         </Box>
//       </Modal>
//     </div>
//   );
// }

// export default App;
