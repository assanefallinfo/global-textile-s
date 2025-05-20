
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all",
            activeCategory === category 
              ? "bg-gold text-white" 
              : "bg-gold/10 text-navy hover:bg-gold/20"
          )}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
