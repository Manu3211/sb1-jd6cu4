import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../../utils/navigation';

export default function CreerSiteGratuitGoogle() {
  const isHomePage = false;

  return (
    <BlogLayout
      title="Créer un site web gratuit avec Google en 2024"
      description="Découvrez comment créer gratuitement votre site web avec les outils Google : guide complet pour lancer votre présence en ligne sans budget."
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
        alt="Création de site web gratuit avec Google"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <div className="prose prose-indigo max-w-none">
        <p>
          À l'heure où la présence en ligne est devenue indispensable, Google met à disposition une suite d'outils gratuits permettant à chacun de créer son site web sans investissement initial. Que vous soyez entrepreneur, artiste, ou passionné souhaitant partager votre expertise, les solutions Google vous permettent de concrétiser votre projet web sans connaissances techniques particulières.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg my-8">
          <h2>1. Les avantages des outils Google pour votre site web</h2>
          <ul className="space-y-4">
            <li>
              <strong>Interface intuitive</strong>
              <p>Les outils Google se distinguent par leur facilité d'utilisation, permettant une prise en main immédiate même pour les débutants.</p>
            </li>
            <li>
              <strong>Écosystème complet</strong>
              <p>Bénéficiez d'une intégration parfaite avec l'ensemble des services Google (Analytics, Maps, Calendar, etc.).</p>
            </li>
            <li>
              <strong>Solution économique</strong>
              <p>Lancez votre projet web sans aucun frais initial grâce aux versions gratuites des outils Google.</p>
            </li>
            <li>
              <strong>Infrastructure robuste</strong>
              <p>Profitez de la fiabilité et de la sécurité des serveurs Google pour héberger votre site.</p>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h2>2. Google Sites : votre allié pour un site web gratuit</h2>
          <h3>Présentation de Google Sites</h3>
          <p>Google Sites représente la solution idéale pour créer rapidement un site web professionnel sans code. Cette plateforme s'adapte parfaitement aux sites vitrines, portfolios et projets éducatifs.</p>

          <h3>Guide de création pas à pas</h3>
          <ul className="space-y-4">
            <li>
              <strong>Première étape : Connexion</strong>
              <ul className="pl-4 mt-2">
                <li>Accédez à Google Sites via votre navigateur</li>
                <li>Utilisez votre compte Google ou créez-en un gratuitement</li>
              </ul>
            </li>
            <li>
              <strong>Deuxième étape : Création</strong>
              <p>Sélectionnez "Nouveau site" ou choisissez parmi les modèles proposés pour démarrer rapidement.</p>
            </li>
            <li>
              <strong>Troisième étape : Personnalisation</strong>
              <ul className="pl-4 mt-2">
                <li>Personnalisez l'en-tête et le titre principal</li>
                <li>Ajoutez vos contenus (textes, images, vidéos) facilement</li>
                <li>Créez de nouvelles pages selon vos besoins</li>
                <li>Appliquez un thème visuel cohérent</li>
              </ul>
            </li>
            <li>
              <strong>Quatrième étape : Configuration</strong>
              <ul className="pl-4 mt-2">
                <li>Définissez votre menu de navigation</li>
                <li>Configurez les paramètres généraux du site</li>
              </ul>
            </li>
            <li>
              <strong>Cinquième étape : Mise en ligne</strong>
              <ul className="pl-4 mt-2">
                <li>Testez l'affichage sur différents appareils</li>
                <li>Publiez votre site et partagez son adresse</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h2>3. Personnalisation de votre domaine</h2>
          <p>Pour une image plus professionnelle, envisagez d'utiliser un nom de domaine personnalisé.</p>

          <h3>Options de domaine Google</h3>
          <ul className="space-y-2">
            <li>Explorez les options sur Google Domains</li>
            <li>Sélectionnez et réservez votre nom de domaine</li>
            <li>Suivez le processus de configuration avec Google Sites</li>
          </ul>

          <h3>Utilisation d'un domaine existant</h3>
          <p>Vous pouvez également utiliser un domaine que vous possédez déjà en configurant les paramètres DNS appropriés.</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h2>4. Optimisation pour le référencement</h2>
          <p>Découvrez nos conseils pour améliorer votre visibilité dans les résultats de recherche. Pour plus de détails, consultez notre <Link to="/referencement-seo/optimiser-contenu-seo" className="text-indigo-600 hover:text-indigo-800">guide d'optimisation SEO</Link>.</p>
          <ul className="space-y-4">
            <li>
              <strong>Contenu optimisé</strong>
              <p>Créez du contenu unique et pertinent qui répond aux attentes de vos visiteurs.</p>
            </li>
            <li>
              <strong>Stratégie de mots-clés</strong>
              <p>Intégrez naturellement vos mots-clés cibles dans vos contenus.</p>
            </li>
            <li>
              <strong>Structure optimale</strong>
              <p>Organisez votre contenu de manière claire avec des titres descriptifs.</p>
            </li>
            <li>
              <strong>Stratégie de liens</strong>
              <p>Développez un réseau de liens pertinents au sein de votre site.</p>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg my-8">
          <h2>5. Suivi des performances avec Analytics</h2>
          <ul className="space-y-4">
            <li>
              <strong>Installation d'Analytics</strong>
              <p>Mettez en place Google Analytics pour suivre votre audience.</p>
            </li>
            <li>
              <strong>Configuration du suivi</strong>
              <p>Intégrez le code de suivi dans les paramètres de votre site Google Sites.</p>
            </li>
          </ul>
        </div>

        <div className="bg-red-50 p-6 rounded-lg my-8">
          <h2>6. Création d'un blog avec Blogger</h2>
          <p>Pour un projet de blog, Blogger offre une alternative gratuite et puissante.</p>

          <h3>Points forts de Blogger</h3>
          <ul className="space-y-2">
            <li>Simplicité : Interface conviviale pour la publication de contenu</li>
            <li>Personnalisation : Large choix de thèmes et d'options de design</li>
            <li>Revenus : Possibilités de monétisation via AdSense</li>
          </ul>

          <h3>Démarrer avec Blogger</h3>
          <ul className="space-y-2">
            <li>Connectez-vous à Blogger avec votre compte Google</li>
            <li>Initiez la création de votre blog</li>
            <li>Définissez le nom et l'URL de votre blog</li>
            <li>Personnalisez l'apparence et commencez à publier</li>
          </ul>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg my-8">
          <h2>7. Recommandations pour réussir</h2>
          <ul className="space-y-4">
            <li>
              <strong>Design professionnel</strong>
              <p>Privilégiez un design épuré et moderne qui inspire confiance.</p>
            </li>
            <li>
              <strong>Mise à jour régulière</strong>
              <p>Gardez votre contenu frais et pertinent pour fidéliser vos visiteurs.</p>
            </li>
            <li>
              <strong>Engagement utilisateur</strong>
              <p>Facilitez l'interaction avec vos visiteurs via des formulaires et commentaires.</p>
            </li>
            <li>
              <strong>Adaptation mobile</strong>
              <p>Vérifiez que votre site s'affiche parfaitement sur tous les appareils.</p>
            </li>
          </ul>
        </div>

        <h2>Conclusion</h2>
        <p>
          Les outils gratuits de Google représentent une excellente opportunité pour créer votre présence en ligne sans investissement initial. Que vous soyez novice ou utilisateur expérimenté, ces solutions vous permettent de développer un site web professionnel et efficace. En suivant ce guide et en appliquant les bonnes pratiques recommandées, vous disposez de tous les éléments pour réussir votre projet web.
        </p>

        {/* Call-to-action section */}
        <div className="mt-12 bg-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">
            Besoin d'accompagnement pour votre projet web ?
          </h2>
          <p className="text-indigo-700 mb-6">
            Nos experts sont à votre disposition pour vous guider dans la création de votre site web professionnel.
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