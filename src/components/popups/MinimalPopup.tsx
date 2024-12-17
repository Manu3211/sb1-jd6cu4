import React from 'react';
import { X, Phone } from 'lucide-react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MinimalPopup({ isOpen, onClose }: PopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl p-6">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
            <Phone className="w-6 h-6 text-indigo-600" />
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Création de site web gratuite
          </h3>
          
          <p className="text-gray-600 mb-6">
            Nous créons votre site web professionnel gratuitement (valeur 1000€). Profitez ensuite d'un hébergement premium avec maintenance complète dès 29€/mois.
          </p>

          <div className="space-y-2">
            <a
              href="#callback-form"
              onClick={onClose}
              className="block w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 transition-colors"
            >
              Être rappelé gratuitement
            </a>
            <button
              onClick={onClose}
              className="block w-full px-4 py-2 text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Continuer ma lecture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}