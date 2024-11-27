import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import { Link } from 'react-router-dom';

export default function CreerSiteGratuitGoogle() {
  return (
    <BlogLayout
      title="Créer un site web gratuit avec Google en 2024"
      description="Guide complet pour créer votre site web gratuitement avec Google Sites : tutoriel pas à pas, astuces et conseils d'experts."
      previousPost={{
        url: "/creation-site-web-gratuit/creer-mon-site-web-gratuit",
        title: "Créer mon site web gratuit"
      }}
      nextPost={{
        url: "/creation-site-web-gratuit/creer-site-web-canva",
        title: "Créer un site avec Canva"
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Création de site web avec Google Sites"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <div className="prose prose-indigo max-w-none">
        <h2>Google Sites : la solution gratuite de Google</h2>
        <p>
          Google Sites est une solution intuitive pour créer un site web professionnel gratuitement. Pour explorer d'autres options, découvrez notre guide sur <Link to="/creation-site-web-gratuit/logiciels-gratuits-creer-site-web" className="text-indigo-600 hover:text-indigo-800">les meilleurs logiciels gratuits</Link> de création de sites web.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg my-8">
          <h3>Avantages de Google Sites</h3>
          <ul className="space-y-4">
            <li>
              <strong>Intégration Google Workspace</strong>
              <p>Synchronisation parfaite avec les outils Google (Drive, Docs, Sheets, etc.).</p>
            </li>
            <li>
              <strong>Interface intuitive</strong>
              <p>Création simple avec drag-and-drop.</p>
            </li>
            <li>
              <strong>Hébergement gratuit</strong>
              <p>Pas de frais d'hébergement à prévoir.</p>
            </li>
          </ul>
        </div>

        <h2>Créer son site étape par étape</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-3">1. Configuration initiale</h4>
            <ul className="list-disc pl-6">
              <li>Connexion compte Google</li>
              <li>Accès à Google Sites</li>
              <li>Choix du template</li>
              <li>Paramètres de base</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-3">2. Personnalisation</h4>
            <ul className="list-disc pl-6">
              <li>Design et mise en page</li>
              <li>Ajout de contenu</li>
              <li>Organisation des pages</li>
              <li>Navigation</li>
            </ul>
          </div>
        </div>

        <h2>Fonctionnalités clés</h2>
        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h3>Outils essentiels</h3>
          <ul className="space-y-4">
            <li>
              <strong>Éditeur visuel</strong>
              <p>Interface WYSIWYG pour une création sans code.</p>
            </li>
            <li>
              <strong>Responsive design</strong>
              <p>Adaptation automatique aux mobiles et tablettes.</p>
            </li>
            <li>
              <strong>Intégration multimédia</strong>
              <p>Ajout facile de vidéos, images et documents.</p>
            </li>
          </ul>
        </div>

        <h2>Optimisation et performance</h2>
        <p>
          Même avec Google Sites, il est important d'optimiser votre site. Découvrez comment <Link to="/creation-site-web-gratuit/creer-heberger-site-web-gratuitement" className="text-indigo-600 hover:text-indigo-800">optimiser votre hébergement gratuit</Link>.
        </p>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h3>Bonnes pratiques</h3>
          <ul className="space-y-4">
            <li>
              <strong>Optimisation des images</strong>
              <p>Compression et redimensionnement pour de meilleures performances.</p>
            </li>
            <li>
              <strong>Structure de navigation</strong>
              <p>Organisation logique des pages et menus.</p>
            </li>
            <li>
              <strong>SEO de base</strong>
              <p>Optimisation des titres et descriptions.</p>
            </li>
          </ul>
        </div>

        <h2>Personnalisation avancée</h2>
        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3>Techniques de personnalisation</h3>
          <ul className="space-y-4">
            <li>
              <strong>CSS personnalisé</strong>
              <p>Ajout de styles personnalisés pour plus de contrôle.</p>
            </li>
            <li>
              <strong>Intégration de code</strong>
              <p>Incorporation d'éléments HTML personnalisés.</p>
            </li>
            <li>
              <strong>Widgets et extensions</strong>
              <p>Ajout de fonctionnalités supplémentaires.</p>
            </li>
          </ul>
        </div>

        <h2>Limites et alternatives</h2>
        <div className="bg-red-50 p-6 rounded-lg my-8">
          <h3>Points à considérer</h3>
          <ul className="space-y-4">
            <li>
              <strong>Fonctionnalités limitées</strong>
              <p>Certaines fonctionnalités avancées ne sont pas disponibles.</p>
            </li>
            <li>
              <strong>Personnalisation restreinte</strong>
              <p>Design limité aux templates disponibles.</p>
            </li>
            <li>
              <strong>Nom de domaine</strong>
              <p>Sous-domaine Google par défaut.</p>
            </li>
          </ul>
        </div>

        <h2>Conseils pour réussir</h2>
        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3>Recommandations</h3>
          <ul className="space-y-4">
            <li>
              <strong>Planification</strong>
              <p>Définissez clairement vos objectifs avant de commencer.</p>
            </li>
            <li>
              <strong>Contenu de qualité</strong>
              <p>Privilégiez un contenu professionnel et pertinent.</p>
            </li>
            <li>
              <strong>Tests réguliers</strong>
              <p>Vérifiez régulièrement l'apparence et les fonctionnalités.</p>
            </li>
          </ul>
        </div>
      </div>
    </BlogLayout>
  );
}