export async function convertImageToBase64(imageURL: string) {
  try {
    const res = await fetch(imageURL);
    const buffer = await res.arrayBuffer();

    const base64Image = Buffer.from(buffer).toString('base64');
    
    return base64Image;

  } catch (error) {
    console.error(error);

  }
}