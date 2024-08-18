const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const imagePath = path.join(__dirname, 'uploads', req.file.filename);
        const imageData = fs.readFileSync(imagePath);

        // Send the image to OpenAI API
        const response = await axios.post(
            'https://api.openai.com/v1/images/generations',
            { image: imageData.toString('base64') },
            { headers: { Authorization: `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` } }
        );

        // Send the API response back to the client
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error processing image');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
