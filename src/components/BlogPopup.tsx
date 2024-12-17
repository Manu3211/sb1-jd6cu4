import React, { useState, useEffect } from 'react';
import { X, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BlogPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage >= 50 && !isOpen && !hasShown) {
        setIsOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, hasShown]);

  const handleClose = () => {
    setIsOpen(false);
    setHasShown(true);
  };

  const handleOffer = () => {
    handleClose();
    navigate('/');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm" onClick={handleClose}></div>
      
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
        
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Offre Exceptionnelle</h3>
              <p className="text-sm text-gray-500">Économisez 1000€ sur votre site web</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-gray-600">
              Profitez d'un site web professionnel créé <span className="font-semibold">gratuitement</span> sur mesure selon vos besoins (valeur 1000€) et bénéficiez d'un hébergement premium avec maintenance à partir de 29€/mois.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="inline-block w-1 h-1 bg-gray-500 rounded-full"></span>
              <span>Sans engagement</span>
              <span className="inline-block w-1 h-1 bg-gray-500 rounded-full"></span>
              <span>Support inclus</span>
              <span className="inline-block w-1 h-1 bg-gray-500 rounded-full"></span>
              <span>Satisfaction garantie</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleOffer}
              className="block w-full px-6 py-3 text-center text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-[1.02]"
            >
              Je profite de l'offre
            </button>
            <button
              onClick={handleClose}
              className="block w-full px-6 py-3 text-center text-gray-500 hover:text-gray-700 transition-colors"
            >
              Non merci
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}