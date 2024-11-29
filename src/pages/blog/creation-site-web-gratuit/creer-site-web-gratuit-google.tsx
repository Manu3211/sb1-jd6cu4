import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import { Link } from 'react-router-dom';

export default function CreerSiteGratuitGoogle() {
  return (
    <BlogLayout
      title="Créer un site web gratuit avec Google en 2024"
      description="Guide complet pour créer votre site web gratuitement avec Google Sites : tutoriel étape par étape, astuces et meilleures pratiques."
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
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Création de site web avec Google Sites"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <div className="prose prose-indigo max-w-none">
        <h2>Google Sites : la solution simple et efficace</h2>
        <p>
          Google Sites offre une approche intuitive pour créer des sites web professionnels. Pour des fonctionnalités plus avancées, vous pouvez explorer <Link to="/creation-site-web-gratuit/logiciels-gratuits-creer-site-web" className="text-indigo-600 hover:text-indigo-800">d'autres logiciels gratuits</Link>.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg my-8">
          <h3>Avantages de Google Sites</h3>
          <ul className="space-y-4">
            <li>
              <strong>Intégration Google Workspace</strong>
              <p>Synchronisation parfaite avec l'écosystème Google :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Google Drive pour le stockage</li>
                <li>Google Docs pour les contenus</li>
                <li>Google Sheets pour les données</li>
                <li>Google Forms pour les formulaires</li>
                <li>Google Analytics pour les statistiques</li>
                <li>Google Calendar pour les événements</li>
              </ul>
            </li>
            <li>
              <strong>Interface intuitive</strong>
              <p>Création simple avec drag-and-drop :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Éditeur visuel WYSIWYG</li>
                <li>Pas de code requis</li>
                <li>Modifications en temps réel</li>
                <li>Prévisualisation instantanée</li>
              </ul>
            </li>
            <li>
              <strong>Collaboration en temps réel</strong>
              <p>Travail d'équipe facilité :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Édition collaborative</li>
                <li>Gestion des permissions</li>
                <li>Historique des versions</li>
                <li>Commentaires et suggestions</li>
              </ul>
            </li>
          </ul>
        </div>

        <h2>Création étape par étape</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-3">1. Configuration initiale</h4>
            <ul className="list-disc pl-6">
              <li>Connexion compte Google</li>
              <li>Accès à Google Sites</li>
              <li>Création nouveau site</li>
              <li>Choix du nom</li>
              <li>Sélection du thème</li>
              <li>Configuration de base</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-3">2. Personnalisation</h4>
            <ul className="list-disc pl-6">
              <li>Design et mise en page</li>
              <li>Structure de navigation</li>
              <li>En-tête et pied de page</li>
              <li>Couleurs et polices</li>
              <li>Images et logos</li>
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
              <p>Interface WYSIWYG intuitive avec :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Mise en page flexible</li>
                <li>Sections personnalisables</li>
                <li>Widgets intégrés</li>
                <li>Modèles de page</li>
                <li>Styles prédéfinis</li>
                <li>Responsive design automatique</li>
              </ul>
            </li>
            <li>
              <strong>Gestion des médias</strong>
              <p>Intégration facile de contenus multimédia :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Images optimisées</li>
                <li>Vidéos YouTube</li>
                <li>Documents Google</li>
                <li>Présentations</li>
                <li>Calendriers</li>
                <li>Cartes Google Maps</li>
              </ul>
            </li>
            <li>
              <strong>Responsive design</strong>
              <p>Adaptation automatique aux mobiles :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Layouts flexibles</li>
                <li>Images adaptatives</li>
                <li>Navigation mobile</li>
                <li>Performance optimisée</li>
              </ul>
            </li>
          </ul>
        </div>

        <h2>Optimisation et performance</h2>
        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h3>Bonnes pratiques</h3>
          <ul className="space-y-4">
            <li>
              <strong>SEO de base</strong>
              <p>Configuration des éléments SEO :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Titres de pages optimisés</li>
                <li>Méta-descriptions</li>
                <li>URLs personnalisées</li>
                <li>Structure de navigation</li>
                <li>Balises alt pour images</li>
                <li>Plan du site automatique</li>
              </ul>
            </li>
            <li>
              <strong>Vitesse de chargement</strong>
              <p>Optimisation des performances :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Compression des images</li>
                <li>Cache navigateur</li>
                <li>Chargement différé</li>
                <li>CDN Google</li>
              </ul>
            </li>
            <li>
              <strong>Analytics</strong>
              <p>Suivi des performances avec :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Google Analytics</li>
                <li>Rapports de trafic</li>
                <li>Comportement utilisateur</li>
                <li>Statistiques de pages</li>
              </ul>
            </li>
          </ul>
        </div>

        <h2>Intégrations avancées</h2>
        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3>Extensions et widgets</h3>
          <ul className="space-y-4">
            <li>
              <strong>Google Maps</strong>
              <p>Intégration de cartes interactives :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Localisation entreprise</li>
                <li>Itinéraires</li>
                <li>Points d'intérêt</li>
                <li>Personnalisation carte</li>
              </ul>
            </li>
            <li>
              <strong>Formulaires Google</strong>
              <p>Création de formulaires de contact :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Contact simple</li>
                <li>Enquêtes</li>
                <li>Inscriptions événements</li>
                <li>Collecte de données</li>
              </ul>
            </li>
            <li>
              <strong>Calendriers</strong>
              <p>Affichage d'événements et disponibilités :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Agenda public</li>
                <li>Réservations</li>
                <li>Horaires d'ouverture</li>
                <li>Planning équipe</li>
              </ul>
            </li>
          </ul>
        </div>

        <h2>Sécurité et partage</h2>
        <div className="bg-red-50 p-6 rounded-lg my-8">
          <h3>Gestion des accès</h3>
          <ul className="space-y-4">
            <li>
              <strong>Contrôle d'accès</strong>
              <p>Paramètres de visibilité et permissions :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Public ou privé</li>
                <li>Accès restreint</li>
                <li>Partage sélectif</li>
                <li>Rôles utilisateurs</li>
              </ul>
            </li>
            <li>
              <strong>Collaboration</strong>
              <p>Partage et édition collaborative :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Édition en temps réel</li>
                <li>Commentaires</li>
                <li>Suggestions</li>
                <li>Historique des modifications</li>
              </ul>
            </li>
            <li>
              <strong>Sécurité Google</strong>
              <p>Protection contre les menaces :</p>
              <ul className="list-disc pl-6 mt-2">
                <li>SSL automatique</li>
                <li>Protection DDoS</li>
                <li>Sauvegardes auto</li>
                <li>Authentification sécurisée</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </BlogLayout>
  );
}