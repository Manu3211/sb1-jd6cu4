import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../../utils/navigation';

export default function LogicielsGratuits() {
  const isHomePage = false;

  return (
    <BlogLayout
      title="Les meilleurs logiciels gratuits pour créer un site web en 2024"
      description="Découvrez notre sélection des meilleurs logiciels et outils gratuits pour créer votre site web professionnel sans dépenser un centime."
      previousPost={{
        url: "/creation-site-web-gratuit/creer-site-web-canva",
        title: "Créer un site avec Canva"
      }}
      nextPost={{
        url: "/creation-site-web-gratuit/creer-heberger-site-web-gratuitement",
        title: "Héberger un site gratuitement"
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Logiciels de création de sites web"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <div className="prose prose-indigo max-w-none">
        <p>
          La création d'un site web professionnel ne nécessite pas forcément un investissement financier important. De nombreux logiciels et outils gratuits permettent aujourd'hui de développer une présence en ligne de qualité. Ces solutions, de plus en plus sophistiquées, offrent des fonctionnalités avancées qui rivalisent souvent avec leurs alternatives payantes.
        </p>

        <p className="mt-6">
          Le choix du bon logiciel est crucial pour la réussite de votre projet web. Chaque outil possède ses particularités et ses points forts, il est donc important de bien comprendre vos besoins avant de faire votre sélection. Pour vous aider dans cette démarche, nous avons analysé et sélectionné les meilleures solutions gratuites disponibles en 2024.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg my-8">
          <h2>Les constructeurs de sites web gratuits</h2>
          <p>
            Les plateformes de création de sites web offrent une solution clé en main pour démarrer rapidement. Pour une approche différente, découvrez comment <Link to="/creation-site-web-gratuit/creer-site-web-canva" className="text-indigo-600 hover:text-indigo-800">créer un site avec Canva</Link>.
          </p>
          <ul className="space-y-4">
            <li>
              <strong>WordPress.com</strong>
              <p>La plateforme de blogging la plus populaire :
                <ul className="pl-4 mt-2">
                  <li>Interface intuitive et moderne</li>
                  <li>Large choix de thèmes gratuits</li>
                  <li>Plugins essentiels inclus</li>
                  <li>Hébergement gratuit</li>
                  <li>Support communautaire actif</li>
                  <li>Options de monétisation</li>
                </ul>
              </p>
            </li>
            <li>
              <strong>Wix</strong>
              <p>Solution complète pour sites vitrines :
                <ul className="pl-4 mt-2">
                  <li>Éditeur drag-and-drop avancé</li>
                  <li>Templates professionnels</li>
                  <li>Applications intégrées</li>
                  <li>Optimisation mobile automatique</li>
                  <li>Fonctionnalités e-commerce</li>
                  <li>SSL gratuit inclus</li>
                </ul>
              </p>
            </li>
            <li>
              <strong>Webflow</strong>
              <p>Pour les designs plus sophistiqués :
                <ul className="pl-4 mt-2">
                  <li>Contrôle créatif total</li>
                  <li>Animations avancées</li>
                  <li>Export de code propre</li>
                  <li>CMS intégré</li>
                  <li>Interactions complexes</li>
                  <li>Responsive design précis</li>
                </ul>
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h2>Outils de développement professionnels</h2>
          <p>
            Pour les utilisateurs plus techniques, ces outils permettent un contrôle total sur le développement. Pour approfondir, consultez notre guide sur <Link to="/outils-techniques-creation-site-web/apprendre-creer-site-web-html5-css3" className="text-indigo-600 hover:text-indigo-800">l'apprentissage de HTML5 et CSS3</Link>.
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Visual Studio Code</strong>
              <p>L'éditeur de code le plus populaire :
                <ul className="pl-4 mt-2">
                  <li>Support multi-langages</li>
                  <li>Extensions nombreuses</li>
                  <li>Débogage intégré</li>
                  <li>Terminal intégré</li>
                  <li>Git natif</li>
                  <li>Personnalisation poussée</li>
                </ul>
              </p>
            </li>
            <li>
              <strong>GitHub Pages</strong>
              <p>Hébergement gratuit pour sites statiques :
                <ul className="pl-4 mt-2">
                  <li>Intégration Git native</li>
                  <li>SSL automatique</li>
                  <li>Build automatisé</li>
                  <li>Bande passante illimitée</li>
                  <li>Support Jekyll</li>
                  <li>Custom domains</li>
                </ul>
              </p>
            </li>
            <li>
              <strong>Netlify</strong>
              <p>Plateforme de déploiement moderne :
                <ul className="pl-4 mt-2">
                  <li>Déploiement continu</li>
                  <li>SSL gratuit</li>
                  <li>CDN global</li>
                  <li>Formulaires intégrés</li>
                  <li>Fonctions serverless</li>
                  <li>Split testing</li>
                </ul>
              </p>
            </li>
          </ul>
        </div>

        <h2>Conclusion</h2>
        <p>
          Les logiciels gratuits de création web offrent aujourd'hui des possibilités étendues pour développer une présence en ligne professionnelle. Que vous soyez débutant ou développeur expérimenté, il existe une solution adaptée à vos besoins et à vos compétences. L'important est de choisir l'outil qui correspond le mieux à votre projet et à vos objectifs.
        </p>

        {/* Call-to-action section */}
        <div className="mt-12 bg-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">
            Besoin d'aide pour choisir le bon outil ?
          </h2>
          <p className="text-indigo-700 mb-6">
            Nos experts sont là pour vous guider dans le choix de la meilleure solution pour votre projet.
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