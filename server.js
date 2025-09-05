const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' })); // allow large base64 images

// Folder where images will be stored
const UPLOAD_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);

// POST /upload
app.post('/upload', (req, res) => {
  try {
    const { image } = req.body;
    if (!image) return res.status(400).json({ error: 'No image provided' });

    // Remove the "data:image/jpeg;base64," prefix
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    // Generate filename with timestamp
    const filename = `garbage_${Date.now()}.jpg`;
    const filepath = path.join(UPLOAD_DIR, filename);

    // Save file
    fs.writeFileSync(filepath, buffer);

    console.log(`✅ Saved: ${filename}`);
    res.json({ success: true, file: filename });
  } catch (err) {
    console.error('❌ Upload failed:', err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
