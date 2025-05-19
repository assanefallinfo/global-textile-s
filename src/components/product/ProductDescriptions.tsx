import React from 'react';

interface ProductDescription {
  id: number;
  longDescription: string;
}

// Les descriptions longues pour tous les produits
export const productsWithLongDescriptions: ProductDescription[] = [
  // Produits existants
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
  {
    id: 17,
    longDescription: "Nos tissus brodés de luxe représentent le summum de l'artisanat textile sénégalais. Chaque pièce est minutieusement travaillée par des artisans expérimentés qui perpétuent un savoir-faire ancestral. Les motifs élaborés et les finitions parfaites font de ces tissus des œuvres d'art à part entière. Que ce soit pour une grande cérémonie ou pour créer une tenue d'exception, nos tissus brodés de luxe sauront sublimer votre style et vous démarquer par leur raffinement incomparable."
  },
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
  // Nouveaux produits ajoutés
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
  
  // Nouveaux produits Getzner
  {
    id: 53,
    longDescription: "Ce tissu Getzner blanc à pois représente l'essence même de l'élégance intemporelle. Fabriqué en Autriche selon des standards de qualité exceptionnels, ce bazin 100% coton offre une texture somptueuse et un drapé impeccable. Les motifs de pois en relief créent un jeu subtil de lumière et d'ombre, révélant toute la richesse du tissu selon l'angle d'observation. Parfait pour les tenues de cérémonie, les mariages ou tout événement où l'élégance pure est recherchée, ce Getzner blanc s'adapte à tous les styles et toutes les saisons. Sa qualité exceptionnelle en fait un investissement durable qui conservera sa beauté et sa tenue au fil des lavages et des années."
  },
  {
    id: 54,
    longDescription: "Le Getzner bleu ciel à micro-motifs incarne la fraîcheur et la sophistication discrète. Importé directement d'Autriche, ce tissu 100% coton de haute qualité se distingue par sa finition impeccable et sa texture luxueuse. Les micro-motifs tissés créent un effet visuel fascinant qui apporte profondeur et caractère à cette teinte céleste apaisante. Idéal pour les cérémonies printanières et estivales, ce bazin permet de confectionner des tenues à la fois élégantes et confortables, qui capturent la lumière de façon remarquable. Sa brillance subtile et sa qualité exceptionnelle en font un choix privilégié pour des créations raffinées qui résisteront à l'épreuve du temps."
  },
  {
    id: 55,
    longDescription: "Le Getzner gris argenté géométrique est l'incarnation de l'élégance contemporaine. Ce tissu d'exception, fabriqué en Autriche par la prestigieuse maison Getzner, présente des motifs géométriques complexes qui créent un effet visuel captivant et moderne. Le fond gris argenté, à la fois sobre et lumineux, offre une polyvalence remarquable et s'adapte à toutes les occasions formelles. Parfait pour les tenues de soirée, les cérémonies importantes ou les événements professionnels prestigieux, ce bazin de qualité supérieure allie tradition et modernité dans une harmonie parfaite. Sa texture riche et son drapé élégant permettent de créer des pièces structurées au tombé impeccable."
  },
  {
    id: 56,
    longDescription: "Ce Getzner blanc à pois argentés représente le mariage parfait entre pureté et éclat. Issu du savoir-faire autrichien reconnu mondialement, ce tissu 100% coton offre une qualité exceptionnelle et une durabilité remarquable. Les pois argentés délicatement tissés dans la trame blanche créent un effet visuel à la fois discret et captivant, qui scintille subtilement à la lumière. Ce tissu de prestige est particulièrement adapté aux tenues de cérémonie, aux mariages et aux événements formels où l'on recherche une élégance intemporelle avec une touche de brillance. Sa texture somptueuse et sa finition impeccable en font un choix privilégié pour des créations qui traverseront les époques sans perdre de leur splendeur."
  },
  {
    id: 57,
    longDescription: "Le Getzner bleu pastel à motifs géométriques évoque la douceur d'un ciel printanier. Tissu d'exception fabriqué en Autriche, ce bazin 100% coton combine légèreté visuelle et qualité supérieure. Les motifs géométriques subtilement tissés créent un effet de texture qui apporte profondeur et caractère à cette teinte apaisante. Idéal pour les cérémonies en plein air, les baptêmes ou les mariages, ce tissu se prête parfaitement à la création de tenues élégantes et rafraîchissantes. Sa brillance délicate et son toucher somptueux témoignent de l'excellence de la fabrication Getzner, garantissant des créations durables qui conserveront leur beauté au fil des années."
  },
  {
    id: 58,
    longDescription: "Le Getzner blanc premium est la quintessence de l'élégance pure et raffinée. Ce tissu d'exception, fruit du savoir-faire séculaire de la maison autrichienne Getzner, présente une texture incomparable et une brillance subtile qui captent la lumière de façon remarquable. Les motifs texturés géométriques tissés dans la trame blanche créent un effet visuel sophistiqué qui se révèle pleinement sous différents angles. Destiné aux cérémonies les plus prestigieuses et aux événements où l'excellence est de mise, ce bazin de qualité supérieure permet la création de tenues d'une élégance intemporelle. Sa finition impeccable et sa durabilité exceptionnelle en font un investissement précieux pour des créations qui traverseront les générations."
  },
  {
    id: 59,
    longDescription: "Le Getzner vert lotus Super Magnum incarne vitalité et originalité. Cette pièce exceptionnelle, issue de la collection Super Magnum de Getzner, se distingue par sa teinte verte éclatante et ses motifs de lotus délicatement tissés qui créent un effet visuel harmonieux et naturel. La qualité supérieure du tissu 100% coton garantit un toucher somptueux et un drapé parfait, tandis que sa brillance remarquable capte la lumière de façon spectaculaire. Idéal pour les cérémonies estivales, les célébrations en plein air ou tout événement où l'on souhaite se démarquer avec élégance, ce tissu permet la création de tenues vibrantes et mémorables. La finition « Super Magnum » témoigne de l'excellence et du prestige de cette pièce d'exception."
  },
  {
    id: 60,
    longDescription: "Le Getzner argent diamant est un chef-d'œuvre textile qui incarne luxe et raffinement. Fabriqué en Autriche selon des standards d'excellence inégalés, ce bazin 100% coton présente des motifs diamantés qui créent un effet de relief fascinant et captent la lumière de manière spectaculaire. Sa teinte argentée, à la fois moderne et intemporelle, offre une polyvalence remarquable tout en conservant une présence distinctive. Parfait pour les cérémonies prestigieuses, les mariages ou les événements formels du soir, ce tissu d'exception permet la création de tenues somptueuses au tombé impeccable. La qualité exceptionnelle de ce Getzner garantit durabilité et maintien de l'éclat au fil du temps, faisant de chaque création un investissement précieux."
  },
  {
    id: 61,
    longDescription: "Le Getzner à trame hexagonale de la collection Super Magnum représente l'avant-garde du design textile traditionnel. Ce tissu d'exception, fabriqué en Autriche, se distingue par ses motifs hexagonaux futuristes qui créent un effet visuel moderne et structuré sur un fond bleu ciel lumineux. La qualité supérieure du coton 100% garantit une texture somptueuse et un drapé parfait, tandis que la finition Super Magnum assure une brillance exceptionnelle et une durabilité à toute épreuve. Idéal pour les cérémonies contemporaines et les événements où l'on souhaite allier tradition et modernité, ce tissu permet la création de tenues distinctives qui ne manqueront pas de faire impression. Son caractère innovant en fait un choix audacieux pour ceux qui recherchent l'excellence avec une touche d'originalité."
  },
  {
    id: 62,
    longDescription: "Le Getzner blanc nacré de la collection Prestige incarne la perfection et le raffinement absolu. Ce tissu d'exception, fabriqué en Autriche selon un savoir-faire séculaire, offre une finition nacrée unique qui lui confère des reflets irisés subtils et changeants selon la lumière. Les motifs délicatement tissés dans la trame ajoutent profondeur et caractère à ce blanc immaculé, créant un effet visuel à la fois riche et délicat. Destiné aux occasions les plus prestigieuses comme les mariages, les cérémonies religieuses importantes ou les événements officiels, ce bazin de la collection Prestige représente le summum de l'excellence textile. Sa texture incomparable, son drapé majestueux et sa brillance distinctive en font un choix privilégié pour des créations d'exception destinées à marquer les esprits."
  },
  {
    id: 63,
    longDescription: "Le Getzner beige géométrique allie sobriété et sophistication dans une harmonie parfaite. Ce tissu haut de gamme, produit par la prestigieuse maison autrichienne Getzner, se distingue par sa teinte beige intemporelle rehaussée de motifs géométriques précis et élégants. La finesse du tissage et la qualité exceptionnelle du coton 100% garantissent une texture luxueuse et un drapé impeccable qui mettent en valeur les silhouettes avec distinction. Particulièrement adapté aux cérémonies formelles, aux événements professionnels de prestige ou aux occasions où l'élégance discrète est de mise, ce bazin permet la création de tenues à la fois classiques et contemporaines. Sa polyvalence et sa noblesse en font un investissement judicieux pour des pièces qui traverseront les saisons avec grâce."
  },
  {
    id: 64,
    longDescription: "Le Getzner corail à motifs paisley de la collection Super Magnum est une célébration de couleur et de raffinement. Ce tissu d'exception, issu du savoir-faire autrichien renommé, se distingue par sa teinte corail vibrante et chaleureuse, ornée de motifs paisley ton sur ton qui créent un effet visuel riche et sophistiqué. La qualité supérieure Super Magnum assure une brillance éclatante, une texture somptueuse et un drapé parfait qui subliment chaque création. Idéal pour les cérémonies estivales, les mariages colorés ou les événements festifs où l'on souhaite faire sensation, ce bazin permet la réalisation de tenues féminines et remarquables. Son caractère à la fois traditionnel par ses motifs et contemporain par sa couleur en fait un choix audacieux et élégant pour des créations mémorables."
  },
  {
    id: 65,
    longDescription: "Le Getzner blanc à motifs mixtes représente l'apogée de la complexité textile maîtrisée. Fabriqué en Autriche selon des standards d'excellence inégalés, ce bazin 100% coton offre une expérience visuelle et tactile exceptionnelle grâce à ses motifs géométriques variés qui créent un véritable patchwork harmonieux de textures. Cette composition sophistiquée, sur fond blanc immaculé, produit un effet visuel fascinant qui se révèle différemment selon l'angle et la lumière. Parfait pour les cérémonies importantes, les mariages ou les événements où l'on recherche une élégance distinctive, ce tissu d'exception permet la création de tenues structurées au caractère unique. Sa qualité remarquable et sa richesse visuelle en font un choix privilégié pour des pièces qui allient tradition, modernité et raffinement."
  },
  {
    id: 66,
    longDescription: "Le Getzner pêche à motifs circulaires de la collection Super Magnum évoque douceur et sophistication. Ce tissu d'exception, fabriqué par la prestigieuse maison autrichienne Getzner, se distingue par sa teinte pêche pastel délicate et apaisante, parsemée de motifs circulaires ton sur ton qui créent un effet visuel subtil et élégant. La qualité supérieure Super Magnum garantit une brillance remarquable, une texture somptueuse et un drapé impeccable qui mettent en valeur chaque silhouette avec grâce. Idéal pour les cérémonies printanières, les mariages en fin d'après-midi ou les événements où l'on recherche une élégance douce et lumineuse, ce bazin permet la création de tenues féminines et raffinées. Sa teinte polyvalente et sa finition exceptionnelle en font un choix précieux pour des créations intemporelles."
  },
  {
    id: 67,
    longDescription: "Le Getzner bleu turquoise floral Super Magnum est une véritable œuvre d'art textile. Ce tissu d'exception, issu de la collection premium de la maison autrichienne Getzner, captive par sa teinte bleu turquoise vibrante et ses motifs floraux majestueux ton sur ton qui créent une dimension visuelle spectaculaire. La qualité Super Magnum assure une brillance incomparable, une texture luxueuse et un drapé parfait qui donnent vie à chaque création. Destiné aux grandes occasions et aux événements où l'on souhaite faire une impression mémorable, ce bazin permet la réalisation de tenues remarquables qui ne passeront pas inaperçues. L'harmonie entre la couleur éclatante et les motifs floraux délicats témoigne de l'excellence du savoir-faire Getzner, faisant de ce tissu un choix privilégié pour des pièces d'exception."
  }
];

// Fonction utilitaire pour trouver la description longue d'un produit
export const getLongDescription = (productId: number): string => {
  const productLongDesc = productsWithLongDescriptions.find(p => p.id === productId);
  return productLongDesc?.longDescription || "";
};
