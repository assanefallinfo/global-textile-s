
import React from 'react';

interface ProductDescription {
  id: number;
  longDescription: string;
}

// Les descriptions longues pour tous les produits
export const productsWithLongDescriptions: ProductDescription[] = [
  // Tous les produits avec une description standard
  {
    id: 1,
    longDescription: "Article"
  },
  {
    id: 2,
    longDescription: "Article"
  },
  {
    id: 3,
    longDescription: "Article"
  },
  {
    id: 4,
    longDescription: "Article"
  },
  {
    id: 5,
    longDescription: "Article"
  },
  {
    id: 6,
    longDescription: "Article"
  },
  {
    id: 7,
    longDescription: "Article"
  },
  {
    id: 8,
    longDescription: "Article"
  },
  {
    id: 9,
    longDescription: "Article"
  },
  {
    id: 10,
    longDescription: "Article"
  }
];

// Fonction utilitaire pour trouver la description longue d'un produit
export const getLongDescription = (productId: number): string => {
  const productLongDesc = productsWithLongDescriptions.find(p => p.id === productId);
  return productLongDesc?.longDescription || "Article";
};
