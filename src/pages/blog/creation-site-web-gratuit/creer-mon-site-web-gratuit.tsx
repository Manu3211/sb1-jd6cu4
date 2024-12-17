import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../../utils/navigation';

export default function CreerMonSiteGratuit() {
  const isHomePage = false;

  return (
    <BlogLayout
      title="Comment créer mon site web gratuit en 2024 : Guide complet"
      description="Guide étape par étape pour créer votre premier site web gratuitement. Découvrez les meilleures solutions et outils pour réussir votre projet."
      previousPost={{
        url: "/creation-site-web-gratuit/creer-heberger-site-web-gratuitement",
        title: "Créer et héberger un site gratuitement"
      }}
      nextPost={{
        url: "/creation-site-web-gratuit/creer-site-web-gratuit-google",
        title: "Créer un site avec Google"
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Création de site web gratuit"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <div className="prose prose-indigo max-w-none">
        <p>
          La création d'un site web gratuit est aujourd'hui à la portée de tous, grâce à l'évolution des technologies et à la multiplication des plateformes de création en ligne. Que vous soyez entrepreneur, artiste, ou passionné souhaitant partager votre expertise, il existe de nombreuses solutions pour créer votre présence en ligne sans investissement initial.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg my-8">
          <h2>1. Les plateformes de création de sites gratuits</h2>
          <p>
            Chaque plateforme possède ses spécificités et avantages. Pour une solution complète avec Google, découvrez notre guide sur <Link to="/creation-site-web-gratuit/creer-site-web-gratuit-google" className="text-indigo-600 hover:text-indigo-800">la création de site avec Google</Link>.
          </p>
          <ul className="space-y-4">
            <li>
              <strong>WordPress.com</strong>
              <p>Idéal pour les blogs et sites de contenu :
                <ul className="pl-4 mt-2">
                  <li>Interface intuitive</li>
                  <li>Nombreux thèmes gratuits</li>
                  <li>Extensions disponibles</li>
                  <li>Communauté active</li>
                </ul>
              </p>
            </li>
            <li>
              <strong>Wix</strong>
              <p>Parfait pour les sites vitrines :
                <ul className="pl-4 mt-2">
                  <li>Éditeur drag-and-drop</li>
                  <li>Templates modernes</li>
                  <li>Fonctionnalités e-commerce</li>
                  <li>Support multilingue</li>
                </ul>
              </p>
            </li>
            <li>
              <strong>Site123</strong>
              <p>Solution simple et rapide :
                <ul className="pl-4 mt-2">
                  <li>Création en 3 étapes</li>
                  <li>Assistant intelligent</li>
                  <li>Design responsive</li>
                  <li>SEO intégré</li>
                </ul>
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h2>2. Étapes essentielles pour créer votre site</h2>
          <p>
            Une approche méthodique est cruciale pour réussir votre projet web. Pour l'hébergement, consultez notre guide sur <Link to="/creation-site-web-gratuit/creer-heberger-site-web-gratuitement" className="text-indigo-600 hover:text-indigo-800">l'hébergement gratuit</Link>.
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Planification</strong>
              <p>Définissez clairement vos objectifs :
                <ul className="pl-4 mt-2">
                  <li>Public cible</li>
                  <li>Type de contenu</li>
                  <li>Fonctionnalités nécessaires</li>
                  <li>Structure du site</li>
                </ul>
              </p>
            </li>
            <li>
              <strong>Choix de la plateforme</strong>
              <p>Sélectionnez l'outil adapté à vos besoins :
                <ul className="pl-4 mt-2">
                  <li>Comparaison des fonctionnalités</li>
                  <li>Évaluation des limitations</li>
                  <li>Possibilités d'évolution</li>
                  <li>Support disponible</li>
                </ul>
              </p>
            </li>
            <li>
              <strong>Création du contenu</strong>
              <p>Préparez vos contenus à l'avance :
                <ul className="pl-4 mt-2">
                  <li>Textes optimisés</li>
                  <li>Images de qualité</li>
                  <li>Vidéos pertinentes</li>
                  <li>Documents utiles</li>
                </ul>
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h2>3. Optimisation et visibilité</h2>
          <p>
            Pour maximiser l'impact de votre site, consultez nos <Link to="/referencement-seo/techniques-avancees-seo" className="text-indigo-600 hover:text-indigo-800">techniques avancées de référencement</Link>.
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Référencement naturel</strong>
              <p>Optimisez votre visibilité :
                <ul className="pl-4 mt-2">
                  <li>Recherche de mots-clés</li>
                  <li>Structure optimisée</li>
                  <li>Contenu de qualité</li>
                  <li>Balises méta</li>
                </ul>
              </p>
            </li>
            <li>
              <strong>Performance</strong>
              <p>Assurez une expérience utilisateur optimale :
                <ul className="pl-4 mt-2">
                  <li>Temps de chargement</li>
                  <li>Optimisation mobile</li>
                  <li>Navigation fluide</li>
                  <li>Accessibilité</li>
                </ul>
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h2>4. Maintenance et évolution</h2>
          <ul className="space-y-4">
            <li>
              <strong>Mises à jour régulières</strong>
              <p>Gardez votre site à jour :
                <ul className="pl-4 mt-2">
                  <li>Contenu frais</li>
                  <li>Fonctionnalités actualisées</li>
                  <li>Sécurité renforcée</li>
                  <li>Performance optimisée</li>
                </ul>
              </p>
            </li>
            <li>
              <strong>Analyse et amélioration</strong>
              <p>Suivez les performances :
                <ul className="pl-4 mt-2">
                  <li>Statistiques de visite</li>
                  <li>Comportement utilisateur</li>
                  <li>Taux de conversion</li>
                  <li>Retours visiteurs</li>
                </ul>
              </p>
            </li>
          </ul>
        </div>

        <h2>Conclusion</h2>
        <p>
          Créer un site web gratuit est une excellente façon de démarrer votre présence en ligne. Avec les bons outils et une approche méthodique, vous pouvez créer un site professionnel sans investissement initial. N'oubliez pas que le succès d'un site web repose sur la qualité de son contenu et sa capacité à répondre aux besoins de ses visiteurs.
        </p>

        {/* Call-to-action section */}
        <div className="mt-12 bg-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">
            Besoin d'aide pour créer votre site web ?
          </h2>
          <p className="text-indigo-700 mb-6">
            Nos experts sont là pour vous accompagner dans la création de votre site web professionnel.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => scrollToSection('callback-form', isHomePage)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Phone className="w-5 h-5 mr-2" />
              Être rappelé gratuitement
            </button>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Retour à l'accueil
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}