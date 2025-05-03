
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

// Définition des produits pour correspondre à ceux dans Products.tsx
const products = [
  {
    id: 1,
    name: "Bazin turquoise",
    description: "Bazin riche avec motifs géométriques en turquoise brillant, parfait pour vos cérémonies.",
    category: "Bazin",
    image: "/lovable-uploads/720d7d60-5c22-42c1-9fe4-2612e030edca.png",
    manufacturer: "Getzner",
    longDescription: "Notre bazin turquoise est fabriqué avec un coton de première qualité et traité avec des teintures résistantes pour garantir un éclat durable. Les motifs géométriques tissés dans le tissu créent un effet visuel captivant qui attire le regard. Ce tissu est parfait pour confectionner des boubous, des ensembles deux pièces ou des tenues de cérémonie. Sa brillance luxueuse et sa texture riche en font un choix privilégié pour les événements spéciaux."
  },
  {
    id: 2,
    name: "Bazin blanc classique",
    description: "Bazin blanc de qualité supérieure avec motifs subtils, élégance intemporelle garantie.",
    category: "Bazin",
    image: "/lovable-uploads/2b043b7f-1388-4942-871b-e4f2485cee9f.png",
    manufacturer: "Getzner",
    longDescription: "Le bazin blanc classique est l'incarnation de l'élégance pure et intemporelle. Sa teinte immaculée est rehaussée par des motifs subtils qui apportent une dimension texturale sans être trop prononcés. Ce tissu de qualité supérieure est idéal pour les cérémonies de mariage, les baptêmes et autres événements où la pureté du blanc est de mise. Sa texture somptueuse et son drapé élégant en font un choix privilégié pour des tenues raffinées qui traversent les époques."
  },
  {
    id: 3,
    name: "Bazin blanc à motifs",
    description: "Bazin blanc raffiné avec des motifs géométriques délicats, idéal pour les cérémonies.",
    category: "Bazin",
    image: "/lovable-uploads/e8bb10d8-2f9e-4e73-adc5-58f8fddf2f9d.png",
    manufacturer: "Getzner",
    longDescription: "Notre bazin blanc à motifs se distingue par ses dessins géométriques plus prononcés qui créent un contraste élégant sur le fond blanc lumineux. Chaque motif est minutieusement tissé pour garantir une finition impeccable. Ce tissu est particulièrement apprécié pour les cérémonies religieuses et les événements formels où l'élégance discrète est de mise. Sa texture riche et son lustre délicat capturent la lumière de façon subtile, ajoutant une dimension de sophistication à n'importe quelle tenue."
  },
  {
    id: 4,
    name: "Bazin vert tendre",
    description: "Bazin vert pâle avec motifs discrets, apportant une touche de fraîcheur à vos tenues.",
    category: "Bazin",
    image: "/lovable-uploads/d25964f1-9bdd-4aa5-bd9e-4a1ba529cc1f.png",
    manufacturer: "Getzner",
    longDescription: "Le bazin vert tendre évoque la fraîcheur des premiers jours du printemps. Sa teinte délicate est parsemée de motifs géométriques qui ajoutent profondeur et caractère au tissu. Cette nuance douce et apaisante convient parfaitement aux célébrations en plein air et aux événements diurnes. Le tissu a été teinté avec soin pour offrir une couleur uniforme et durable, resistant aux lavages répétés tout en conservant son éclat original."
  },
  {
    id: 5,
    name: "Bazin rose poudré",
    description: "Bazin rose doux avec motifs circulaires, parfait pour les cérémonies et événements spéciaux.",
    category: "Bazin",
    image: "/lovable-uploads/caa0a6e5-7961-40d5-810f-fab8160ad3c6.png",
    manufacturer: "Getzner",
    longDescription: "Notre bazin rose poudré offre une élégance douce et féminine grâce à sa teinte subtile et romantique. Les motifs circulaires tissés dans le tissu créent un jeu de lumière fascinant qui ajoute de la dimension à chaque mouvement. Ce tissu est particulièrement prisé pour les tenues de mariage, les cérémonies familiales et les occasions où une touche de douceur est souhaitée. Sa texture luxueuse et son fini brillant en font un choix sophistiqué pour des créations haut de gamme."
  },
  {
    id: 6,
    name: "Bazin bleu roi",
    description: "Bazin bleu roi avec motifs géométriques modernes pour des tenues élégantes et contemporaines.",
    category: "Bazin",
    image: "/lovable-uploads/053615dd-56b3-459d-9fda-352241833799.png",
    manufacturer: "Getzner",
    longDescription: "Le bazin bleu roi incarne la noblesse et la distinction. Sa couleur profonde et vibrante est mise en valeur par des motifs géométriques contemporains qui ajoutent une dimension moderne à ce tissu traditionnel. Parfait pour les grandes occasions et les célébrations importantes, ce bazin de qualité supérieure offre un éclat saisissant sous la lumière. Sa texture riche et son drapé élégant permettent de créer des tenues structurées et imposantes qui ne manqueront pas de faire impression."
  },
  {
    id: 7,
    name: "Bazin marron doré",
    description: "Bazin marron avec reflets dorés et motifs traditionnels, richesse et élégance assurées.",
    category: "Bazin",
    image: "/lovable-uploads/77b293e1-076c-4f2c-895e-940a1839f190.png",
    manufacturer: "Getzner",
    longDescription: "Notre bazin marron doré allie la chaleur terrienne du marron à l'opulence des reflets dorés pour créer un tissu d'une richesse incomparable. Les motifs traditionnels tissés avec soin ajoutent une dimension culturelle et historique à ce textile d'exception. Idéal pour les cérémonies importantes et les événements formels, ce tissu apporte une présence royale à celui qui le porte. Sa texture luxueuse et son aspect chatoyant en font un choix parfait pour des tenues de prestige destinées aux occasions les plus spéciales."
  },
  {
    id: 8,
    name: "Bazin orange vif",
    description: "Bazin orange éclatant avec motifs subtils, idéal pour les célébrations hautes en couleur.",
    category: "Bazin",
    image: "/lovable-uploads/f24a9287-fe8d-4c70-85e5-dfae451c9607.png",
    manufacturer: "Getzner",
    longDescription: "Le bazin orange vif capture l'essence de la joie et de l'énergie. Sa couleur éclatante, rehaussée par des motifs subtils mais distincts, apporte une présence indéniable à chaque événement. Ce tissu audacieux est parfait pour les célébrations festives, les mariages colorés et les occasions où l'on souhaite se démarquer. La teinture de haute qualité assure une couleur résistante et durable, tandis que la texture somptueuse du bazin offre ce lustre caractéristique qui capte la lumière et anime chaque mouvement."
  },
  {
    id: 9,
    name: "Bazin vert olive",
    description: "Bazin vert olive avec motifs circulaires élégants, une couleur intemporelle pour vos tenues.",
    category: "Bazin",
    image: "/lovable-uploads/b56c0909-9356-493c-975c-68588f5bc8f8.png",
    manufacturer: "Getzner",
    longDescription: "Notre bazin vert olive offre une sophistication discrète grâce à sa teinte naturelle et raffinée. Les motifs circulaires qui ornent le tissu créent un effet visuel fascinant qui ajoute de la profondeur et du caractère. Cette couleur intemporelle s'adapte à toutes les saisons et à de nombreuses occasions, des cérémonies formelles aux événements plus décontractés. La qualité exceptionnelle du tissu assure un drapé élégant et une durabilité à toute épreuve, faisant de chaque pièce créée un investissement durable."
  },
  {
    id: 10,
    name: "Bazin doré premium",
    description: "Bazin doré avec motifs carrés sophistiqués, un choix luxueux pour les grandes occasions.",
    category: "Bazin",
    image: "/lovable-uploads/a90f8c4d-52fd-4d95-b967-2b326c67d07e.png",
    manufacturer: "Getzner",
    longDescription: "Le bazin doré premium représente le summum du luxe et de l'opulence. Sa teinte dorée éclatante est enrichie par des motifs carrés sophistiqués qui créent un effet visuel structuré et élégant. Ce tissu d'exception est destiné aux plus grandes occasions : mariages prestigieux, cérémonies royales, fêtes religieuses importantes. Sa brillance incomparable et sa texture somptueuse en font un choix privilégié pour ceux qui recherchent l'excellence absolue. Chaque mètre de ce bazin est un témoignage du savoir-faire artisanal et de la qualité supérieure."
  },
  {
    id: 11,
    name: "Bazin doré texturé",
    description: "Bazin doré avec motifs entrelacés, ajoutant texture et dimension à vos créations.",
    category: "Bazin",
    image: "/lovable-uploads/f880e6b4-9063-446f-b2d4-f4caf60c345c.png",
    manufacturer: "Getzner",
    longDescription: "Notre bazin doré texturé se distingue par ses motifs entrelacés qui créent une surface tactile fascinante. Ce jeu de relief et de lumière transforme ce tissu en une véritable œuvre d'art textile. La teinte dorée chaude et riche capte la lumière de manière spectaculaire, donnant l'impression que le tissu brille de l'intérieur. Parfait pour les tenues de cérémonie, les vêtements traditionnels améliorés ou les créations haute couture, ce bazin d'exception apporte une dimension supplémentaire à chaque création grâce à sa texture unique."
  },
  {
    id: 12,
    name: "Bazin rose fuchsia",
    description: "Bazin rose vif avec motifs circulaires, une couleur éclatante pour des tenues remarquables.",
    category: "Bazin",
    image: "/lovable-uploads/e6528f10-fd78-4235-a166-c527c442c6f4.png",
    manufacturer: "Getzner",
    longDescription: "Le bazin rose fuchsia est une célébration de la féminité et de l'audace. Sa couleur vibrante et intense est rehaussée par des motifs circulaires qui ajoutent mouvement et dynamisme au tissu. Cette teinte éclatante est parfaite pour les cérémonies joyeuses, les fêtes et les occasions où l'on souhaite faire une impression mémorable. Le tissu offre un contraste saisissant qui met en valeur les motifs tissés, tandis que sa texture luxueuse assure un drapé fluide et gracieux, idéal pour les tenues volumineuses ou les coupes plus ajustées."
  },
  {
    id: 13,
    name: "Bazin bleu clair",
    description: "Bazin bleu clair avec motifs ondulés, une teinte douce et élégante pour toutes occasions.",
    category: "Bazin",
    image: "/lovable-uploads/a6aed97e-e964-40ae-b5bb-a15508e561eb.png",
    manufacturer: "Getzner",
    longDescription: "Notre bazin bleu clair évoque la sérénité du ciel et la tranquillité de l'eau. Sa teinte apaisante est parcourue de motifs ondulés qui rappellent les vagues douces de l'océan, créant un effet visuel à la fois calme et captivant. Ce tissu polyvalent convient à une grande variété d'occasions, des cérémonies formelles aux événements plus décontractés. Sa luminosité naturelle apporte fraîcheur et légèreté, tandis que la qualité supérieure du bazin garantit tenue et élégance pour des créations durables et raffinées."
  },
  {
    id: 14,
    name: "Bazin vert citron",
    description: "Bazin vert citron avec motifs circulaires, apportant fraîcheur et originalité à vos tenues.",
    category: "Bazin",
    image: "/lovable-uploads/c28179e1-bcc9-4fd9-ae2f-8956c50b45e8.png",
    manufacturer: "Getzner",
    longDescription: "Le bazin vert citron apporte une énergie vibrante et une fraîcheur incomparable à toute garde-robe. Cette teinte audacieuse et vivifiante est ornée de motifs circulaires qui créent un contraste saisissant et un effet visuel dynamique. Idéal pour les célébrations estivales, les événements en plein air ou simplement pour ceux qui veulent se démarquer, ce tissu lumineux attire tous les regards. Sa brillance caractéristique et sa texture luxueuse sont rehaussées par cette couleur éclatante, offrant des possibilités infinies pour des créations originales et pleines de vie."
  },
  {
    id: 15,
    name: "Bazin bleu marine",
    description: "Bazin bleu marine avec motifs géométriques classiques, élégance et distinction assurées.",
    category: "Bazin",
    image: "/lovable-uploads/0bb84338-c661-441e-83f9-e6c2be6f5468.png",
    manufacturer: "Getzner",
    longDescription: "Notre bazin bleu marine incarne l'élégance intemporelle et la distinction. Sa couleur profonde et sophistiquée est enrichie par des motifs géométriques classiques qui ajoutent une dimension traditionnelle à ce tissu noble. Parfait pour les événements formels, les cérémonies importantes ou les occasions où l'on souhaite dégager une impression de confiance et d'autorité, ce bazin de qualité supérieure offre une alternative raffinée aux couleurs plus communes. Son lustre subtil et sa texture riche en font un choix privilégié pour des tenues masculines distinguées ou des créations féminines sophistiquées."
  },
  {
    id: 16,
    name: "Bazin bleu turquoise",
    description: "Bazin bleu turquoise avec motifs circulaires, une couleur vibrante pour vos créations.",
    category: "Bazin",
    image: "/lovable-uploads/005b90d9-0ce4-44a0-875c-7ca7c7b61e57.png",
    manufacturer: "Getzner",
    longDescription: "Le bazin bleu turquoise capture la magie des eaux tropicales avec sa teinte vibrante et envoûtante. Orné de motifs circulaires qui évoquent les remous de l'océan, ce tissu apporte une présence fascinante à chaque création. Sa couleur éclatante est idéale pour les célébrations estivales, les événements en bord de mer ou simplement pour apporter une touche de couleur audacieuse à votre garde-robe. La qualité exceptionnelle du bazin assure un drapé majestueux et un éclat durable qui résiste au fil du temps et des lavages."
  },
  // Conserver les descriptions longues des autres produits
  {
    id: 17,
    name: "Tissus brodés de luxe",
    description: "Nos tissus brodés haut de gamme pour vos cérémonies spéciales.",
    category: "Brodé",
    image: "/lovable-uploads/ff4f7ce5-6e8f-46ec-968a-7ec67859a3a2.png",
    longDescription: "Nos tissus brodés de luxe représentent le summum de l'artisanat textile sénégalais. Chaque pièce est minutieusement travaillée par des artisans expérimentés qui perpétuent un savoir-faire ancestral. Les motifs élaborés et les finitions parfaites font de ces tissus des œuvres d'art à part entière. Que ce soit pour une grande cérémonie ou pour créer une tenue d'exception, nos tissus brodés de luxe sauront sublimer votre style et vous démarquer par leur raffinement incomparable."
  },
  {
    id: 18,
    name: "Voiles brodés",
    description: "Des voiles délicats avec des broderies exquises pour une touche d'élégance.",
    category: "Voile",
    image: "",
    longDescription: "Nos voiles brodés allient légèreté et sophistication pour créer des pièces d'une beauté incomparable. Les broderies délicates, réalisées avec précision, ornent ces voiles transparents de motifs floraux, géométriques ou personnalisés selon vos préférences. Parfaits pour les cérémonies de mariage, les baptêmes ou comme accessoire d'une tenue de soirée, nos voiles brodés apportent une touche de féminité et d'élégance à toute occasion spéciale."
  },
  {
    id: 19,
    name: "Dentelles premium",
    description: "Dentelles raffinées pour sublimer vos créations les plus élégantes.",
    category: "Dentelle",
    image: "",
    longDescription: "Notre collection de dentelles premium représente le nec plus ultra en matière de tissus ornementés. Importées des meilleurs producteurs européens et asiatiques, ces dentelles se distinguent par la finesse de leurs motifs et la qualité de leur fabrication. Disponibles dans une variété de couleurs et de designs, elles sont l'option idéale pour les tenues de cérémonie, les vêtements de mariage ou toute création nécessitant une touche de raffinement absolu."
  },
  {
    id: 20,
    name: "Tissus pour mariage",
    description: "Collections spéciales pour rendre votre jour J inoubliable.",
    category: "Cérémonie",
    image: "",
    longDescription: "Notre gamme de tissus pour mariage est spécialement conçue pour faire de votre grand jour un moment inoubliable. Des voiles délicats aux tissus brodés opulents, en passant par le satin luxueux et les dentelles exquises, notre collection offre toutes les options pour créer la robe de vos rêves et les tenues assorties pour votre cortège. Chaque tissu est sélectionné pour sa qualité exceptionnelle et sa beauté intemporelle, garantissant que vos souvenirs de mariage resteront aussi éclatants que le jour J."
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Trouver le produit correspondant à l'ID
  const productId = parseInt(id || '0', 10);
  const product = products.find(p => p.id === productId);
  
  const handleDevisClick = () => {
    // Format de message pour WhatsApp
    const message = `Bonjour, je suis intéressé(e) par votre produit "${product?.name}". Pouvez-vous m'envoyer un devis ?`;
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
      <main className="flex-grow container mx-auto px-4 py-20 mt-20">
        <Button 
          onClick={() => navigate('/produits')} 
          className="mb-6 bg-gold hover:bg-gold/90"
          size="sm"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Retour aux produits
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gold/5 rounded-lg flex items-center justify-center h-80 md:h-96 overflow-hidden">
            {product.image ? (
              <img 
                src={product.image} 
                alt={`Image de ${product.name}`}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="text-center p-6">
                <p className="font-serif text-navy">
                  Image de {product.name}
                </p>
              </div>
            )}
          </div>
          
          <div>
            <span className="text-xs font-medium text-gold uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-3xl font-serif font-medium text-navy mt-2 mb-4">
              {product.name}
            </h1>
            {product.manufacturer && (
              <div className="text-sm text-navy/70 mb-4 flex items-center">
                <span className="font-medium">Fabricant:</span> 
                <span className="ml-2">{product.manufacturer}</span>
              </div>
            )}
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
                <Card
                  key={relatedProduct.id}
                  className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/produits/${relatedProduct.id}`)}
                >
                  <div className="h-40 bg-gold/5 flex items-center justify-center overflow-hidden">
                    {relatedProduct.image ? (
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <p className="font-serif text-navy text-center p-4">
                        Image de {relatedProduct.name}
                      </p>
                    )}
                  </div>
                  <CardContent className="p-4">
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
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
