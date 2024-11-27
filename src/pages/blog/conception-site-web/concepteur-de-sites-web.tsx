import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import { Link } from 'react-router-dom';

export default function ConcepteurSitesWeb() {
  return (
    <BlogLayout
      title="Le rôle du concepteur de sites web en 2024"
      description="Découvrez le métier de concepteur web : compétences requises, missions quotidiennes et évolution de carrière dans la création de sites web professionnels."
      previousPost={{
        url: "/conception-site-web/creation-site-internet-sur-mesure",
        title: "Création de site sur mesure"
      }}
      nextPost={{
        url: "/conception-site-web/creer-site-sans-coder",
        title: "Créer un site sans coder"
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Concepteur web au travail"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <div className="prose prose-indigo max-w-none">
        <h2>Le métier de concepteur web aujourd'hui</h2>
        <p>
          Le concepteur web est un professionnel polyvalent qui joue un rôle crucial dans la création de sites web. Pour mieux comprendre le processus, découvrez notre guide sur la <Link to="/conception-site-web/creation-site-internet-sur-mesure" className="text-indigo-600 hover:text-indigo-800">création de sites sur mesure</Link>.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg my-8">
          <h3>Compétences essentielles</h3>
          <ul className="space-y-4">
            <li>
              <strong>Design et créativité</strong>
              <p>Maîtrise des principes de design et des tendances actuelles.</p>
            </li>
            <li>
              <strong>Compétences techniques</strong>
              <p>Pour ceux qui souhaitent approfondir, voici comment <Link to="/conception-site-web/apprendre-coder-site" className="text-indigo-600 hover:text-indigo-800">apprendre à coder un site web</Link>.</p>
            </li>
            <li>
              <strong>Gestion de projet</strong>
              <p>Coordination et suivi des différentes phases de création.</p>
            </li>
          </ul>
        </div>

        <h2>Missions et responsabilités</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-3">Phase de conception</h4>
            <ul className="list-disc pl-6">
              <li>Analyse des besoins clients</li>
              <li>Création de wireframes</li>
              <li>Design d'interfaces</li>
              <li>Prototypage</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-3">Phase technique</h4>
            <ul className="list-disc pl-6">
              <li>Intégration web</li>
              <li>Optimisation SEO</li>
              <li>Tests et débogage</li>
              <li>Maintenance</li>
            </ul>
          </div>
        </div>

        <h2>Outils et technologies</h2>
        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h3>Stack technique moderne</h3>
          <ul className="space-y-4">
            <li>
              <strong>Design</strong>
              <p>Figma, Adobe XD, Sketch, Photoshop</p>
            </li>
            <li>
              <strong>Développement</strong>
              <p>HTML5, CSS3, JavaScript, frameworks modernes</p>
            </li>
            <li>
              <strong>Gestion de projet</strong>
              <p>Jira, Trello, GitHub, GitLab</p>
            </li>
          </ul>
        </div>

        <h2>Collaboration et communication</h2>
        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h3>Travail d'équipe</h3>
          <ul className="space-y-4">
            <li>
              <strong>Avec les clients</strong>
              <p>Compréhension des besoins et présentation des solutions.</p>
            </li>
            <li>
              <strong>Avec les développeurs</strong>
              <p>Transmission des spécifications techniques.</p>
            </li>
            <li>
              <strong>Avec les graphistes</strong>
              <p>Coordination sur l'identité visuelle.</p>
            </li>
          </ul>
        </div>

        <h2>Évolution et spécialisation</h2>
        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3>Parcours professionnel</h3>
          <ul className="space-y-4">
            <li>
              <strong>Direction artistique</strong>
              <p>Supervision des aspects créatifs des projets.</p>
            </li>
            <li>
              <strong>Lead développeur</strong>
              <p>Gestion d'équipe et architecture technique.</p>
            </li>
            <li>
              <strong>Product Owner</strong>
              <p>Gestion stratégique des produits digitaux.</p>
            </li>
          </ul>
        </div>

        <h2>Tendances et innovations</h2>
        <p>
          Pour rester inspiré, découvrez nos <Link to="/conception-site-web/idees-de-site-web" className="text-indigo-600 hover:text-indigo-800">idées de sites web innovants</Link>.
        </p>

        <div className="bg-red-50 p-6 rounded-lg my-8">
          <h3>Veille technologique</h3>
          <ul className="space-y-4">
            <li>
              <strong>Design Systems</strong>
              <p>Création de systèmes de design cohérents et réutilisables.</p>
            </li>
            <li>
              <strong>Accessibilité</strong>
              <p>Conception inclusive et normes WCAG.</p>
            </li>
            <li>
              <strong>Performance</strong>
              <p>Optimisation et Core Web Vitals.</p>
            </li>
          </ul>
        </div>

        <h2>Formation et certification</h2>
        <div className="bg-purple-50 p-6 rounded-lg my-8">
          <h3>Parcours d'apprentissage</h3>
          <ul className="space-y-4">
            <li>
              <strong>Formation initiale</strong>
              <p>Diplômes et certifications recommandés.</p>
            </li>
            <li>
              <strong>Formation continue</strong>
              <p>Veille et mise à jour des compétences.</p>
            </li>
            <li>
              <strong>Certifications professionnelles</strong>
              <p>Validations des expertises spécifiques.</p>
            </li>
          </ul>
        </div>

        <h2>Alternatives et solutions</h2>
        <p>
          Pour les projets plus simples, découvrez comment <Link to="/conception-site-web/creer-site-sans-coder" className="text-indigo-600 hover:text-indigo-800">créer un site sans coder</Link>.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3>Options de création web</h3>
          <ul className="space-y-4">
            <li>
              <strong>CMS et site builders</strong>
              <p>Solutions rapides pour projets simples.</p>
            </li>
            <li>
              <strong>Freelance vs agence</strong>
              <p>Choix du mode de collaboration.</p>
            </li>
            <li>
              <strong>Solutions hybrides</strong>
              <p>Combinaison d'approches selon les besoins.</p>
            </li>
          </ul>
        </div>
      </div>
    </BlogLayout>
  );
}