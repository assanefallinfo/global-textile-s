
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();
  
  return (
    <Button 
      onClick={() => navigate('/produits')} 
      className="mb-6 bg-gold hover:bg-gold/90"
      size="sm"
    >
      <ArrowLeft className="mr-1 h-4 w-4" /> Retour aux produits
    </Button>
  );
};

export default BackButton;
