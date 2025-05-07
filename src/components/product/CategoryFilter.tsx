
import React from 'react';
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex justify-center mb-10 overflow-x-auto pb-2">
      <div className="flex space-x-2 md:space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm md:text-base transition-all whitespace-nowrap",
              activeCategory === category
                ? "bg-gold text-white shadow-md"
                : "bg-white text-navy hover:bg-gold/10"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
