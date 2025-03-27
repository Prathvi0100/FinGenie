// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// // const router = require("./routes/users");
// const { generate } = require('./geminiAPI');

// // const errorHandler = require("./middlewares/errorHandler");
// const port = process.env.PORT || 5000;

// const app = express();
// dotenv.config();


// app.use(cors());
// app.use(bodyParser.json());


// //!Routes
// // app.use("/", router);
// //!error handler
// // app.use(errorHandler);

// app.get('/', (req, res) => {
//     res.send('Hello from server');
// });

// app.post('/api/content', async (req, res) => {
//     try {
//         const data = req.body.prompt;
//         if (!data) {
//             return res.status(400).send({ error: 'Prompt is required' });
//         }
//         const result = await generate(data);
//         res.send({ "result ": result });
//     } catch (error) {
//         console.error('Error generating content:', error);
//         res.status(500).send({ error: 'Failed to generate content' });
//     }
// })

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// })

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { generate } = require('./geminiAPI');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from Financial Assistant Server');
});

// Financial AI Endpoint
app.post('/api/financial-assist', async (req, res) => {
    try {
        const { query, context } = req.body;

        if (!query) {
            return res.status(400).send({ error: 'Financial query is required' });
        }

        const prompt = `
            You are a financial assistant. Provide insightful responses to user queries.
            User's context: ${context || "No additional context provided"}
            Question: ${query}
        `;

        const result = await generate(prompt);
        res.send({ response: result });
    } catch (error) {
        console.error('Error generating financial advice:', error);
        res.status(500).send({ error: 'Failed to generate financial advice' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
