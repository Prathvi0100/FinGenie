import { useState } from 'react'
import { Modal, Typography, Box, TextField, LinearProgress } from '@mui/material';
import axios from "axios"
import GeminiResponse from './GeminiResponse';
function Learn() {
    const [open, setOpen] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponse("");
        setLoading(true);
        try {
            const res = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/content`, { prompt });
            setResponse(res);
            setLoading(false);
            console.log(res);
        } catch (error) {
            console.error("Error fetching response:", error);
            setLoading(false);
        }
    }

    return (
        <>
            <div className='min-h-screen flex flex-col bg-purple-700 text-white text-center py-20 flex-1 flex flex-col justify-center items-center'>
                <div className="app">
                    {/* <Navbar /> */}
                    <p className="text-2xl mb-10 mx-auto max-w-4xl">
                        Ask Chatter-Box
                    </p>
                    <button className="btn" onClick={handleOpen}>Click Here to Chat</button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className='gemini-model'
                    >
                        <Box className="container">
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Type Your Question
                            </Typography>
                            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={(e) => { handleSubmit(e) }}>
                                <TextField value={prompt} onChange={(e) => setPrompt(e.target.value)} id="outlined-basic" label="Query" variant="outlined" sx={{ margin: "15px 0px", width: '100%' }} />
                                <button type="submit" className='btn' style={{ marginBottom: "15px" }}>Submit</button>
                            </form>
                            {loading && <LinearProgress sx={{ margin: "20px" }} />}
                            {response && !loading && <GeminiResponse response={response} />}

                            {/* {response && <GeminiResponse response={response} />} */}
                        </Box>
                    </Modal>
                </div>
            </div>
        </>

    )
}

export default Learn;