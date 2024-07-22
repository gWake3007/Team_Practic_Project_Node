import { PATH_DB } from '../constants/products.js';
import fs from 'fs/promises';
export const countProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const constants = data.trim() ? JSON.parse(data) : [];
    return constants.length;
  } catch (error) {
    console.log('no count', error);
    throw error;
  }
};
console.log(await countProducts());
