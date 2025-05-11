
import { Product } from '@/types/product';

// Helper function to get all available categories from products
export const getProductCategories = (products: Product[]): string[] => {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};

// Helper function to get products by category
export const getProductsByCategory = (products: Product[], category: string): Product[] => {
  if (category === "Tout") {
    return products;
  }
  return products.filter(product => product.category === category);
};
