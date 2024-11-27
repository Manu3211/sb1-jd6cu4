import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import { Link } from 'react-router-dom';

export default function CreerSiteGoogle() {
  return (
    <BlogLayout
      title="Créer un site web avec Google Sites en 2024"
      description="Guide complet pour créer votre site web professionnel avec Google Sites : tutoriel étape par étape, astuces et meilleures pratiques."
      previousPost={{
        url: "/outils-techniques-creation-site-web/creer-site-web-ia",
        title: "Créer un site avec l'IA"
      }}
      nextPost={{
        url: "/outils-techniques-creation-site-web/apprendre-creer-site-web-html5-css3",
        title: "Apprendre HTML5 et CSS3"
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Création de site web avec Google Sites"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <div className="prose prose-indigo max-w-none">
        <h2>Google Sites : la solution simple et efficace</h2>
        <p>
          Google Sites offre une approche intuitive pour créer des sites web professionnels. Pour des fonctionnalités plus avancées, vous pouvez explorer <Link to="/outils-techniques-creation-site-web/apprendre-creer-site-web-html5-css3" className="text-indigo-600 hover:text-indigo-800">l'apprentissage de HTML5 et CSS3</Link>.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg my-8">
          <h3>Avantages de Google Sites</h3>
          <ul className="space-y-4">
            <li>
              <strong>Intégration Google Workspace</strong>
              <p>Synchronisation parfaite avec Drive, Docs, Sheets, etc.</p>
            </li>
            <li>
              <strong>Interface intuitive</strong>
              <p>Création simple avec drag-and-drop.</p>
            </li>
            <li>
              <strong>Collaboration en temps réel</strong>
              <p>Travail d'équipe facilité.</p>
            </li>
          </ul>
        </div>

        <h2>Création étape par étape</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-3">1. Configuration initiale</h4>
            <ul className="list-disc pl-6">
              <li>Connexion compte Google</li>
              <li>Création nouveau site</li>
              <li>Choix du thème</li>
              <li>Structure de base</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-3">2. Personnalisation</h4>
            <ul className="list-disc pl-6">
              <li>Design et mise en page</li>
              <li>Navigation</li>
              <li>En-tête et pied de page</li>
              <li>Styles personnalisés</li>
            </ul>
          </div>
        </div>

        <h2>Fonctionnalités essentielles</h2>
        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h3>Outils intégrés</h3>
          <ul className="space-y-4">
            <li>
              <strong>Éditeur de pages</strong>
              <p>Interface WYSIWYG intuitive.</p>
            </li>
            <li>
              <strong>Gestion des médias</strong>
              <p>Intégration facile d'images et vidéos.</p>
            </li>
            <li>
              <strong>Responsive design</strong>
              <p>Adaptation automatique aux mobiles.</p>
            </li>
          </ul>
        </div>

        <h2>Optimisation et performance</h2>
        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h3>Bonnes pratiques</h3>
          <ul className="space-y-4">
            <li>
              <strong>SEO de base</strong>
              <p>Configuration des titres et descriptions.</p>
            </li>
            <li>
              <strong>Vitesse de chargement</strong>
              <p>Optimisation des médias et ressources.</p>
            </li>
            <li>
              <strong>Analytics</strong>
              <p>Suivi des performances avec Google Analytics.</p>
            </li>
          </ul>
        </div>

        <h2>Intégrations avancées</h2>
        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3>Extensions et widgets</h3>
          <ul className="space-y-4">
            <li>
              <strong>Google Maps</strong>
              <p>Intégration de cartes interactives.</p>
            </li>
            <li>
              <strong>Formulaires Google</strong>
              <p>Création de formulaires de contact.</p>
            </li>
            <li>
              <strong>Calendriers</strong>
              <p>Affichage d'événements et disponibilités.</p>
            </li>
          </ul>
        </div>

        <h2>Sécurité et partage</h2>
        <div className="bg-red-50 p-6 rounded-lg my-8">
          <h3>Gestion des accès</h3>
          <ul className="space-y-4">
            <li>
              <strong>Contrôle d'accès</strong>
              <p>Paramètres de visibilité et permissions.</p>
            </li>
            <li>
              <strong>Collaboration</strong>
              <p>Partage et édition collaborative.</p>
            </li>
            <li>
              <strong>Sécurité Google</strong>
              <p>Protection contre les menaces.</p>
            </li>
          </ul>
        </div>

        <h2>Limites et alternatives</h2>
        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3>Points à considérer</h3>
          <ul className="space-y-4">
            <li>
              <strong>Personnalisation limitée</strong>
              <p>Options de design restreintes.</p>
            </li>
            <li>
              <strong>Fonctionnalités basiques</strong>
              <p>Pas adapté aux sites complexes.</p>
            </li>
            <li>
              <strong>Dépendance Google</strong>
              <p>Hébergement lié à Google.</p>
            </li>
          </ul>
        </div>

        <h2>Conseils pour réussir</h2>
        <div className="bg-purple-50 p-6 rounded-lg my-8">
          <h3>Recommandations</h3>
          <ul className="space-y-4">
            <li>
              <strong>Planification</strong>
              <p>Structurez votre contenu à l'avance.</p>
            </li>
            <li>
              <strong>Cohérence</strong>
              <p>Maintenez un design uniforme.</p>
            </li>
            <li>
              <strong>Tests réguliers</strong>
              <p>Vérifiez sur différents appareils.</p>
            </li>
          </ul>
        </div>
      </div>
    </BlogLayout>
  );
}