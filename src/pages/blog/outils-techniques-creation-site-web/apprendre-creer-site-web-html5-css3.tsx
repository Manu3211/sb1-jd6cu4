import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import { Link } from 'react-router-dom';

export default function ApprendreHTML5CSS3() {
  return (
    <BlogLayout
      title="Apprendre à créer un site web avec HTML5 et CSS3 en 2024"
      description="Guide complet pour maîtriser HTML5 et CSS3 : tutoriels, exercices pratiques et conseils d'experts pour créer des sites web modernes."
      previousPost={{
        url: "/outils-techniques-creation-site-web/creer-site-web-google",
        title: "Créer un site avec Google Sites"
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
        <h2>Les fondamentaux de HTML5 et CSS3</h2>
        <p>
          Maîtriser HTML5 et CSS3 est essentiel pour créer des sites web professionnels. Pour des solutions plus rapides, vous pouvez explorer comment <Link to="/outils-techniques-creation-site-web/creer-site-web-ia" className="text-indigo-600 hover:text-indigo-800">utiliser l'IA pour créer votre site</Link>.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg my-8">
          <h3>Structure HTML5 moderne</h3>
          <ul className="space-y-4">
            <li>
              <strong>Balises sémantiques</strong>
              <p>header, nav, main, article, section, footer...</p>
            </li>
            <li>
              <strong>Formulaires avancés</strong>
              <p>Nouveaux types d'input et validations.</p>
            </li>
            <li>
              <strong>Multimédia natif</strong>
              <p>Audio, vidéo et canvas.</p>
            </li>
          </ul>
        </div>

        <h2>CSS3 et le design moderne</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-3">Mise en page</h4>
            <ul className="list-disc pl-6">
              <li>Flexbox</li>
              <li>Grid Layout</li>
              <li>Media Queries</li>
              <li>Box Model</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-3">Styles avancés</h4>
            <ul className="list-disc pl-6">
              <li>Animations</li>
              <li>Transitions</li>
              <li>Transformations</li>
              <li>Variables CSS</li>
            </ul>
          </div>
        </div>

        <h2>Responsive Design</h2>
        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h3>Principes fondamentaux</h3>
          <ul className="space-y-4">
            <li>
              <strong>Mobile First</strong>
              <p>Conception prioritaire pour mobile.</p>
            </li>
            <li>
              <strong>Points de rupture</strong>
              <p>Adaptation aux différentes tailles d'écran.</p>
            </li>
            <li>
              <strong>Images responsives</strong>
              <p>Optimisation des médias pour tous les appareils.</p>
            </li>
          </ul>
        </div>

        <h2>Performance et optimisation</h2>
        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h3>Bonnes pratiques</h3>
          <ul className="space-y-4">
            <li>
              <strong>Chargement optimisé</strong>
              <p>Minification et compression des ressources.</p>
            </li>
            <li>
              <strong>CSS efficace</strong>
              <p>Organisation et optimisation du code.</p>
            </li>
            <li>
              <strong>Compatibilité navigateurs</strong>
              <p>Préfixes et fallbacks.</p>
            </li>
          </ul>
        </div>

        <h2>Outils et environnement de développement</h2>
        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3>Essentiels du développeur</h3>
          <ul className="space-y-4">
            <li>
              <strong>Éditeurs de code</strong>
              <p>VS Code, Sublime Text, Atom.</p>
            </li>
            <li>
              <strong>Outils de développement</strong>
              <p>DevTools des navigateurs.</p>
            </li>
            <li>
              <strong>Préprocesseurs CSS</strong>
              <p>Sass, Less, PostCSS.</p>
            </li>
          </ul>
        </div>

        <h2>Frameworks et bibliothèques</h2>
        <div className="bg-red-50 p-6 rounded-lg my-8">
          <h3>Solutions populaires</h3>
          <ul className="space-y-4">
            <li>
              <strong>Frameworks CSS</strong>
              <p>Bootstrap, Tailwind CSS, Foundation.</p>
            </li>
            <li>
              <strong>Bibliothèques d'animations</strong>
              <p>Animate.css, GSAP, Motion One.</p>
            </li>
            <li>
              <strong>Utilitaires</strong>
              <p>Normalize.css, Reset CSS.</p>
            </li>
          </ul>
        </div>

        <h2>Projets pratiques</h2>
        <div className="bg-purple-50 p-6 rounded-lg my-8">
          <h3>Exercices d'apprentissage</h3>
          <ul className="space-y-4">
            <li>
              <strong>Landing pages</strong>
              <p>Création de pages d'atterrissage responsives.</p>
            </li>
            <li>
              <strong>Portfolios</strong>
              <p>Mise en page de projets personnels.</p>
            </li>
            <li>
              <strong>Composants UI</strong>
              <p>Développement d'éléments d'interface réutilisables.</p>
            </li>
          </ul>
        </div>

        <h2>Ressources d'apprentissage</h2>
        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3>Pour progresser</h3>
          <ul className="space-y-4">
            <li>
              <strong>Documentation officielle</strong>
              <p>MDN Web Docs, W3Schools.</p>
            </li>
            <li>
              <strong>Cours en ligne</strong>
              <p>freeCodeCamp, Codecademy, OpenClassrooms.</p>
            </li>
            <li>
              <strong>Communautés</strong>
              <p>Stack Overflow, GitHub, Dev.to.</p>
            </li>
          </ul>
        </div>
      </div>
    </BlogLayout>
  );
}