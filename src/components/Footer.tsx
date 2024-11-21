import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Si on n'est pas sur la page d'accueil, on redirige d'abord
      window.location.href = '/#' + sectionId;
    } else {
      // Si on est sur la page d'accueil, on scroll directement
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={scrollToTop} className="hover:text-white">Accueil</Link></li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Tarifs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('callback-form')} 
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li><Link to="/cgv" className="hover:text-white">Conditions générales de vente</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-white">Politique de confidentialité</Link></li>
              <li><Link to="/cookies" className="hover:text-white">Gestion des cookies</Link></li>
            </ul>
          </div>

          {/* Société */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">À propos</h3>
            <p className="mb-4">EasyWeb - Création de sites web professionnels</p>
            <p className="text-sm">
              Nous créons des sites web sur mesure pour les professionnels.<br />
              Une équipe d'experts à votre service pour développer votre présence en ligne.
            </p>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} EasyWeb. Tous droits réservés.</p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm">
                Site créé par{' '}
                <Link to="/" onClick={scrollToTop} className="text-indigo-400 hover:text-indigo-300">
                  EasyWeb
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}