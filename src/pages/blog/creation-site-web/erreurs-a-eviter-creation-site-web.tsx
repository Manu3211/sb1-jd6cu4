import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';

export default function ErreursCreationSiteWeb() {
  return (
    <BlogLayout
      title="Les erreurs à éviter lors de la création d'un site web en 2024"
      description="Découvrez les erreurs les plus courantes à éviter pour garantir le succès de votre site web professionnel."
      previousPost={{
        url: "/creation-site-web/guide-creation-site-web",
        title: "Guide étape par étape"
      }}
      nextPost={{
        url: "/creation-site-web/professionnel-creation-site-web",
        title: "Pourquoi choisir un professionnel"
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Erreurs à éviter en création web"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">1. Négliger la planification stratégique</h2>
        <div className="bg-red-50 p-8 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">L'erreur fondamentale</h3>
          <p className="mb-6">
            L'une des erreurs les plus critiques est de se lancer dans la création d'un site web sans stratégie claire. Cette précipitation peut conduire à des choix inadaptés et des coûts supplémentaires.
          </p>
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Conséquences :</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Structure incohérente</li>
              <li>Objectifs mal définis</li>
              <li>Budget mal évalué</li>
              <li>Délais non respectés</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">2. Un design non professionnel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Design professionnel vs amateur"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-3">Design amateur</h3>
            <p>
              Un design amateur peut sérieusement nuire à votre crédibilité professionnelle et faire fuir les visiteurs.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Design professionnel"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-3">Design professionnel</h3>
            <p>
              Un design professionnel inspire confiance et améliore significativement les taux de conversion.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">3. Ignorer l'optimisation mobile</h2>
        <div className="bg-orange-50 p-8 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Une erreur coûteuse</h3>
          <p className="mb-6">
            Avec plus de 60% du trafic web provenant des mobiles, négliger l'optimisation mobile est une erreur majeure qui peut coûter cher en termes de visibilité et de conversions.
          </p>
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Optimisation mobile"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Points critiques :</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responsive design non optimisé</li>
              <li>Temps de chargement trop long sur mobile</li>
              <li>Boutons et liens trop petits</li>
              <li>Texte illisible sur petit écran</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">4. Négliger le SEO dès le début</h2>
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Impact sur la visibilité</h3>
          <p className="mb-6">
            Le référencement naturel doit être pensé dès la conception du site. L'ignorer peut compromettre sérieusement votre visibilité en ligne.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Erreurs techniques</h4>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Structure URL non optimisée</li>
                <li>Balises meta manquantes</li>
                <li>Contenu en double</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Erreurs de contenu</h4>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Textes non optimisés</li>
                <li>Images sans alt text</li>
                <li>Hiérarchie H1-H6 incorrecte</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">5. Sous-estimer la sécurité</h2>
        <div className="bg-red-50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Une menace sérieuse</h3>
          <p className="mb-6">
            La sécurité web n'est pas une option. Négliger cet aspect peut avoir des conséquences désastreuses pour votre entreprise et vos clients.
          </p>
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Points de vigilance :</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Absence de certificat SSL</li>
              <li>Mots de passe faibles</li>
              <li>Mises à jour non effectuées</li>
              <li>Sauvegardes inexistantes</li>
              <li>Protection contre les attaques DDoS</li>
            </ul>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}