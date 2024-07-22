import { PATH_DB } from '../constants/products.js';
import fs from 'fs/promises';
export const getAllProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log('when reading contacts', error);
    throw error;
  }
};

console.log(await getAllProducts());
