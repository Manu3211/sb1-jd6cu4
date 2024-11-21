import React from 'react';

export default function PolitiqueConfidentialite() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Politique de Confidentialité</h1>
      
      <div className="prose prose-indigo max-w-none">
        <h2>Collecte des données personnelles</h2>
        <p>Nous collectons les informations que vous nous fournissez lors de l'utilisation de nos services, notamment :</p>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>Informations relatives à votre entreprise</li>
        </ul>

        <h2>Utilisation des données</h2>
        <p>Vos données sont utilisées pour :</p>
        <ul>
          <li>Vous contacter concernant nos services</li>
          <li>Personnaliser votre expérience</li>
          <li>Améliorer nos services</li>
          <li>Respecter nos obligations légales</li>
        </ul>

        <h2>Protection des données</h2>
        <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisée.</p>

        <h2>Durée de conservation</h2>
        <p>Nous conservons vos données personnelles aussi longtemps que nécessaire pour les finalités pour lesquelles elles ont été collectées, dans le respect des obligations légales.</p>

        <h2>Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li>Droit d'accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit à l'effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité des données</li>
          <li>Droit d'opposition</li>
        </ul>

        <h2>Contact</h2>
        <p>Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, contactez notre délégué à la protection des données : dpo@easyweb.fr</p>
      </div>
    </div>
  );
}