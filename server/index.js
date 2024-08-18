const express = require('express');
const path = require('path');
const multer = require('multer');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../client')));

// Set up Multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const image = req.file.buffer.toString('base64');
        const apiKey = process.env.OPENAI_API_KEY;

        const response = await axios.post('https://api.openai.com/v1/images/generations', {
            prompt: `A detailed description of a crop disease or pest`,
            image: image,
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the image.' });
    }
});

// Serve the frontend
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
