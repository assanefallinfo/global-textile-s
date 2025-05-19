
import { Product } from '@/types/product';
import getznerProducts from './getznerProducts';
import getznerPremiumProducts from './getznerPremiumProducts';
import globalTextileProducts from './globalTextileProducts';

// Combine all bazin products
const bazinProducts: Product[] = [
  ...getznerProducts,
  ...globalTextileProducts,
  ...getznerPremiumProducts
];

export default bazinProducts;
