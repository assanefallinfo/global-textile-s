
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image } from 'lucide-react';

interface ProductCarouselProps {
  images: string[];
  alt?: string;
}

const ProductCarousel = ({ images, alt = "Article" }: ProductCarouselProps) => {
  if (!images || images.length === 0) {
    return (
      <div className="bg-gold/5 rounded-lg flex items-center justify-center h-80 md:h-96 overflow-hidden">
        <div className="text-center p-6 flex flex-col items-center justify-center h-full">
          <Image className="h-16 w-16 text-navy/30 mb-2" />
          <p className="font-serif text-navy/60">
            Image non disponible
          </p>
        </div>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="bg-gold/5 rounded-lg flex items-center justify-center h-80 md:h-96 overflow-hidden">
        <img 
          src={images[0]} 
          alt={alt}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    );
  }

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="h-80 md:h-96">
            <div className="bg-gold/5 rounded-lg flex items-center justify-center h-full overflow-hidden">
              <img 
                src={image} 
                alt={`${alt} - Image ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default ProductCarousel;
