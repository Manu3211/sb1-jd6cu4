import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import { Link } from 'react-router-dom';

export default function ConceptionSiteWebIndex() {
  return (
    <BlogLayout
      title="Conception de Sites Web : Guide Complet 2024"
      description="Guide complet sur la conception de sites web professionnels : méthodologies, outils et conseils d'experts pour réussir votre projet web en 2024."
    >
      <img
        src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Conception de sites web professionnels"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <section className="mb-12">
        <h2>La conception web moderne en 2024</h2>
        <p className="text-lg mb-6">
          La conception web a considérablement évolué ces dernières années, devenant un domaine complexe qui combine créativité, technologie et stratégie marketing. Pour réussir votre projet web, découvrez notre guide sur la <Link to="/conception-site-web/creation-site-internet-sur-mesure" className="text-indigo-600 hover:text-indigo-800">création de site internet sur mesure</Link> et comprenez le <Link to="/conception-site-web/concepteur-de-sites-web" className="text-indigo-600 hover:text-indigo-800">rôle essentiel du concepteur web</Link>.
        </p>

        <div className="bg-gray-50 p-8 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Les piliers de la conception web moderne</h3>
          <p className="mb-6">
            Une conception web réussie repose sur plusieurs éléments fondamentaux. Si vous débutez, découvrez comment <Link to="/conception-site-web/creer-site-sans-coder" className="text-indigo-600 hover:text-indigo-800">créer un site facilement sans coder</Link>, ou si vous souhaitez aller plus loin, apprenez à <Link to="/conception-site-web/apprendre-coder-site" className="text-indigo-600 hover:text-indigo-800">coder votre propre site web</Link>.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Design centré utilisateur
              <ul className="pl-4 mt-1">
                <li>Expérience utilisateur intuitive</li>
                <li>Navigation fluide et logique</li>
                <li>Accessibilité pour tous</li>
              </ul>
            </li>
            <li>Performance technique
              <ul className="pl-4 mt-1">
                <li>Temps de chargement optimisés</li>
                <li>Compatibilité multi-supports</li>
                <li>Sécurité renforcée</li>
              </ul>
            </li>
            <li>Stratégie de contenu
              <ul className="pl-4 mt-1">
                <li>Hiérarchie de l'information</li>
                <li>Contenu engageant et pertinent</li>
                <li>SEO intégré dès la conception</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-8 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Tendances et innovations</h3>
          <p className="mb-6">
            Explorez nos <Link to="/conception-site-web/idees-de-site-web" className="text-indigo-600 hover:text-indigo-800">10 idées de sites web innovants</Link> pour vous inspirer dans votre projet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Design moderne</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimalisme et clarté</li>
                <li>Micro-interactions</li>
                <li>Dark mode adaptatif</li>
                <li>Animations fluides</li>
                <li>Glassmorphisme</li>
                <li>Design immersif</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Technologies émergentes</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Progressive Web Apps</li>
                <li>JAMstack architecture</li>
                <li>WebAssembly</li>
                <li>API-first design</li>
                <li>Edge computing</li>
                <li>IA générative</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Méthodologies de conception</h3>
          <p className="mb-6">
            Les approches modernes de conception web privilégient l'agilité et l'itération continue. Pour une approche professionnelle, découvrez les avantages de la <Link to="/conception-site-web/creation-site-internet-sur-mesure" className="text-indigo-600 hover:text-indigo-800">création sur mesure</Link>.
          </p>
          <div className="space-y-4">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Design Thinking</h4>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Empathie utilisateur</li>
                <li>Prototypage rapide</li>
                <li>Tests itératifs</li>
                <li>Amélioration continue</li>
              </ul>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Approche Agile</h4>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Sprints courts</li>
                <li>Feedback continu</li>
                <li>Adaptabilité</li>
                <li>Livraisons régulières</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}