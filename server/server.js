const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // Ensure you load environment variables

const app = express();
const port = 3000;

const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const imagePath = path.join(__dirname, 'uploads', req.file.filename);
        const imageData = fs.readFileSync(imagePath, { encoding: 'base64' });

        // Send the image to OpenAI API
        const response = await axios.post(
            'https://api.openai.com/v1/images/generations', // Update this endpoint based on your intended API usage
            { 
                image: imageData // The payload might differ depending on the API usage
            },
            { 
                headers: { 
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                } 
            }
        );

        // Optionally delete the image file after processing
        fs.unlinkSync(imagePath);

        // Send the API response back to the client
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing image');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
