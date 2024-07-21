import fs from 'fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

export const addOneProduct = async () => {
  let currentProducts;
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');

    currentProducts = data ? JSON.parse(data) : [];

    console.log('it is ok');
  } catch {
    console.error(`error reading ${PATH_DB}`);
  }
  const oneProduct = createFakeProduct();
  console.log(currentProducts);
  currentProducts.push(oneProduct);

  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(currentProducts, null, 2),
      'utf-8',
    );
    console.log('one product adedd');
  } catch {
    console.error(`error adding product  to ${PATH_DB}`);
  }
};
addOneProduct();
