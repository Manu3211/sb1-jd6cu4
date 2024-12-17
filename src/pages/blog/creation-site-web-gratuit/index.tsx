import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import { Link } from 'react-router-dom';

export default function CreationSiteGratuitIndex() {
  return (
    <BlogLayout
      title="Création de sites web gratuits : TOUT SAVOIR [ A LIRE ]"
      description="Guide complet sur la création de sites web gratuits : outils, plateformes et conseils pour créer votre site web sans dépenser un centime en 2024."
    >
      <img
        src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Création de site web gratuit"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <section className="mb-12">
        <h2>Créer un site web gratuitement en 2024</h2>
        <p className="text-lg mb-6">
          La création d'un site web n'a jamais été aussi accessible. Avec les bons outils et conseils, vous pouvez créer votre présence en ligne sans investissement initial. Découvrez notre guide détaillé sur <Link to="/creation-site-web-gratuit/creer-mon-site-web-gratuit" className="text-indigo-600 hover:text-indigo-800">comment créer votre site web gratuitement</Link>.
        </p>

        <div className="bg-gray-50 p-8 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Les avantages de la création gratuite</h3>
          <p className="mb-6">
            Créer un site web gratuitement présente plusieurs avantages, particulièrement pour les débutants et les petits projets. Une option populaire est de <Link to="/creation-site-web-gratuit/creer-site-web-gratuit-google" className="text-indigo-600 hover:text-indigo-800">créer un site web avec Google</Link>, qui offre des outils intuitifs et professionnels.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Aucun investissement initial requis</li>
            <li>Idéal pour tester des concepts</li>
            <li>Outils intuitifs et conviviaux</li>
            <li>Modèles professionnels disponibles</li>
            <li>Mise en ligne rapide</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Les plateformes gratuites en 2024</h3>
          <p className="mb-6">
            Il existe de nombreuses plateformes pour créer votre site gratuitement. Une option créative est de <Link to="/creation-site-web-gratuit/creer-site-web-canva" className="text-indigo-600 hover:text-indigo-800">créer votre site avec Canva</Link>, qui offre des fonctionnalités de design avancées.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Constructeurs de sites</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Interfaces drag-and-drop</li>
                <li>Modèles personnalisables</li>
                <li>Hébergement inclus</li>
                <li>Support technique</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold mb-3">CMS gratuits</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Plus de flexibilité</li>
                <li>Communauté active</li>
                <li>Extensions gratuites</li>
                <li>Personnalisation avancée</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Les outils essentiels</h3>
          <p className="mb-6">
            Pour créer un site web professionnel gratuitement, vous aurez besoin des bons outils. Découvrez notre sélection des <Link to="/creation-site-web-gratuit/logiciels-gratuits-creer-site-web" className="text-indigo-600 hover:text-indigo-800">meilleurs logiciels gratuits</Link> pour la création de sites web.
          </p>
          <div className="space-y-4">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Éditeurs visuels</h4>
              <p>Créez votre design sans code avec des interfaces intuitives.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Outils de contenu</h4>
              <p>Gérez facilement vos textes, images et médias.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Solutions d'hébergement</h4>
              <p>Découvrez comment <Link to="/creation-site-web-gratuit/creer-heberger-site-web-gratuitement" className="text-indigo-600 hover:text-indigo-800">héberger votre site gratuitement</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}