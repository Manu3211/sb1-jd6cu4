import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import { Link } from 'react-router-dom';

export default function ApprendreCoderSite() {
  return (
    <BlogLayout
      title="Apprendre à coder un site web : par où commencer en 2024 ?"
      description="Guide complet pour débuter dans le développement web : langages, ressources et conseils pour apprendre à coder votre site web étape par étape."
      previousPost={{
        url: "/conception-site-web/creer-site-sans-coder",
        title: "Créer un site sans coder"
      }}
      nextPost={{
        url: "/conception-site-web/idees-de-site-web",
        title: "Idées de sites web"
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Apprentissage du code web"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <div className="prose prose-indigo max-w-none">
        <h2>Débuter dans le développement web</h2>
        <p>
          Apprendre à coder un site web est une compétence précieuse. Si vous préférez une approche sans code, découvrez comment <Link to="/conception-site-web/creer-site-sans-coder" className="text-indigo-600 hover:text-indigo-800">créer un site sans programmer</Link>.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg my-8">
          <h3>Les bases essentielles</h3>
          <ul className="space-y-4">
            <li>
              <strong>HTML5</strong>
              <p>Structure et contenu des pages web.</p>
            </li>
            <li>
              <strong>CSS3</strong>
              <p>Style et mise en page.</p>
            </li>
            <li>
              <strong>JavaScript</strong>
              <p>Interactivité et dynamisme.</p>
            </li>
          </ul>
        </div>

        <h2>Parcours d'apprentissage recommandé</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-3">Phase 1 : Fondamentaux</h4>
            <ul className="list-disc pl-6">
              <li>Structure HTML</li>
              <li>Sélecteurs CSS</li>
              <li>Mise en page</li>
              <li>Responsive design</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-3">Phase 2 : Avancé</h4>
            <ul className="list-disc pl-6">
              <li>JavaScript ES6+</li>
              <li>Frameworks front-end</li>
              <li>Gestion d'API</li>
              <li>Bases de données</li>
            </ul>
          </div>
        </div>

        <h2>Ressources d'apprentissage</h2>
        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h3>Plateformes recommandées</h3>
          <ul className="space-y-4">
            <li>
              <strong>Cours en ligne</strong>
              <p>freeCodeCamp, Codecademy, OpenClassrooms.</p>
            </li>
            <li>
              <strong>Documentation</strong>
              <p>MDN Web Docs, W3Schools, DevDocs.</p>
            </li>
            <li>
              <strong>Tutoriels vidéo</strong>
              <p>YouTube, Udemy, Pluralsight.</p>
            </li>
          </ul>
        </div>

        <h2>Outils de développement</h2>
        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h3>Environnement de travail</h3>
          <ul className="space-y-4">
            <li>
              <strong>Éditeurs de code</strong>
              <p>VS Code, Sublime Text, WebStorm.</p>
            </li>
            <li>
              <strong>Outils de débogage</strong>
              <p>DevTools des navigateurs.</p>
            </li>
            <li>
              <strong>Contrôle de version</strong>
              <p>Git et GitHub.</p>
            </li>
          </ul>
        </div>

        <h2>Frameworks et bibliothèques</h2>
        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3>Technologies modernes</h3>
          <ul className="space-y-4">
            <li>
              <strong>Front-end</strong>
              <p>React, Vue.js, Angular.</p>
            </li>
            <li>
              <strong>Back-end</strong>
              <p>Node.js, Express, Django.</p>
            </li>
            <li>
              <strong>CSS</strong>
              <p>Tailwind CSS, Bootstrap, Sass.</p>
            </li>
          </ul>
        </div>

        <h2>Projets pratiques</h2>
        <p>
          Pour trouver l'inspiration, consultez nos <Link to="/conception-site-web/idees-de-site-web" className="text-indigo-600 hover:text-indigo-800">idées de sites web innovants</Link>.
        </p>

        <div className="bg-red-50 p-6 rounded-lg my-8">
          <h3>Exercices progressifs</h3>
          <ul className="space-y-4">
            <li>
              <strong>Niveau débutant</strong>
              <p>Portfolio personnel, landing page simple.</p>
            </li>
            <li>
              <strong>Niveau intermédiaire</strong>
              <p>Blog, application ToDo, site e-commerce basique.</p>
            </li>
            <li>
              <strong>Niveau avancé</strong>
              <p>Réseau social, application full-stack.</p>
            </li>
          </ul>
        </div>

        <h2>Bonnes pratiques</h2>
        <div className="bg-purple-50 p-6 rounded-lg my-8">
          <h3>Standards de développement</h3>
          <ul className="space-y-4">
            <li>
              <strong>Code propre</strong>
              <p>Conventions de nommage et organisation.</p>
            </li>
            <li>
              <strong>Performance</strong>
              <p>Optimisation et bonnes pratiques.</p>
            </li>
            <li>
              <strong>Sécurité</strong>
              <p>Protection contre les vulnérabilités courantes.</p>
            </li>
          </ul>
        </div>

        <h2>Évolution professionnelle</h2>
        <p>
          Pour une carrière dans le web, découvrez le <Link to="/conception-site-web/concepteur-de-sites-web" className="text-indigo-600 hover:text-indigo-800">rôle du concepteur web</Link>.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3>Perspectives de carrière</h3>
          <ul className="space-y-4">
            <li>
              <strong>Développeur front-end</strong>
              <p>Spécialisation interface utilisateur.</p>
            </li>
            <li>
              <strong>Développeur full-stack</strong>
              <p>Maîtrise front-end et back-end.</p>
            </li>
            <li>
              <strong>Architecte web</strong>
              <p>Conception de solutions complexes.</p>
            </li>
          </ul>
        </div>
      </div>
    </BlogLayout>
  );
}