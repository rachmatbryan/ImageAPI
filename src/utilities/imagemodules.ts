import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

const resizeImage = async (
  filename: string,
  height: number,
  width: number
): Promise<Buffer> => {
  return await sharp(
    path.resolve(
      `C:/Users/rachm/OneDrive/Desktop/EX/Project1/images/original/${filename}.jpg`
    )
  )
    .resize({
      width,
      height,
      fit: sharp.fit.cover
    })
    .toBuffer();
};

const OUTPUT_DIR = path.resolve('C:/Users/rachm/OneDrive/Desktop/EX/Project1/images/resized');

const saveImage = async (buffer: Buffer, filename: string, width: number, height: number): Promise<string> => {
  // Ensure the output directory exists
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  // Construct the output file path
  const outputFilePath = path.join(OUTPUT_DIR, `${filename}-${width}x${height}.jpg`);

  // Save the buffer to a file
  await fs.writeFile(outputFilePath, buffer);

  return outputFilePath;
};


export default resizeImage;
