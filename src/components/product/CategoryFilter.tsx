
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
      <button
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all",
          "bg-gold text-white"
        )}
        onClick={() => onCategoryChange("Article")}
      >
        Article
      </button>
    </div>
  );
};

export default CategoryFilter;
