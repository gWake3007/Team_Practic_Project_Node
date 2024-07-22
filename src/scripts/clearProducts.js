import { PATH_DB } from '../constants/products.js';
import fs from 'fs/promises';
export const clearProducts = async () => {
  try {
    await fs.writeFile(PATH_DB, '');
    console.log('all contacts have been deleted');
  } catch (error) {
    console.log('error when deleting contacts', error);
  }
};
clearProducts();
