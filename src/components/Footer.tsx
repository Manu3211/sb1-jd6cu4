import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = '/#' + sectionId;
    } else {
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

          {/* Blog */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Blog</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/creation-site-web" onClick={scrollToTop} className="hover:text-white">
                  Création de sites web
                </Link>
              </li>
              <li>
                <Link to="/referencement-seo" onClick={scrollToTop} className="hover:text-white">
                  Référencement SEO
                </Link>
              </li>
              <li>
                <Link to="/hebergement-web" onClick={scrollToTop} className="hover:text-white">
                  Hébergement Web
                </Link>
              </li>
              <li>
                <Link to="/creation-site-web-gratuit" onClick={scrollToTop} className="hover:text-white">
                  Créer un site gratuit
                </Link>
              </li>
              <li>
                <Link to="/conception-site-web" onClick={scrollToTop} className="hover:text-white">
                  Conception de sites web
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li><Link to="/cgv" onClick={scrollToTop} className="hover:text-white">Conditions générales de vente</Link></li>
              <li><Link to="/mentions-legales" onClick={scrollToTop} className="hover:text-white">Mentions légales</Link></li>
              <li><Link to="/politique-confidentialite" onClick={scrollToTop} className="hover:text-white">Politique de confidentialité</Link></li>
              <li><Link to="/cookies" onClick={scrollToTop} className="hover:text-white">Gestion des cookies</Link></li>
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