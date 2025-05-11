
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/product/BackButton';
import ProductImage from '@/components/product/ProductImage';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';
import { getLongDescription } from '@/data/productDescriptions';

// Import des données des produits
import products from '@/data/productData';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Trouver le produit correspondant à l'ID
  const productId = parseInt(id || '0', 10);
  const product = products.find(p => p.id === productId);
  
  // Obtenir la description longue
  const longDescription = getLongDescription(productId);
  
  const handleDevisClick = () => {
    // Format de message pour WhatsApp
    const message = `Bonjour, je suis intéressé(e) par votre produit (ID: ${productId}). Pouvez-vous m'envoyer un devis ?`;
    // Créer le lien WhatsApp avec le numéro et le message encodé
    const whatsappLink = `https://wa.me/221779677888?text=${encodeURIComponent(message)}`;
    // Ouvrir le lien dans un nouvel onglet
    window.open(whatsappLink, '_blank');
  };
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-20 mt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy">Produit non trouvé</h2>
            <BackButton />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-20 mt-20">
        <BackButton />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductImage image={product.image} />
          
          <ProductInfo 
            product={product} 
            longDescription={longDescription} 
            onDevisClick={handleDevisClick} 
          />
        </div>
        
        <RelatedProducts 
          currentProductId={product.id} 
          currentProductCategory={product.category} 
          products={products} 
        />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
