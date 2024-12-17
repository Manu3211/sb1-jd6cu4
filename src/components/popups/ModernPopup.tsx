import React from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModernPopup({ isOpen, onClose }: PopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-2xl p-8 transform transition-all">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex items-center space-x-2 mb-4">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          <h3 className="text-xl font-bold text-gray-900">Offre Exceptionnelle</h3>
        </div>
        
        <p className="text-2xl font-bold text-gray-900 mb-2">
          Création de votre site web offerte
        </p>
        <p className="text-gray-600 mb-6">
          Profitez d'un site web professionnel créé gratuitement (valeur 1000€) et bénéficiez d'un hébergement premium avec maintenance à partir de 29€/mois.
        </p>
        
        <div className="space-y-3">
          <a 
            href="#callback-form"
            onClick={onClose}
            className="flex items-center justify-center w-full px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Être rappelé gratuitement
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <button
            onClick={onClose}
            className="w-full px-6 py-3 text-gray-500 hover:text-gray-700 transition-colors"
          >
            Plus tard
          </button>
        </div>
      </div>
    </div>
  );
}