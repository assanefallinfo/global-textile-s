
import { Product } from '@/types/product';
import bazinProducts from './bazin';
import brodeProducts from './brodeProducts';

// Combine all products
const allProducts: Product[] = [
  ...bazinProducts,
  ...brodeProducts
];

export default allProducts;
