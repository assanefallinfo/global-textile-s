
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Définition des produits pour correspondre à ceux dans Products.tsx
const products = [
  {
    id: 1,
    name: "Tissus brodés de luxe",
    description: "Nos tissus brodés haut de gamme pour vos cérémonies spéciales. Ces tissus sont fabriqués avec des matériaux de la plus haute qualité et sont ornés de motifs élaborés qui ajoutent une touche d'élégance à toutes vos tenues. Parfaits pour les mariages, baptêmes et autres célébrations importantes.",
    category: "Brodé",
    longDescription: "Nos tissus brodés de luxe représentent le summum de l'artisanat textile sénégalais. Chaque pièce est minutieusement travaillée par des artisans expérimentés qui perpétuent un savoir-faire ancestral. Les motifs élaborés et les finitions parfaites font de ces tissus des œuvres d'art à part entière. Que ce soit pour une grande cérémonie ou pour créer une tenue d'exception, nos tissus brodés de luxe sauront sublimer votre style et vous démarquer par leur raffinement incomparable.",
  },
  {
    id: 2,
    name: "Bazin riche teint",
    description: "Bazin de qualité supérieure avec des couleurs vibrantes et durables.",
    category: "Bazin",
    longDescription: "Notre collection de Bazin riche teint est reconnue pour ses couleurs éclatantes et sa durabilité exceptionnelle. Chaque tissu est teinté à la main selon des techniques traditionnelles, garantissant des nuances profondes et vibrantes qui résistent au fil du temps. La texture luxueuse du bazin riche offre un drapé élégant qui met en valeur toutes les silhouettes. Idéal pour les tenues traditionnelles et modernes, notre bazin riche teint apporte prestige et distinction à chacune de vos apparitions.",
  },
  {
    id: 3,
    name: "Bazin riche uni",
    description: "Élégance simple et raffinée avec notre bazin uni de qualité.",
    category: "Bazin",
    longDescription: "Le bazin riche uni incarne l'élégance dans sa forme la plus pure. Sa texture somptueuse et son aspect soyeux en font un choix privilégié pour les tenues raffinées. Disponible dans une palette de couleurs soigneusement sélectionnées, notre bazin uni s'adapte à toutes les occasions, des plus formelles aux plus décontractées. Sa qualité exceptionnelle garantit un confort optimal et une longévité remarquable, faisant de chaque pièce un investissement durable pour votre garde-robe.",
  },
  {
    id: 4,
    name: "Voiles brodés",
    description: "Des voiles délicats avec des broderies exquises pour une touche d'élégance.",
    category: "Voile",
    longDescription: "Nos voiles brodés allient légèreté et sophistication pour créer des pièces d'une beauté incomparable. Les broderies délicates, réalisées avec précision, ornent ces voiles transparents de motifs floraux, géométriques ou personnalisés selon vos préférences. Parfaits pour les cérémonies de mariage, les baptêmes ou comme accessoire d'une tenue de soirée, nos voiles brodés apportent une touche de féminité et d'élégance à toute occasion spéciale.",
  },
  {
    id: 5,
    name: "Dentelles premium",
    description: "Dentelles raffinées pour sublimer vos créations les plus élégantes.",
    category: "Dentelle",
    longDescription: "Notre collection de dentelles premium représente le nec plus ultra en matière de tissus ornementés. Importées des meilleurs producteurs européens et asiatiques, ces dentelles se distinguent par la finesse de leurs motifs et la qualité de leur fabrication. Disponibles dans une variété de couleurs et de designs, elles sont l'option idéale pour les tenues de cérémonie, les vêtements de mariage ou toute création nécessitant une touche de raffinement absolu.",
  },
  {
    id: 6,
    name: "Tissus pour mariage",
    description: "Collections spéciales pour rendre votre jour J inoubliable.",
    category: "Cérémonie",
    longDescription: "Notre gamme de tissus pour mariage est spécialement conçue pour faire de votre grand jour un moment inoubliable. Des voiles délicats aux tissus brodés opulents, en passant par le satin luxueux et les dentelles exquises, notre collection offre toutes les options pour créer la robe de vos rêves et les tenues assorties pour votre cortège. Chaque tissu est sélectionné pour sa qualité exceptionnelle et sa beauté intemporelle, garantissant que vos souvenirs de mariage resteront aussi éclatants que le jour J.",
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Trouver le produit correspondant à l'ID
  const productId = parseInt(id || '0', 10);
  const product = products.find(p => p.id === productId);
  
  const handleDevisClick = () => {
    // Format de message pour WhatsApp
    const message = `Bonjour, je suis intéressé(e) par votre produit "${product?.name}". Pouvez-vous m'envoyer un devis ?`;
    // Créer le lien WhatsApp avec le numéro et le message encodé
    const whatsappLink = `https://wa.me/221781540779?text=${encodeURIComponent(message)}`;
    // Ouvrir le lien dans un nouvel onglet
    window.open(whatsappLink, '_blank');
    
    // Afficher un toast de confirmation
    toast({
      title: "Demande envoyée",
      description: "Redirection vers WhatsApp en cours...",
    });
  };
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-20 mt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy">Produit non trouvé</h2>
            <Button 
              onClick={() => navigate('/produits')} 
              className="mt-4 bg-gold hover:bg-gold/90"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux produits
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-20 mt-16">
        <Button 
          onClick={() => navigate('/produits')} 
          className="mb-6 bg-gold hover:bg-gold/90"
          size="sm"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Retour aux produits
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gold/10 rounded-lg flex items-center justify-center h-80 md:h-96">
            <p className="font-serif text-navy text-center p-6">
              Image de {product.name}
            </p>
          </div>
          
          <div>
            <span className="text-xs font-medium text-gold uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-3xl font-serif font-medium text-navy mt-2 mb-4">
              {product.name}
            </h1>
            <div className="prose text-navy/80 mb-6">
              <p className="mb-4">{product.description}</p>
              <p>{product.longDescription}</p>
            </div>
            
            <div className="mt-8">
              <Button 
                onClick={handleDevisClick} 
                className="bg-gold hover:bg-gold/90"
              >
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-medium text-navy mb-6">
            Produits similaires
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <div 
                  key={relatedProduct.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md product-card transition-all duration-300"
                >
                  <div className="h-40 bg-gold/10 flex items-center justify-center">
                    <p className="font-serif text-navy text-center p-4">
                      Image de {relatedProduct.name}
                    </p>
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium text-gold uppercase tracking-wider">
                      {relatedProduct.category}
                    </span>
                    <h3 className="text-lg font-serif font-medium text-navy mt-2 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <Button
                      variant="link"
                      className="text-gold p-0 h-auto font-medium hover:text-gold/80 transition-colors"
                      onClick={() => navigate(`/produits/${relatedProduct.id}`)}
                    >
                      En savoir plus
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
