import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../../utils/navigation';

export default function ApprendreHTML5CSS3() {
  const isHomePage = false;

  return (
    <BlogLayout
      title="Apprendre HTML5 et CSS3 pour créer des sites web en 2024"
      description="Guide complet pour maîtriser HTML5 et CSS3 : fondamentaux, bonnes pratiques et techniques avancées pour créer des sites web modernes et professionnels."
      previousPost={{
        url: "/outils-techniques-creation-site-web/creer-site-web-google",
        title: "Créer un site avec Google"
      }}
      nextPost={{
        url: "/outils-techniques-creation-site-web/logiciels-creer-site-web-professionnel",
        title: "Logiciels pour créer un site"
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Apprentissage HTML5 et CSS3"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <div className="prose prose-indigo max-w-none">
        <p>
          HTML5 et CSS3 constituent les fondations essentielles du développement web moderne. Ces technologies, en constante évolution, permettent de créer des sites web performants, accessibles et visuellement attractifs. Maîtriser ces langages est crucial pour tout développeur web souhaitant créer des expériences utilisateur de qualité.
        </p>

        <p className="mt-6">
          L'apprentissage de HTML5 et CSS3 ouvre la porte à une compréhension approfondie du web et permet de développer des compétences fondamentales qui resteront pertinentes tout au long de votre carrière dans le développement web.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg my-8">
          <h2>Les fondamentaux de HTML5 et CSS3</h2>
          <p>
            La maîtrise des bases est essentielle. Pour explorer d'autres approches, découvrez également comment <Link to="/outils-techniques-creation-site-web/creer-site-web-ia" className="text-indigo-600 hover:text-indigo-800">créer un site avec l'IA</Link>.
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Structure HTML5 moderne</strong>
              <p>Les éléments essentiels du HTML5 :
                <ul className="pl-4 mt-2">
                  <li>Balises sémantiques (header, nav, main, footer)</li>
                  <li>Formulaires avancés avec validation</li>
                  <li>Éléments multimédias natifs</li>
                  <li>Canvas et SVG pour les graphiques</li>
                  <li>APIs web modernes</li>
                  <li>Accessibilité intégrée</li>
                </ul>
              </p>
            </li>
            <li>
              <strong>Styles CSS3 avancés</strong>
              <p>Techniques de mise en page modernes :
                <ul className="pl-4 mt-2">
                  <li>Flexbox pour les layouts flexibles</li>
                  <li>Grid pour les mises en page complexes</li>
                  <li>Variables CSS personnalisées</li>
                  <li>Animations et transitions</li>
                  <li>Media queries responsives</li>
                  <li>Transformations 3D</li>
                </ul>
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h2>Optimisation et bonnes pratiques</h2>
          <p>
            L'optimisation est cruciale pour le succès de votre site. Pour plus d'informations, consultez notre guide sur <Link to="/referencement-seo/optimiser-contenu-seo" className="text-indigo-600 hover:text-indigo-800">l'optimisation SEO</Link>.
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Performance et optimisation</strong>
              <p>Techniques d'optimisation essentielles :
                <ul className="pl-4 mt-2">
                  <li>Minification des fichiers</li>
                  <li>Chargement différé des ressources</li>
                  <li>Optimisation des images</li>
                  <li>Compression des assets</li>
                  <li>Cache intelligent</li>
                  <li>Critical CSS path</li>
                </ul>
              </p>
            </li>
            <li>
              <strong>Méthodologies CSS</strong>
              <p>Organisation et maintenabilité du code :
                <ul className="pl-4 mt-2">
                  <li>BEM pour la nomenclature</li>
                  <li>SMACSS pour la structure</li>
                  <li>ITCSS pour la scalabilité</li>
                  <li>Atomic Design</li>
                  <li>CSS Modules</li>
                  <li>Utility-first CSS</li>
                </ul>
              </p>
            </li>
          </ul>
        </div>

        <h2>Ressources d'apprentissage</h2>
        <p>
          L'apprentissage de HTML5 et CSS3 nécessite des ressources de qualité et une pratique régulière. Les plateformes d'apprentissage en ligne, la documentation officielle et les tutoriels interactifs constituent d'excellents points de départ pour développer vos compétences.
        </p>

        <h2>Outils de développement</h2>
        <p>
          Les outils modernes facilitent grandement le développement web. Les éditeurs de code comme VS Code, les navigateurs avec leurs outils de développement intégrés, et les extensions spécialisées améliorent significativement la productivité et la qualité du code.
        </p>

        <h2>Projets pratiques</h2>
        <p>
          La pratique est essentielle pour maîtriser HTML5 et CSS3. Commencez par des projets simples comme des pages statiques, puis progressez vers des layouts plus complexes intégrant des fonctionnalités avancées comme les animations et les transformations CSS.
        </p>

        <h2>Conclusion</h2>
        <p>
          L'apprentissage de HTML5 et CSS3 est un investissement précieux pour toute personne souhaitant se lancer dans le développement web. Ces technologies fondamentales, combinées aux bonnes pratiques modernes, permettent de créer des sites web professionnels, performants et accessibles.
        </p>

        {/* Call-to-action section */}
        <div className="mt-12 bg-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">
            Besoin d'aide pour apprendre le développement web ?
          </h2>
          <p className="text-indigo-700 mb-6">
            Nos experts sont là pour vous accompagner dans votre apprentissage du développement web.
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