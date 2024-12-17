import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('/')}
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/#features')} 
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/#pricing')} 
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Tarifs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/#callback-form')} 
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
                <button
                  onClick={() => handleNavigation('/creation-site-web')}
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Guide création de sites web
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/outils-techniques-creation-site-web')}
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Outils et techniques web
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/referencement-seo')}
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Guide référencement SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/hebergement-web')}
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Guide hébergement web
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/creation-site-web-gratuit')}
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Créer un site gratuit
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/conception-site-web')}
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Conception web
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/hebergement-nom-domaine')}
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Hébergement et nom de domaine
                </button>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('/cgv')}
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Conditions générales de vente
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/mentions-legales')}
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Mentions légales
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/politique-confidentialite')}
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Politique de confidentialité
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/cookies')}
                  className="hover:text-white bg-transparent border-none p-0 cursor-pointer text-gray-300"
                >
                  Gestion des cookies
                </button>
              </li>
            </ul>
          </div>

          {/* À propos */}
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
                <button
                  onClick={() => handleNavigation('/')}
                  className="text-indigo-400 hover:text-indigo-300 bg-transparent border-none p-0 cursor-pointer"
                >
                  EasyWeb
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}