import { PATH_DB } from "../constants/products.js";
import { createFakeProduct } from "../utils/createFakeProduct.js";
import fs from 'fs/promises';


const generateProducts = async (number) => {
    try {
        let products;
        try { 
           
        const rawData = await fs.readFile(PATH_DB, 'utf-8');
            products = rawData ? JSON.parse(rawData) : [];

        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error;
            }
        }
        for (let i = 0; i < number; i++) {
            products.push(createFakeProduct());
        }
        await fs.writeFile(PATH_DB, JSON.stringify(products, null, 2), 'utf-8');
        console.log(`${number} products have been generated and added`);
    } catch (error) {
        console.error(error);
    }
};


generateProducts(3);