import { PATH_DB } from '../constants/products.js';
import fs from 'fs/promises';
export const removeRandomProduct = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const remove = JSON.parse(data);
    remove.length > 0
      ? (remove.pop(),
        await fs.writeFile(PATH_DB, JSON.stringify(remove, null, 2)),
        console.log('Last contact deleted'))
      : console.log('no contact');
  } catch (error) {
    console.error('Error when deleting last contact', error);
  }
};
removeRandomProduct();
