const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// const router = require("./routes/users");
const { generate } = require('./geminiAPI');

// const errorHandler = require("./middlewares/errorHandler");
const port = process.env.PORT || 5000;

const app = express();
dotenv.config();


app.use(cors());
app.use(bodyParser.json());


//!Routes
// app.use("/", router);
//!error handler
// app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello from server');
});

app.post('/api/content', async (req, res) => {
    try {
        const data = req.body.prompt;
        if (!data) {
            return res.status(400).send({ error: 'Prompt is required' });
        }
        const result = await generate(data);
        res.send({ "result ": result });
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).send({ error: 'Failed to generate content' });
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
