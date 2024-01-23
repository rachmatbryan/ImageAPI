import express from 'express';
import logger from './utilities/middleware';
import resizeImage from './utilities/imagemodules';
const app = express();
const port = 3000;

app.use(logger);

app.get('/', (req, res) => {
  // Extracting query parameters
  const filename = req.query.filename as unknown as string;
  const width = parseInt(req.query.width as unknown as string);
  const height = parseInt(req.query.height as unknown as string);

  // Validate query parameters
  if ((filename.length === 0) || isNaN(width) || isNaN(height)) {
    return res.status(400).send('Invalid query parameters');
  }

  // Call the resizeImage function
  resizeImage(filename, height, width)
    .then((data) => {
      // Send the resized image
      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Length': data.length
      });
      res.end(data);
    })
    .catch((error) => {
      // Handle errors
      console.error('Error processing image', error);
      res.status(500).send('Error processing image');
    });
});

app.listen(port, () => {
  console.log('Server running on http://localhost:3000');
});

export default app;
