
import React from 'react';
import { Instagram, Facebook, Phone } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/global_textile221?igsh=MWxianB0eG4wODdsNg==',
      color: 'bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/Globaltextileofficielle',
      color: 'bg-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: Phone,
      url: 'https://api.whatsapp.com/send?phone=%2B221779677888',
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="flex justify-center mb-10">
      <div className="flex space-x-4">
        {socialLinks.map((link) => (
          <a 
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-10 h-10 rounded-full text-white ${link.color} hover:opacity-90 transition-opacity`}
            aria-label={`Suivez-nous sur ${link.name}`}
          >
            <link.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
