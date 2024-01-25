import sharp from 'sharp';
import path from 'path';
import fs from 'fs';


const resizeImage = async (
  filename: string,
  height: number,
  width: number
): Promise<Buffer> => {
  const originalPath = path.join('images','original', `${filename}.jpg`);
  const cachedPath = path.join('images','resized', `${filename}_${width}x${height}.jpg`);

  // Check if cached image exists
  if (fs.existsSync(cachedPath)) {
    return fs.promises.readFile(cachedPath);
  }

  // Resize and save image
  const data = await sharp(originalPath)
    .resize({
      width,
      height,
      fit: sharp.fit.cover
    })
    .toBuffer();

  await sharp(data).toFile(cachedPath);

  return data;
};

export default resizeImage;
