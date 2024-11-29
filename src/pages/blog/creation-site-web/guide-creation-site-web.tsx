import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';

export default function GuideCreationSiteWeb() {
  return (
    <BlogLayout
      title="Guide étape par étape pour créer un site web en 2024"
      description="Un guide détaillé pour vous accompagner dans chaque étape de la création de votre site web professionnel."
      previousPost={{
        url: "/creation-site-web/outils-creation-site-web",
        title: "Les meilleurs outils pour la création"
      }}
      nextPost={{
        url: "/creation-site-web/erreurs-a-eviter-creation-site-web",
        title: "Les erreurs à éviter"
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Planification d'un site web"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Phase 1 : Préparation et planification</h2>
        <div className="bg-gradient-to-r from-indigo-50 to-white p-8 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">1.1 Définition des objectifs</h3>
          <p className="mb-6">
            La première étape cruciale consiste à définir clairement les objectifs de votre site web. Cette réflexion approfondie guidera toutes les décisions ultérieures, de la structure à la conception. Prenez le temps de répondre à ces questions fondamentales : Quel est le but principal de votre site ? Qui est votre public cible ? Quelles actions souhaitez-vous que vos visiteurs effectuent ?
          </p>
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Réunion de planification"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4">1.2 Analyse de la concurrence</h3>
          <p className="mb-6">
            L'analyse de vos concurrents vous permet d'identifier les meilleures pratiques du secteur et de vous démarquer. Étudiez attentivement leurs sites web : quels sont leurs points forts et leurs faiblesses ? Comment structurent-ils leur contenu ? Quelles fonctionnalités proposent-ils ?
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Points clés à analyser :</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Design et expérience utilisateur</li>
              <li>Structure de navigation</li>
              <li>Types de contenus proposés</li>
              <li>Fonctionnalités spécifiques</li>
              <li>Stratégie de conversion</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Phase 2 : Conception et structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <img
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Wireframing"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-3">2.1 Création des wireframes</h3>
            <p>
              Les wireframes sont des schémas simplifiés de vos pages web. Ils permettent de visualiser la structure et l'organisation du contenu avant de passer au design détaillé.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <img
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Architecture de l'information"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-3">2.2 Architecture de l'information</h3>
            <p>
              Organisez votre contenu de manière logique et intuitive. Une bonne architecture facilite la navigation et améliore l'expérience utilisateur.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Phase 3 : Développement et intégration</h2>
        <div className="bg-indigo-50 p-8 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">3.1 Choix des technologies</h3>
          <p className="mb-6">
            Le choix des technologies dépend de vos besoins spécifiques. Que ce soit un CMS comme WordPress, un framework moderne comme React, ou une solution sur mesure, chaque option a ses avantages.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg text-center">
              <h4 className="font-semibold mb-2">CMS</h4>
              <p className="text-sm">Rapide à déployer</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Frameworks</h4>
              <p className="text-sm">Performance optimale</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h4 className="font-semibold mb-2">Sur mesure</h4>
              <p className="text-sm">Entièrement personnalisé</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Phase 4 : Tests et optimisation</h2>
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">4.1 Tests utilisateurs</h3>
          <p className="mb-6">
            Les tests utilisateurs sont essentiels pour valider l'ergonomie et l'expérience utilisateur de votre site. Ils permettent d'identifier et de corriger les problèmes avant le lancement.
          </p>
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Checklist des tests :</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Compatibilité navigateurs</li>
              <li>Responsive design</li>
              <li>Vitesse de chargement</li>
              <li>Formulaires et fonctionnalités</li>
              <li>Accessibilité</li>
            </ul>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}