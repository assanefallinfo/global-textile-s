import { Product } from '@/types/product';

interface ProductDescription {
  id: number;
  longDescription: string;
}

// The descriptions for all products
export const productsWithLongDescriptions: ProductDescription[] = [
  // Bazin products (1-16, 21-37)
  {
    id: 1,
    longDescription: "Notre bazin turquoise est fabriqué avec un coton de première qualité et traité avec des teintures résistantes pour garantir un éclat durable. Les motifs géométriques tissés dans le tissu créent un effet visuel captivant qui attire le regard. Ce tissu est parfait pour confectionner des boubous, des ensembles deux pièces ou des tenues de cérémonie. Sa brillance luxueuse et sa texture riche en font un choix privilégié pour les événements spéciaux."
  },
  {
    id: 2,
    longDescription: "Le bazin blanc classique est l'incarnation de l'élégance pure et intemporelle. Sa teinte immaculée est rehaussée par des motifs subtils qui apportent une dimension texturale sans être trop prononcés. Ce tissu de qualité supérieure est idéal pour les cérémonies de mariage, les baptêmes et autres événements où la pureté du blanc est de mise. Sa texture somptueuse et son drapé élégant en font un choix privilégié pour des tenues raffinées qui traversent les époques."
  },
  {
    id: 3,
    longDescription: "Notre bazin blanc à motifs se distingue par ses dessins géométriques plus prononcés qui créent un contraste élégant sur le fond blanc lumineux. Chaque motif est minutieusement tissé pour garantir une finition impeccable. Ce tissu est particulièrement apprécié pour les cérémonies religieuses et les événements formels où l'élégance discrète est de mise. Sa texture riche et son lustre délicat capturent la lumière de façon subtile, ajoutant une dimension de sophistication à n'importe quelle tenue."
  },
  {
    id: 4,
    longDescription: "Le bazin vert tendre évoque la fraîcheur des premiers jours du printemps. Sa teinte délicate est parsemée de motifs géométriques qui ajoutent profondeur et caractère au tissu. Cette nuance douce et apaisante convient parfaitement aux célébrations en plein air et aux événements diurnes. Le tissu a été teinté avec soin pour offrir une couleur uniforme et durable, resistant aux lavages répétés tout en conservant son éclat original."
  },
  {
    id: 5,
    longDescription: "Notre bazin rose poudré offre une élégance douce et féminine grâce à sa teinte subtile et romantique. Les motifs circulaires tissés dans le tissu créent un jeu de lumière fascinant qui ajoute de la dimension à chaque mouvement. Ce tissu est particulièrement prisé pour les tenues de mariage, les cérémonies familiales et les occasions où une touche de douceur est souhaitée. Sa texture luxueuse et son fini brillant en font un choix sophistiqué pour des créations haut de gamme."
  },
  {
    id: 6,
    longDescription: "Le bazin bleu roi incarne la noblesse et la distinction. Sa couleur profonde et vibrante est mise en valeur par des motifs géométriques contemporains qui ajoutent une dimension moderne à ce tissu traditionnel. Parfait pour les grandes occasions et les célébrations importantes, ce bazin de qualité supérieure offre un éclat saisissant sous la lumière. Sa texture riche et son drapé élégant permettent de créer des tenues structurées et imposantes qui ne manqueront pas de faire impression."
  },
  {
    id: 7,
    longDescription: "Notre bazin marron doré allie la chaleur terrienne du marron à l'opulence des reflets dorés pour créer un tissu d'une richesse incomparable. Les motifs traditionnels tissés avec soin ajoutent une dimension culturelle et historique à ce textile d'exception. Idéal pour les cérémonies importantes et les événements formels, ce tissu apporte une présence royale à celui qui le porte. Sa texture luxueuse et son aspect chatoyant en font un choix parfait pour des tenues de prestige destinées aux occasions les plus spéciales."
  },
  {
    id: 8,
    longDescription: "Le bazin orange vif capture l'essence de la joie et de l'énergie. Sa couleur éclatante, rehaussée par des motifs subtils mais distincts, apporte une présence indéniable à chaque événement. Ce tissu audacieux est parfait pour les célébrations festives, les mariages colorés et les occasions où l'on souhaite se démarquer. La teinture de haute qualité assure une couleur résistante et durable, tandis que la texture somptueuse du bazin offre ce lustre caractéristique qui capte la lumière et anime chaque mouvement."
  },
  {
    id: 9,
    longDescription: "Notre bazin vert olive offre une sophistication discrète grâce à sa teinte naturelle et raffinée. Les motifs circulaires qui ornent le tissu créent un effet visuel fascinant qui ajoute de la profondeur et du caractère. Cette couleur intemporelle s'adapte à toutes les saisons et à de nombreuses occasions, des cérémonies formelles aux événements plus décontractés. La qualité exceptionnelle du tissu assure un drapé élégant et une durabilité à toute épreuve, faisant de chaque pièce créée un investissement durable."
  },
  {
    id: 10,
    longDescription: "Le bazin doré premium représente le summum du luxe et de l'opulence. Sa teinte dorée éclatante est enrichie par des motifs carrés sophistiqués qui créent un effet visuel structuré et élégant. Ce tissu d'exception est destiné aux plus grandes occasions : mariages prestigieux, cérémonies royales, fêtes religieuses importantes. Sa brillance incomparable et sa texture somptueuse en font un choix privilégié pour ceux qui recherchent l'excellence absolue. Chaque mètre de ce bazin est un témoignage du savoir-faire artisanal et de la qualité supérieure."
  },
  {
    id: 11,
    longDescription: "Notre bazin doré texturé se distingue par ses motifs entrelacés qui créent une surface tactile fascinante. Ce jeu de relief et de lumière transforme ce tissu en une véritable œuvre d'art textile. La teinte dorée chaude et riche capte la lumière de manière spectaculaire, donnant l'impression que le tissu brille de l'intérieur. Parfait pour les tenues de cérémonie, les vêtements traditionnels améliorés ou les créations haute couture, ce bazin d'exception apporte une dimension supplémentaire à chaque création grâce à sa texture unique."
  },
  {
    id: 12,
    longDescription: "Le bazin rose fuchsia est une célébration de la féminité et de l'audace. Sa couleur vibrante et intense est rehaussée par des motifs circulaires qui ajoutent mouvement et dynamisme au tissu. Cette teinte éclatante est parfaite pour les cérémonies joyeuses, les fêtes et les occasions où l'on souhaite faire une impression mémorable. Le tissu offre un contraste saisissant qui met en valeur les motifs tissés, tandis que sa texture luxueuse assure un drapé fluide et gracieux, idéal pour les tenues volumineuses ou les coupes plus ajustées."
  },
  {
    id: 13,
    longDescription: "Notre bazin bleu clair évoque la sérénité du ciel et la tranquillité de l'eau. Sa teinte apaisante est parcourue de motifs ondulés qui rappellent les vagues douces de l'océan, créant un effet visuel à la fois calme et captivant. Ce tissu polyvalent convient à une grande variété d'occasions, des cérémonies formelles aux événements plus décontractés. Sa luminosité naturelle apporte fraîcheur et légèreté, tandis que la qualité supérieure du bazin garantit tenue et élégance pour des créations durables et raffinées."
  },
  {
    id: 14,
    longDescription: "Le bazin vert citron apporte une énergie vibrante et une fraîcheur incomparable à toute garde-robe. Cette teinte audacieuse et vivifiante est ornée de motifs circulaires qui créent un contraste saisissant et un effet visuel dynamique. Idéal pour les célébrations estivales, les événements en plein air ou simplement pour ceux qui veulent se démarquer, ce tissu lumineux attire tous les regards. Sa brillance caractéristique et sa texture luxueuse sont rehaussées par cette couleur éclatante, offrant des possibilités infinies pour des créations originales et pleines de vie."
  },
  {
    id: 15,
    longDescription: "Notre bazin bleu marine incarne l'élégance intemporelle et la distinction. Sa couleur profonde et sophistiquée est enrichie par des motifs géométriques classiques qui ajoutent une dimension traditionnelle à ce tissu noble. Parfait pour les événements formels, les cérémonies importantes ou les occasions où l'on souhaite dégager une impression de confiance et d'autorité, ce bazin de qualité supérieure offre une alternative raffinée aux couleurs plus communes. Son lustre subtil et sa texture riche en font un choix privilégié pour des tenues masculines distinguées ou des créations féminines sophistiquées."
  },
  {
    id: 16,
    longDescription: "Le bazin bleu turquoise capture la magie des eaux tropicales avec sa teinte vibrante et envoûtante. Orné de motifs circulaires qui évoquent les remous de l'océan, ce tissu apporte une présence fascinante à chaque création. Sa couleur éclatante est idéale pour les célébrations estivales, les événements en bord de mer ou simplement pour apporter une touche de couleur audacieuse à votre garde-robe. La qualité exceptionnelle du bazin assure un drapé majestueux et un éclat durable qui résiste au fil du temps et des lavages."
  },
  // Brodé products (17)
  {
    id: 17,
    longDescription: "Nos tissus brodés de luxe représentent le summum de l'artisanat textile sénégalais. Chaque pièce est minutieusement travaillée par des artisans expérimentés qui perpétuent un savoir-faire ancestral. Les motifs élaborés et les finitions parfaites font de ces tissus des œuvres d'art à part entière. Que ce soit pour une grande cérémonie ou pour créer une tenue d'exception, nos tissus brodés de luxe sauront sublimer votre style et vous démarquer par leur raffinement incomparable."
  },
  // Keeping descriptions for deleted products for reference
  {
    id: 18,
    longDescription: "Nos voiles brodés allient légèreté et sophistication pour créer des pièces d'une beauté incomparable. Les broderies délicates, réalisées avec précision, ornent ces voiles transparents de motifs floraux, géométriques ou personnalisés selon vos préférences. Parfaits pour les cérémonies de mariage, les baptêmes ou comme accessoire d'une tenue de soirée, nos voiles brodés apportent une touche de féminité et d'élégance à toute occasion spéciale."
  },
  {
    id: 19,
    longDescription: "Notre collection de dentelles premium représente le nec plus ultra en matière de tissus ornementés. Importées des meilleurs producteurs européens et asiatiques, ces dentelles se distinguent par la finesse de leurs motifs et la qualité de leur fabrication. Disponibles dans une variété de couleurs et de designs, elles sont l'option idéale pour les tenues de cérémonie, les vêtements de mariage ou toute création nécessitant une touche de raffinement absolu."
  },
  {
    id: 20,
    longDescription: "Notre gamme de tissus pour mariage est spécialement conçue pour faire de votre grand jour un moment inoubliable. Des voiles délicats aux tissus brodés opulents, en passant par le satin luxueux et les dentelles exquises, notre collection offre toutes les options pour créer la robe de vos rêves et les tenues assorties pour votre cortège. Chaque tissu est sélectionné pour sa qualité exceptionnelle et sa beauté intemporelle, garantissant que vos souvenirs de mariage resteront aussi éclatants que le jour J."
  },
  // Bazin products (continuation)
  {
    id: 21,
    longDescription: "Ce bazin orange à motifs bleus offre un contraste saisissant et lumineux. Fabriqué par Global Textile, ce tissu de qualité supérieure se distingue par ses motifs bleu profond sur fond orange éclatant. Le ruban jaune qui l'accompagne ajoute une touche finale luxueuse. Parfait pour les tenues festives, ce tissu apportera énergie et dynamisme à vos créations. Sa texture lisse et brillante permet un drapé élégant et une finition impeccable pour vos tenues de cérémonie."
  },
  {
    id: 22,
    longDescription: "Le bazin bleu royal à motifs dorés est l'incarnation du luxe et de l'élégance. Ce tissu de Global Textile présente des motifs floraux dorés finement détaillés qui scintillent délicatement sur le fond bleu royal profond, créant un effet spectaculaire sous la lumière. Sa qualité exceptionnelle permet une tenue parfaite pour des vêtements structurés. Idéal pour les grandes cérémonies, les mariages et les fêtes traditionnelles où l'on souhaite faire impression avec une tenue somptueuse aux couleurs royales."
  },
  {
    id: 23,
    longDescription: "Ce bazin rose fuschia de Global Textile incarne l'audace et la modernité. Sa couleur vibrante s'accompagne de motifs géométriques contemporains qui apportent caractère et mouvement. Le tissu présente une brillance subtile qui révèle les détails du tissage sous différents angles de lumière. Parfait pour les célébrations joyeuses et les événements festifs, ce bazin permet de créer des tenues remarquables qui ne passeront pas inaperçues tout en conservant une élégance raffinée."
  },
  {
    id: 24,
    longDescription: "Le bazin jaune doré de Global Textile illumine chaque silhouette avec sa teinte éclatante et chaleureuse. Les motifs géométriques circulaires tissés dans ce bazin créent un effet visuel fascinant et harmonieux. D'une qualité exceptionnelle, ce tissu maintient sa brillance et sa tenue même après de nombreux lavages. C'est le choix idéal pour les célébrations en plein air, les événements diurnes ou toute occasion où l'on souhaite apporter joie et énergie positive à travers une tenue lumineuse et sophistiquée."
  },
  {
    id: 25,
    longDescription: "Ce bazin argenté aux motifs dorés de Global Textile offre une palette chromatique subtile et raffinée. Le fond gris argenté satiné met parfaitement en valeur les motifs dorés complexes représentant des cercles et des fleurs stylisées. Ce contraste discret mais élégant crée un effet de profondeur et de mouvement délicat. Idéal pour les cérémonies formelles, les événements du soir et les occasions où l'on recherche une élégance discrète mais remarquable, ce tissu se prête à la confection de tenues sophistiquées pour hommes et femmes."
  },
  {
    id: 26,
    longDescription: "Le bazin turquoise à motifs roses de Global Textile propose une combinaison de couleurs rafraîchissante et originale. Le fond turquoise lumineux est décoré de motifs géométriques roses qui créent un contraste à la fois doux et dynamique. D'une qualité exceptionnelle, ce tissu offre une texture somptueuse et un drapé élégant qui conviennent parfaitement aux tenues estivales, aux événements en bord de mer ou aux célébrations où l'on souhaite arborer une tenue colorée mais sophistiquée."
  },
  {
    id: 27,
    longDescription: "Ce bazin orange à motifs de cœurs et volutes bleus de Global Textile incarne la joie et l'enthousiasme. Le contraste entre l'orange vif du fond et le bleu profond des motifs crée une dynamique visuelle saisissante. Les motifs de cœurs et les volutes artistiques tissés dans le tissu témoignent d'un savoir-faire exceptionnel et d'une attention aux détails remarquable. Idéal pour les célébrations festives, les mariages colorés ou les événements où l'on souhaite exprimer sa personnalité à travers une tenue distinctive et joyeuse."
  },
  {
    id: 28,
    longDescription: "Le bazin bleu royal à grandes fleurs dorées de Global Textile est une véritable œuvre d'art textile. Les motifs floraux majestueusement proportionnés se déploient avec grâce sur le fond bleu royal intense, créant un effet visuel impressionnant. La brillance de l'or contraste magnifiquement avec la profondeur du bleu, conférant à ce tissu une présence incomparable. Parfait pour les grandes cérémonies, les événements formels ou les tenues traditionnelles améliorées, ce bazin sublime permet de créer des vêtements qui feront sensation par leur élégance et leur richesse."
  },
  {
    id: 29,
    longDescription: "Ce bazin rose clair à fleurs de Global Textile évoque douceur et féminité. La teinte délicate du rose pâle est rehaussée par des motifs floraux élégants qui ajoutent texture et dimension au tissu sans être excessivement prononcés. D'une qualité remarquable, ce bazin offre un drapé fluide et une brillance subtile qui capte délicatement la lumière. Idéal pour les cérémonies printanières, les baptêmes, les mariages ou toute occasion où l'on souhaite arborer une tenue gracieuse et délicate."
  },
  {
    id: 30,
    longDescription: "Le bazin gris argenté à cœurs et volutes dorés de Global Textile incarne l'élégance et le raffinement. La teinte grise argentée crée un fond sophistiqué qui met parfaitement en valeur les motifs de cœurs et volutes dorés, ajoutant une touche de chaleur et de romantisme à ce tissu d'exception. Sa texture luxueuse et son drapé impeccable en font un choix idéal pour des tenues formelles, des événements du soir ou des cérémonies où l'on souhaite projeter une image de distinction tout en subtilité."
  },
  {
    id: 31,
    longDescription: "Ce bazin jaune vif à cercles concentriques de Global Textile est une véritable explosion de lumière et d'énergie. Les motifs de cercles concentriques créent un effet d'optique dynamique qui anime le tissu et lui confère un caractère contemporain. Sa couleur éclatante et sa texture luxueuse en font un choix parfait pour les célébrations estivales, les événements festifs ou toute occasion où l'on souhaite apporter joie et vitalité. La qualité exceptionnelle du tissu assure durabilité et maintien de l'éclat de la couleur au fil du temps."
  },
  {
    id: 32,
    longDescription: "Le bazin rose intensif à fleurs de Global Textile est un hymne à la féminité et à l'élégance. Les motifs floraux ton sur ton créent un effet de texture subtil mais élaboré qui révèle toute sa richesse sous différents angles de lumière. D'une brillance exceptionnelle, ce tissu capture et réfléchit la lumière de façon remarquable, créant un effet presque tridimensionnel. Parfait pour les tenues de cérémonie, les mariages ou les événements spéciaux où l'on souhaite faire sensation avec une tenue à la fois audacieuse par sa couleur et raffinée par ses détails."
  },
  {
    id: 33,
    longDescription: "Ce bazin bleu royal à fleurs dorées stylisées de Global Textile est l'incarnation du luxe et de la sophistication. Les motifs floraux dorés, dessinés avec une précision artistique, se détachent magnifiquement sur le fond bleu royal profond, créant un contraste saisissant et élégant. La qualité exceptionnelle du tissu se manifeste dans sa texture riche et son drapé majestueux, permettant la création de tenues structurées et imposantes. Idéal pour les grandes cérémonies, les mariages prestigieux ou les événements où l'on souhaite faire une entrée remarquée avec une tenue aux couleurs royales."
  },
  {
    id: 34,
    longDescription: "Le bazin bleu ciel à motifs hexagonaux dorés de Global Textile allie fraîcheur et sophistication. Le fond bleu ciel lumineux est parsemé de motifs hexagonaux et floraux dorés qui créent un effet visuel harmonieux et structuré. La précision du tissage et la qualité des matériaux utilisés confèrent à ce tissu une brillance durable et un toucher somptueux. Parfait pour les cérémonies printanières ou estivales, les baptêmes ou les événements en extérieur, ce bazin permet de créer des tenues élégantes qui capturent la lumière de façon remarquable."
  },
  {
    id: 35,
    longDescription: "Ce bazin couleur pêche à motifs floraux et feuilles dorées de Global Textile évoque douceur et chaleur. La teinte pêche, à la fois délicate et chaleureuse, est sublimée par des motifs floraux et des feuilles finement dessinés en doré, créant un ensemble harmonieux et élégant. La texture riche du tissu et son lustre subtil ajoutent une dimension supplémentaire à sa beauté visuelle. Idéal pour les cérémonies printanières, les mariages en fin d'après-midi ou les événements où l'on recherche une tenue à la fois raffinée et pleine de douceur."
  },
  {
    id: 36,
    longDescription: "Le bazin rose vif à grands motifs floraux ton sur ton de Global Textile est une célébration de la féminité et de l'audace. Les motifs floraux généreux, tissés dans la même teinte que le fond mais avec une brillance différente, créent un effet visuel sophistiqué qui se révèle pleinement selon l'incidence de la lumière. La texture luxueuse et le drapé élégant de ce tissu en font un choix parfait pour des tenues de cérémonie, des événements festifs ou des occasions spéciales où l'on souhaite exprimer sa personnalité à travers une tenue colorée mais élégante."
  },
  {
    id: 37,
    longDescription: "Ce bazin bleu ciel à motifs floraux bruns de Global Textile offre une combinaison de couleurs à la fois douce et naturelle. Le fond bleu ciel apaisant est orné de motifs floraux et de feuilles dans des tons bruns chaleureux, créant un contraste harmonieux qui évoque le ciel et la terre. La qualité exceptionnelle du tissage assure un drapé fluide et une tenue parfaite pour des vêtements structurés. Idéal pour les cérémonies en plein air, les mariages à thème nature ou les événements où l'on recherche une élégance discrète aux couleurs inspirées par les éléments naturels."
  },
  // Descriptions for the brodeds (38-52) - already exist, I don't modify them
  
  // Descriptions for the new pailletted bazins (53-70)
  {
    id: 53,
    longDescription: "Ce bazin pailleté jaune doré de Global Textile est l'incarnation du luxe et de l'opulence. Le tissu présente un fond jaune vibrant rehaussé par des motifs floraux délicatement brodés avec des paillettes dorées qui captent et réfléchissent magnifiquement la lumière. Chaque mouvement crée un jeu de scintillements fascinant qui attire immédiatement le regard. La finition est d'une qualité exceptionnelle, assurant que les paillettes restent fermement fixées même après plusieurs utilisations. Parfait pour les grandes cérémonies comme les mariages ou les fêtes importantes où un effet spectaculaire est recherché. Sa brillance incomparable en fait un choix idéal pour les tenues destinées à faire sensation lors d'événements prestigieux."
  },
  {
    id: 54,
    longDescription: "Le bazin pailleté beige crème de Global Textile offre une élégance intemporelle avec une touche de glamour contemporain. Sur un fond beige doux et chaleureux, des milliers de minuscules paillettes argentées ont été méticuleusement appliquées pour créer un effet scintillant délicat et raffiné. Le motif ondulant des paillettes évoque les vagues douces d'un désert de sable au soleil couchant. Ce tissu d'exception offre une brillance subtile qui n'est jamais excessive, le rendant parfaitement adapté aux cérémonies sophistiquées et aux événements formels où l'élégance discrète est de mise. Sa teinte neutre polyvalente permet de le porter en toutes saisons et de le combiner facilement avec des accessoires colorés."
  },
  {
    id: 55,
    longDescription: "Ce bazin pailleté vert anis de Global Textile apporte une fraîcheur vibrante et une énergie printanière à toute garde-robe cérémonielle. La base vert anis éclatante est parcourue de lignes argentées pailletées qui créent un motif structuré et dynamique. La disposition précise des paillettes argentées forme des tracés linéaires qui captent la lumière sous différents angles, créant un effet visuel saisissant lors des mouvements. Ce tissu associe audace contemporaine et savoir-faire traditionnel dans une combinaison parfaite. Idéal pour les célébrations en journée, les cérémonies printanières ou estivales, ou pour toute occasion où l'on souhaite apporter une touche de vitalité éclatante tout en conservant un raffinement certain."
  },
  {
    id: 56,
    longDescription: "Le bazin pailleté bleu ciel de Global Textile évoque la magie d'un ciel étoilé. Sur un fond bleu ciel lumineux et apaisant, des paillettes multicolores aux reflets irisés ont été délicatement appliquées, créant un effet visuel enchanteur qui change subtilement selon l'angle de la lumière. Cette constellation de minuscules points brillants donne l'impression d'un firmament parsemé d'étoiles, conférant au tissu une dimension presque mystique. Chaque mouvement révèle de nouvelles facettes scintillantes, ajoutant une animation constante à la tenue. Ce tissu d'exception est parfait pour les célébrations en soirée, les mariages ou les événements spéciaux où l'on souhaite captiver le regard avec une élégance céleste et poétique."
  },
  {
    id: 57,
    longDescription: "Ce bazin pailleté vert pomme de Global Textile est une célébration de la nature et de la vitalité. Le fond vert pomme éclatant est magnifiquement rehaussé par des motifs ondulants en paillettes dorées et argentées qui s'entrelacent pour créer des formes organiques évoquant la végétation luxuriante. La combinaison des paillettes dorées et argentées crée un contraste riche et dynamique qui capte la lumière de façon spectaculaire. La qualité exceptionnelle du tissage assure un drapé fluide et une tenue parfaite pour des vêtements structurés. Idéal pour les cérémonies en plein air, les cérémonies printanières ou estivales, ou pour toute occasion où l'on souhaite afficher une présence vibrante et naturelle tout en conservant une touche de sophistication éclatante."
  },
  {
    id: 58,
    longDescription: "Le bazin pailleté saumon de Global Textile incarne la douceur et le raffinement. Sa teinte saumon délicate, à mi-chemin entre le rose et le pêche, crée un fond chaleureux et flatteur pour la plupart des carnations. Les lignes de paillettes argentées dessinent sur ce fond des motifs fluides et organiques qui évoquent les courbes gracieuses d'une calligraphie artistique. L'éclat subtil des paillettes apporte juste la touche de brillance nécessaire sans jamais tomber dans l'excès, créant un équilibre parfait entre sophistication et discrétion. Ce tissu d'exception est idéal pour les cérémonies diurnes, les mariages printaniers ou les événements où l'on recherche une élégance douce et féminine avec une touche de glamour contemporain."
  },
  {
    id: 59,
    longDescription: "Ce bazin pailleté blanc pur de Global Textile est l'incarnation de la pureté et de l'élégance intemporelle. Le fond blanc immaculé est sublimé par un semis de paillettes argentées qui forment des motifs rayonnants rappelant les cristaux de glace. La brillance des paillettes argentées sur le blanc crée un effet lumineux et éthéré, presque irréel. La précision dans l'application des paillettes témoigne d'un savoir-faire exceptionnel et d'une attention méticuleuse aux détails. Ce tissu d'une blancheur éclatante est particulièrement adapté aux cérémonies de mariage, aux baptêmes, ou à tout événement où la symbolique de pureté est importante. Il offre également une toile parfaite pour des accessoires colorés qui se détacheront avec élégance sur ce fond immaculé et scintillant."
  },
  {
    id: 60,
    longDescription: "Le bazin pailleté violet lilas de Global Textile apporte une touche de mystère et de royauté à toute tenue cérémonielle. La teinte violet lilas profonde et envoûtante est parcourue de motifs ondulants en paillettes dorées qui créent un contraste saisissant et luxueux. Ces vagues scintillantes semblent danser sur le tissu, créant un effet de mouvement constant même lorsque le porteur est immobile. La richesse de la couleur associée à l'éclat des paillettes confère à ce tissu une présence majestueuse qui ne manquera pas d'attirer tous les regards. Idéal pour les cérémonies du soir, les événements formels ou les occasions spéciales où l'on souhaite faire une entrée remarquée. Ce bazin d'exception permet de créer des tenues qui allient profondeur chromatique et éclat lumineux dans une combinaison véritablement royale."
  },
  {
    id: 61,
    longDescription: "Ce bazin pailleté bleu électrique de Global Textile capture l'intensité et l'énergie avec une élégance contemporaine. Le fond bleu électrique vibrant est décoré de motifs harmonieux en paillettes argentées qui forment des vagues régulières parcourant l'ensemble du tissu. Ces ondulations scintillantes créent un effet d'optique fascinant qui donne vie au tissu à chaque mouvement. La brillance des paillettes argentées contraste magnifiquement avec la profondeur du bleu électrique, créant un jeu de lumière captivant. Ce tissu spectaculaire est idéal pour les cérémonies importantes, les événements du soir ou les occasions où l'on souhaite faire sensation avec une tenue moderne et dynamique. Sa couleur énergisante et sa finition luxueuse en font un choix parfait pour ceux qui aiment allier audace chromatique et raffinement."
  },
  {
    id: 62,
    longDescription: "Le bazin pailleté gris argenté de Global Textile incarne l'élégance urbaine et contemporaine. Son fond gris anthracite profond est entièrement recouvert de minuscules paillettes argentées qui créent un effet métallique sophistiqué évoquant la surface de l'eau sous un clair de lune. La distribution uniforme des paillettes assure un scintillement constant et harmonieux, quelle que soit la perspective. Ce tissu d'exception offre une alternative moderne et raffinée aux tissus traditionnels plus colorés, tout en conservant un impact visuel saisissant grâce à son effet métallisé. Particulièrement adapté aux cérémonies du soir, aux événements formels en milieu urbain ou aux occasions où l'on recherche une élégance contemporaine avec une touche de glamour discret. Ce bazin permet de créer des tenues qui allient sobriété chromatique et richesse visuelle dans un équilibre parfait."
  },
  {
    id: 63,
    longDescription: "Ce bazin pailleté marron chocolat de Global Textile offre une richesse et une chaleur incomparables. La teinte marron chocolat profonde et luxueuse est rehaussée par des arcs réguliers de paillettes argentées qui créent un motif structuré et élégant sur toute la surface du tissu. Ce contraste entre le fond chaleureux et les lignes scintillantes confère au tissu une dimension sophistiquée et une présence remarquable. La précision du placement des paillettes témoigne d'un savoir-faire exceptionnel et d'une attention méticuleuse aux détails. Ce tissu d'exception est idéal pour les cérémonies automnales ou hivernales, les événements du soir où l'ambiance feutrée est de mise, ou toute occasion où l'on souhaite projeter une image d'élégance classique et intemporelle avec une touche de modernité brillante."
  },
  {
    id: 64,
    longDescription: "Le bazin pailleté vert prairie de Global Textile célèbre la vivacité et l'opulence naturelle. Son fond vert prairie éclatant est magnifiquement décoré de motifs complexes en paillettes dorées et argentées qui s'entrelacent pour créer un effet de texture luxueux. La combinaison des paillettes dorées et argentées apporte une richesse visuelle et une profondeur exceptionnelles au tissu, chaque angle de lumière révélant de nouvelles facettes brillantes. La qualité du tissage de base et la fixation précise des paillettes assurent un drapé élégant malgré la richesse de l'ornementation. Ce tissu somptueux est parfait pour les cérémonies importantes, les événements prestigieux ou les occasions où l'on souhaite afficher une présence remarquable et festive. Sa couleur vibrante associée au scintillement des paillettes en fait un choix idéal pour créer des tenues qui ne passeront pas inaperçues."
  },
  {
    id: 65,
    longDescription: "Ce bazin pailleté gris avec broderies florales de Global Textile représente le summum du raffinement et de l'artisanat textile. Sur un fond gris doux et élégant, des motifs floraux complexes ont été délicatement brodés en fil argenté, puis rehaussés de paillettes stratégiquement placées pour accentuer certains détails des fleurs et des feuilles. Cette technique mixte de broderie et de paillettes crée un effet tridimensionnel fascinant qui donne vie au tissu. La sophistication des motifs et la subtilité des détails témoignent d'un savoir-faire exceptionnel et d'une attention méticuleuse à chaque aspect de la création. Ce tissu d'exception est idéal pour les cérémonies formelles, les mariages élégants ou les événements où l'on recherche une élégance discrète mais indéniablement luxueuse. Il permet de créer des tenues qui allient tradition artisanale et esthétique contemporaine dans un équilibre parfait."
  },
  {
    id: 66,
    longDescription: "Le bazin pailleté turquoise de Global Textile capture la magie des eaux tropicales avec une élégance contemporaine. Son fond turquoise vibrant est décoré de motifs fluides en paillettes dorées et argentées qui s'entrelacent pour créer l'effet d'une eau scintillante sous le soleil. Les courbes organiques formées par les paillettes évoquent le mouvement des vagues et des courants marins, donnant une impression de fluidité et de mouvement constant au tissu. La brillance des paillettes contraste magnifiquement avec la profondeur du turquoise, créant un jeu de lumière fascinant qui change selon l'angle et l'intensité de l'éclairage. Ce tissu spectaculaire est idéal pour les cérémonies estivales, les événements en bord de mer ou les occasions où l'on souhaite apporter une touche de fraîcheur éclatante. Son caractère à la fois apaisant et dynamique en fait un choix parfait pour des tenues destinées à marquer les esprits."
  },
  {
    id: 67,
    longDescription: "Ce bazin pailleté or pur de Global Textile est l'incarnation même de l'opulence et du luxe. Le tissu présente un fond doré lumineux entièrement recouvert de fines paillettes dorées ton sur ton, créant un effet monochrome d'une richesse incomparable. Cette approche ton sur ton, où le fond et les paillettes partagent la même teinte dorée mais avec des finitions différentes, confère au tissu une profondeur et une dimension exceptionnelles tout en restant dans une harmonie parfaite. Chaque mouvement révèle de nouvelles facettes brillantes, donnant l'impression que le tissu est composé d'or liquide. La qualité exceptionnelle du bazin de base assure un drapé élégant malgré la richesse de l'ornementation. Ce tissu somptueux est idéal pour les cérémonies prestigieuses, les mariages luxueux ou les événements où l'on souhaite projeter une image d'opulence et de succès sans compromis."
  },
  {
    id: 68,
    longDescription: "Le bazin pailleté bleu royal de Global Textile incarne la noblesse et la splendeur avec une touche contemporaine. Son fond bleu royal intense est magnifiquement rehaussé par des motifs en arcs concentriques réalisés en paillettes argentées, créant un effet d'ondulations scintillantes qui parcourent l'ensemble du tissu. Ces vagues régulières de lumière semblent animer le tissu, lui conférant une dimension dynamique même lorsqu'il est statique. Le contraste saisissant entre le bleu profond et l'éclat argenté des paillettes crée un effet visuel spectaculaire qui capte immédiatement l'attention. Ce tissu d'exception est parfaitement adapté aux cérémonies formelles, aux événements du soir ou aux occasions où l'on souhaite faire une entrée remarquée avec une tenue à la fois classique et spectaculaire. Sa teinte intemporelle associée à la modernité des motifs en fait un choix idéal pour des créations qui traverseront les époques."
  },
  {
    id: 69,
    longDescription: "Ce bazin pailleté fuchsia éclatant de Global Textile est une véritable célébration de la joie et de la féminité. Son fond fuchsia vibrant est généreusement parsemé de paillettes multicolores qui créent un effet kaléidoscopique fascinant lorsque la lumière les frappe. Cette explosion de couleurs scintillantes sur la base déjà intense du fuchsia confère au tissu une énergie incomparable et une présence qui ne peut être ignorée. Les paillettes, aux reflets argentés, dorés et irisés, sont disposées selon des motifs géométriques modernes qui ajoutent structure et sophistication à cette composition audacieuse. Ce tissu spectaculaire est idéal pour les cérémonies festives, les célébrations importantes ou les événements où l'expression de la joie et de l'exubérance est de mise. Il permet de créer des tenues qui rayonnent d'énergie positive et qui incarnent l'esprit de fête dans toute sa splendeur."
  },
  {
    id: 70,
    longDescription: "Le bazin pailleté rose poudré de Global Textile offre une douceur féminine avec une touche de glamour discret. La base rose poudré, délicate et romantique, est sublimée par une multitude de fines paillettes irisées qui créent un effet lumineux subtil mais enchanteur. Ces paillettes aux reflets changeants captent la lumière de façon différente selon l'angle, évoquant les douces nuances d'un ciel à l'aube. La distribution équilibrée des paillettes assure un scintillement harmonieux qui n'est jamais excessif, maintenant l'élégance discrète qui caractérise ce tissu. Cette combinaison parfaite entre la tendresse du rose poudré et l'éclat délicat des paillettes irisées rend ce tissu idéal pour les cérémonies romantiques, les mariages printaniers ou les événements où l'on souhaite projeter une image de féminité raffinée et de douceur sophistiquée. Il permet de créer des tenues qui allient grâce intemporelle et touche contemporaine dans un équilibre parfait."
  },
  
  // Descriptions for the new brodeds (71-90)
  {
    id: 71,
    longDescription: "Ce bazin brodé fuchsia à motifs géométriques de Global Textile est une véritable œuvre d'art textile. Le fond fuchsia éclatant est magnifiquement rehaussé par des broderies géométriques complexes et des lignes ondulantes réalisées avec des paillettes argentées et dorées qui scintillent à chaque mouvement. La densité et la précision des motifs témoignent d'un savoir-faire artisanal exceptionnel et d'une attention méticuleuse aux détails. Ce tissu somptueux est parfait pour les cérémonies importantes et les événements festifs où l'on souhaite faire sensation. Sa couleur vibrante et sa richesse décorative en font un choix privilégié pour créer des tenues d'exception qui ne manqueraont pas de se démarquer."
  },
  {
    id: 72,
    longDescription: "Le bazin brodé vert pomme à paillettes de Global Textile incarne fraîcheur et opulence. Son fond vert pomme lumineux et vivifiant est généreusement décoré de motifs élaborés en paillettes dorées et argentées qui créent un jeu de lumière fascinant et dynamique. Les paillettes sont disposées selon des motifs organiques qui semblent évoluer sur le tissu comme une végétation luxuriante, ajoutant dimension et mouvement à chaque déplacement. La brillance exceptionnelle du tissu et l'éclat des paillettes font de cette pièce un choix parfait pour les célébrations printanières ou estivales, les mariages en plein air ou les occasions où l'on souhaite apporter une touche de vitalité éclatante. Chaque mètre de ce tissu témoigne d'un travail minutieux où tradition artisanale et esthétique contemporaine se rencontrent harmonieusement."
  },
  {
    id: 73,
    longDescription: "Ce bazin brodé gris anthracite à paillettes de Global Textile représente l'élégance urbaine moderne à son apogée. Le fond gris anthracite profond et sophistiqué est entièrement recouvert de paillettes argentées méticuleusement appliquées, créant un effet métallique uniforme d'une brillance incomparable. Cette surface scintillante capte et réfléchit la lumière de façon spectaculaire, donnant l'impression que le tissu est animé d'un éclat intérieur. La distribution harmonieuse des paillettes assure une brillance constante quelle que soit la perspective, tandis que les plis naturels du tissu créent des jeux d'ombre et de lumière fascinants. Ce tissu d'exception est idéal pour les cérémonies du soir, les événements formels ou les occasions où l'on recherche une élégance contemporaine avec une dimension luxueuse. Sa teinte versatile permet de porter ce tissu en toutes saisons, offrant tantôt fraîcheur, tantôt chaleur selon le contexte et les accessoires choisis."
  },
  {
    id: 74,
    longDescription: "Le bazin brodé noir à motifs floraux de Global Textile est l'incarnation du raffinement nocturne. Sur un fond noir profond et élégant se déploient des broderies florales et géométriques complexes réalisées en fils dorés et enrichies de paillettes multicolores qui créent un contraste saisissant. Les motifs s'entrelacent avec une précision artistique remarquable, formant un réseau délicat de fleurs, de tiges et de feuilles qui semblent flotter sur la surface sombre du tissu. Cette composition visuelle évoque un jardin nocturne mystérieux illuminé par des lucioles scintillantes. Ce tissu d'exception est parfaitement adapté aux cérémonies formelles du soir, aux mariages élégants ou aux événements prestigieux où l'on souhaite faire une impression mémorable avec une élégance discrète mais indéniablement luxueuse. La richesse des détails et la qualité exceptionnelle de la broderie en font une pièce qui se démarque même dans les contextes les plus sophistiqués."
  },
  {
    id: 75,
    longDescription: "Ce bazin brodé vert émeraude à motifs multicolores de Global Textile est un véritable festival de couleurs et de textures. Le fond vert émeraude profond et royal sert d'écrin parfait aux broderies multicolores qui s'y déploient avec une générosité extraordinaire. Chaque centimètre carré du tissu est travaillé avec des broderies de fils colorés et des paillettes dorées qui forment des motifs floraux d'une richesse incomparable. Les teintes vives de rose, turquoise, jaune et blanc créent une composition chromatique joyeuse et équilibrée qui évoque un jardin tropical luxuriant. Le jeu entre les fils mats brodés et les paillettes scintillantes ajoute une dimension supplémentaire à ce tissu déjà exceptionnel. Parfait pour les cérémonies importantes, les mariages ou les événements où l'on souhaite afficher une présence remarquable et festive, ce tissu permet de créer des tenues qui célèbrent la vie dans toutes ses couleurs et son exubérance."
  },
  {
    id: 76,
    longDescription: "Le bazin brodé vert forêt à motifs dorés de Global Textile évoque la majesté et le mystère des sous-bois luxuriants. Son fond vert forêt profond, à la fois riche et apaisant, est orné de broderies dorées et argentées qui forment des motifs organiques évoquant la flore sauvage des forêts. Ces lignes sinueuses et ces courbes délicates semblent tracer des chemins qui s'entrelacent à travers le tissu, créant un effet visuel à la fois dynamique et harmonieux. La brillance subtile des fils métalliques contraste magnifiquement avec la profondeur du vert, apportant luminosité et mouvement à cette toile végétale. Ce tissu d'exception est idéal pour les cérémonies élégantes, les événements sophistiqués ou les occasions où l'on recherche une présence à la fois noble et naturellement élégante. Sa teinte versatile permet de porter ce tissu en toutes saisons, offrant tantôt fraîcheur, tantôt chaleur selon le contexte et les accessoires choisis."
  },
  {
    id: 77,
    longDescription: "Ce bazin brodé orange vif à motifs dorés de Global Textile incarne la joie et l'énergie à leur paroxysme. Le fond orange éclatant et chaleureux est magnifiquement décoré de broderies dorées formant des motifs ondulés et floraux d'une élégance remarquable. Ces ornements sont enrichis de paillettes scintillantes qui captent la lumière et ajoutent une dimension festive à l'ensemble. La vivacité de la couleur orange combinée à la richesse des décorations dorées crée une pièce textile d'une présence extraordinaire qui ne manquera pas d'attirer tous les regards. Ce tissu d'exception est parfait pour les célébrations joyeuses, les mariages colorés ou les événements où l'on souhaite irradier d'énergie positive. Sa capacité à illuminer l'atmosphère et à réchauffer l'environnement en fait un choix privilégié pour des tenues qui célèbrent la vie et transmettent un message d'optimisme et de vitalité."
  },
  {
    id: 78,
    longDescription: "Le bazin brodé beige à paillettes irisées de Global Textile est l'incarnation même de l'élégance discrète et du raffinement contemporain. Sa teinte beige douce et intemporelle, à la fois chaleureuse et neutre, constitue une toile parfaite pour les lignes ondulantes en paillettes irisées qui parcourent sa surface. Ces paillettes aux reflets changeants captent la lumière de façon magique, créant un effet chatoyant qui évolue selon l'angle d'observation et le mouvement du tissu. Cette brillance subtile évoque les reflets naturels du sable fin sous le soleil couchant, apportant une dimension presque poétique à ce tissu sophistiqué. Idéal pour les cérémonies élégantes, les mariages ou les événements où l'on recherche une présence distinguée sans ostentation, ce bazin permet la création de tenues qui allient simplicité apparente et richesse visuelle dans un équilibre parfait. Sa teinte polyvalente facilite les associations avec d'autres couleurs et matières, offrant une flexibilité créative appréciable."
  },
  {
    id: 79,
    longDescription: "Ce bazin brodé rouge vif à motifs étoilés de Global Textile est une célébration de la passion et du dynamisme. Le fond rouge éclatant, symbole universel d'amour et d'énergie, est magnifiquement rehaussé par des broderies argentées formant des motifs d'étoiles et de lignes ondulantes qui dynamisent la surface du tissu. Ces ornements en relief, enrichis de paillettes scintillantes stratégiquement disposées, créent un jeu de lumière fascinant qui amplifie l'impact visuel de cette pièce déjà remarquable. La combinaison du rouge intense et de l'éclat argenté produit un contraste saisissant qui attire immédiatement le regard et affirme une présence indéniable. Ce tissu d'exception est idéal pour les grandes célébrations, les mariages traditionnels ou les événements où l'on souhaite incarner la joie et la vitalité. Sa puissance chromatique et sa richesse décorative en font un choix parfait pour des tenues destinées à marquer les esprits et à créer des souvenirs inoubliables."
  },
  {
    id: 80,
    longDescription: "Le bazin brodé rose fuschia à motifs dorés de Global Textile incarne la féminité audacieuse et l'élégance contemporaine. Son fond rose fuschia vibrant et chaleureux est orné de broderies dorées formant des motifs ondulants d'une beauté saisissante, enrichis de paillettes multicolores qui ajoutent profondeur et dimension à l'ensemble. Ces éléments décoratifs s'entrelacent avec une précision artistique remarquable, créant des vagues de lumière qui semblent danser à la surface du tissu avec chaque mouvement. La richesse des détails et la complexité des motifs témoignent d'un savoir-faire artisanal exceptionnel et d'une sensibilité esthétique raffinée. Ce tissu d'exception est parfaitement adapté aux cérémonies importantes, aux mariages colorés ou aux événements où l'on souhaite afficher une présence à la fois forte et sophistiquée. La combinaison audacieuse du rose fuschia et de l'or crée une pièce textile qui célèbre la vie dans toute sa splendeur et sa complexité."
  },
  {
    id: 81,
    longDescription: "Ce bazin brodé bleu ciel à paillettes argentées de Global Textile évoque la pureté du ciel étoilé dans sa plus belle expression. Le fond bleu ciel délicat et apaisant est entièrement recouvert de minuscules paillettes argentées méticuleusement appliquées, créant un effet visuel fascinant qui rappelle la voûte céleste parsemée d'étoiles scintillantes. Cette composition crée une impression de légèreté et d'infini, comme si le tissu capturait l'essence même du ciel dans sa matérialité. La distribution harmonieuse des paillettes assure un scintillement constant et équilibré qui ajoute mouvement et vie à cette teinte déjà lumineuse. Ce tissu d'exception est idéal pour les cérémonies printanières ou estivales, les mariages en plein air ou les événements où l'on recherche une élégance éthérée et poétique. Sa douceur visuelle et sa brillance subtile en font un choix parfait pour des tenues qui incarnent à la fois la fraîcheur et la sophistication dans une harmonie céleste."
  },
  {
    id: 82,
    longDescription: "Le bazin brodé noir à lignes argentées de Global Textile représente l'élégance structurée et la sophistication contemporaine. Sur un fond noir profond et élégant se déploie un réseau précis de lignes argentées formant des motifs géométriques d'une précision remarquable. Ces broderies, réalisées avec une minutie exceptionnelle, créent un effet visuel à la fois moderne et intemporel qui évoque l'architecture contemporaine et les arts graphiques. La régularité des motifs et la finesse de l'exécution témoignent d'un savoir-faire technique de haut niveau et d'une vision esthétique rigoureuse. Ce tissu d'exception est particulièrement adapté aux cérémonies formelles, aux événements du soir ou aux occasions où l'on souhaite projeter une image de raffinement absolu avec une touche de modernité. Le contraste saisissant entre le noir profond et l'éclat argenté crée une pièce textile qui ne manquera pas d'attirer l'attention par son élégance discrète mais indéniablement luxueuse."
  },
  {
    id: 83,
    longDescription: "Ce bazin brodé jaune vif à motifs multicolores de Global Textile est une véritable explosion de joie et de créativité. Le fond jaune lumineux et solaire sert d'écrin parfait pour les broderies multicolores qui s'y déploient généreusement. Ces broderies forment des motifs floraux et des feuillages stylisés d'une complexité remarquable, utilisant une palette de couleurs vives comprenant des verts, roses et turquoises qui contrastent harmonieusement avec le fond doré. Cette composition chromatique audacieuse mais équilibrée crée un effet visuel fascinant qui capte immédiatement le regard et illumine l'espace environnant. Ce tissu d'exception est parfaitement adapté aux célébrations joyeuses, aux mariages colorés ou aux événements où l'on souhaite apporter une présence lumineuse et festive. La richesse des détails et la vivacité des couleurs en font un choix idéal pour des tenues qui incarnent l'optimisme et la générosité, transformant chaque occasion en un moment mémorable de partage et de bonheur."
  },
  {
    id: 84,
    longDescription: "Le bazin brodé beige doré à paillettes de Global Textile incarne l'élégance intemporelle avec une touche contemporaine. Sa teinte beige doré chaude et sophistiquée est sublimée par l'application délicate de paillettes qui créent un effet satiné et luxueux sur l'ensemble de la surface. Ces minuscules points de lumière sont disposés avec une densité variable qui crée des nuances subtiles et des effets de texture fascinants, donnant l'impression que le tissu capture et diffuse la lumière de l'intérieur. Cette brillance douce et enveloppante, jamais excessive, confère au tissu une présence à la fois discrète et indéniablement précieuse. Idéal pour les cérémonies élégantes, les mariages ou les événements formels où l'on recherche une sophistication raffinée, ce bazin permet la création de tenues qui traverseront le temps avec grâce. Sa teinte neutre mais chaleureuse facilite les associations avec d'autres couleurs et matières, offrant une polyvalence appréciable pour des créations sur mesure."
  },
  {
    id: 85,
    longDescription: "Ce bazin brodé vert olive à paillettes argentées de Global Textile marie harmonieusement naturel et sophistication. Le fond vert olive, à la fois terreux et raffiné, est orné de lignes et rayons en paillettes argentées qui créent un effet rayonnant d'une élégance remarquable. Ces motifs linéaires s'étendent sur la surface du tissu comme des rayons de soleil perçant à travers le feuillage, apportant lumière et structure à cette teinte naturellement apaisante. La brillance des paillettes argentées contraste parfaitement avec la profondeur du vert olive, créant un dialogue visuel entre mat et brillant, naturel et précieux. Ce tissu d'exception est idéal pour les cérémonies élégantes en extérieur, les événements sophistiqués ou les occasions où l'on recherche une présence distinguée en harmonie avec l'environnement. Sa couleur versatile permet de le porter en toutes saisons, offrant une élégance discrète mais indéniablement luxueuse qui ne se démode jamais."
  },
  {
    id: 86,
    longDescription: "Le bazin brodé vert émeraude à motifs dorés de Global Textile est l'incarnation de l'opulence royale et de la majesté naturelle. Son fond vert émeraude éclatant et profond, évoquant à la fois richesse et vitalité, est magnifiquement rehaussé par des motifs ondulés et des lignes dorées qui créent un effet visuel somptueux et harmonieux. Ces broderies dorées, appliquées avec une précision remarquable, forment des vagues régulières qui parcourent l'ensemble du tissu, apportant mouvement et structure à cette teinte déjà captivante. Le contraste entre le vert profond et l'éclat de l'or produit une combinaison chromatique à la fois riche et subtile qui évoque les traditions royales et le raffinement artistique. Ce tissu d'exception est parfaitement adapté aux cérémonies importantes, aux événements formels ou aux occasions où l'on souhaite projeter une image de prestige et d'élégance absolue. Sa présence visuelle forte et sa richesse texturale en font un choix privilégié pour des tenues destinées à marquer les esprits et à créer une impression durable."
  },
  {
    id: 87,
    longDescription: "Ce bazin brodé turquoise à motifs dorés de Global Textile capture la magie des eaux tropicales avec une élégance contemporaine. Le fond turquoise lumineux et apaisant, évoquant à la fois ciel et océan, est orné de broderies dorées et argentées qui créent des motifs organiques d'une fluidité remarquable. Ces ornements sinueux semblent évoluer sur la surface du tissu comme des courants marins, apportant mouvement et profondeur à cette teinte déjà captivante. Les nuances subtiles entre l'or et l'argent ajoutent une dimension supplémentaire à ce jeu visuel, créant des effets de lumière qui rappellent les reflets du soleil sur l'eau. Ce tissu d'exception est idéal pour les cérémonies estivales, les événements en bord de mer ou les occasions où l'on souhaite apporter une touche de fraîcheur éclatante. Sa combinaison de couleur vive et de détails précieux permet la création de tenues qui allient vitalité et sophistication dans un équilibre parfait, évoquant à la fois détente et élégance."
  },
  {
    id: 88,
    longDescription: "Le bazin brodé jaune or à motifs multicolores de Global Textile est une célébration de lumière et de joie. Son fond jaune or éclatant et chaleureux, évoquant le soleil à son zénith, sert d'écrin parfait pour les broderies multicolores qui s'y déploient généreusement. Ces broderies forment des motifs floraux et des feuillages stylisés d'une complexité remarquable, utilisant une palette de couleurs vives comprenant des verts, roses et turquoises qui contrastent harmonieusement avec le fond doré. Cette composition chromatique audacieuse mais équilibrée crée un effet visuel fascinant qui capte immédiatement le regard et illumine l'espace environnant. Ce tissu d'exception est parfaitement adapté aux célébrations joyeuses, aux mariages colorés ou aux événements où l'on souhaite apporter une présence lumineuse et festive. La richesse des détails et la vivacité des couleurs en font un choix idéal pour des tenues qui incarnent l'optimisme et la générosité, transformant chaque occasion en un moment mémorable de partage et de bonheur."
  },
  {
    id: 89,
    longDescription: "Ce bazin brodé violet à motifs dorés de Global Textile incarne mystère et noblesse dans une harmonie parfaite. Le fond violet royal profond et envoûtant, couleur traditionnellement associée à la spiritualité et au pouvoir, est sublimé par des broderies dorées délicates formant des motifs ondulants et des lignes élégantes qui parcourent la surface du tissu avec fluidité. Ces ornements précieux ajoutent dimension et mouvement à cette teinte déjà majestueuse, créant un jeu de lumière fascinant qui évolue avec chaque déplacement. Le contraste entre la profondeur du violet et l'éclat de l'or produit une combinaison chromatique à la fois riche et subtile qui évoque les traditions royales et le raffinement artistique. Ce tissu d'exception est idéal pour les cérémonies importantes, les événements formels du soir ou les occasions où l'on souhaite projeter une présence distinguée et mémorable. Sa sobriété luxueuse et son élégance intemporelle en font un choix privilégié pour des tenues qui traversent les époques et les tendances avec une grâce royale."
  },
  {
    id: 90,
    longDescription: "Le bazin brodé rose à paillettes multicolores de Global Textile est l'incarnation de la douceur féminine avec une touche de fantaisie contemporaine. Le fond rose tendre et délicat, à la fois romantique et lumineux, est parsemé de paillettes multicolores qui créent un effet joyeux et festif sur l'ensemble de la surface. Ces minuscules points de couleur scintillante, comprenant des tons dorés, argentés et irisés, sont distribués avec une densité variable qui crée des nuances subtiles et des effets de texture fascinants. Cette brillance douce et enjouée apporte mouvement et vie à cette teinte déjà charmante, comme si le tissu était parsemé de confettis de lumière. Idéal pour les cérémonies printanières, les mariages, les baptêmes ou les événements où l'on souhaite créer une atmosphère légère et positive, ce bazin permet la création de tenues qui incarnent à la fois douceur et joie de vivre. Sa teinte polyvalente et sa décoration festive en font un choix parfait pour des occasions spéciales où l'on célèbre les moments heureux de la vie."
  }
];

// Utility function to get the long description for a product
export const getLongDescription = (productId: number): string => {
  const productLongDesc = productsWithLongDescriptions.find(p => p.id === productId);
  return productLongDesc?.longDescription || "";
};
