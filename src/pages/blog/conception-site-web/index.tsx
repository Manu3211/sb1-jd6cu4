import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import { Link } from 'react-router-dom';

export default function ConceptionSiteWebIndex() {
  return (
    <BlogLayout
      title="Création et Conception de Sites Web : TOUT SAVOIR [ A LIRE ]"
      description="Guide complet sur la création et conception de sites web professionnels : méthodologies, outils et conseils d'experts pour réussir votre projet web en 2024."
    >
      <img
        src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Conception de sites web professionnels"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <section className="mb-12">
        <h2>La conception de sites web en 2024</h2>
        <p className="text-lg mb-6">
          La conception d'un site web professionnel nécessite une approche méthodique et des compétences variées. Pour réussir votre projet, découvrez notre guide sur la <Link to="/conception-site-web/creation-site-internet-sur-mesure" className="text-indigo-600 hover:text-indigo-800">création de site internet sur mesure</Link> et comprenez le <Link to="/conception-site-web/concepteur-de-sites-web" className="text-indigo-600 hover:text-indigo-800">rôle essentiel du concepteur web</Link>.
        </p>

        <div className="bg-gray-50 p-8 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Les fondamentaux de la conception web</h3>
          <p className="mb-6">
            Une conception web réussie repose sur plusieurs piliers essentiels. Si vous débutez, découvrez comment <Link to="/conception-site-web/creer-site-sans-coder" className="text-indigo-600 hover:text-indigo-800">créer un site facilement sans coder</Link>, ou si vous souhaitez aller plus loin, apprenez à <Link to="/conception-site-web/apprendre-coder-site" className="text-indigo-600 hover:text-indigo-800">coder votre propre site web</Link>.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Design centré utilisateur</li>
            <li>Architecture de l'information</li>
            <li>Performance et optimisation</li>
            <li>Accessibilité et ergonomie</li>
            <li>Responsive design</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Tendances et innovations</h3>
          <p className="mb-6">
            Explorez nos <Link to="/conception-site-web/idees-de-site-web" className="text-indigo-600 hover:text-indigo-800">10 idées de sites web innovants</Link> pour vous inspirer dans votre projet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Design moderne</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimalisme et clarté</li>
                <li>Micro-interactions</li>
                <li>Dark mode adaptatif</li>
                <li>Animations fluides</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Technologies</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Progressive Web Apps</li>
                <li>JAMstack et Headless CMS</li>
                <li>WebAssembly</li>
                <li>API-first design</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Méthodologie de conception</h3>
          <p className="mb-6">
            Une approche structurée est essentielle pour réussir votre projet web.
          </p>
          <div className="space-y-4">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="font-semibold mb-2">1. Analyse et stratégie</h4>
              <p>Définition des objectifs et analyse des besoins.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="font-semibold mb-2">2. Design et prototypage</h4>
              <p>Création de maquettes et validation du concept.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="font-semibold mb-2">3. Développement</h4>
              <p>Intégration et programmation des fonctionnalités.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="font-semibold mb-2">4. Tests et optimisation</h4>
              <p>Validation qualité et performances.</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-8 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Bonnes pratiques et standards</h3>
          <p className="mb-6">
            Le respect des standards est crucial pour un site web professionnel.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Validation W3C</li>
            <li>Optimisation SEO</li>
            <li>Sécurité renforcée</li>
            <li>Performance optimale</li>
            <li>Compatibilité cross-browser</li>
          </ul>
        </div>
      </section>
    </BlogLayout>
  );
}