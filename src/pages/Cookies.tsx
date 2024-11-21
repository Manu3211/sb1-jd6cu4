import React from 'react';

export default function Cookies() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Gestion des Cookies</h1>
      
      <div className="prose prose-indigo max-w-none">
        <h2>Qu'est-ce qu'un cookie ?</h2>
        <p>Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) lors de la visite d'un site web. Il permet au site de mémoriser des informations sur votre visite.</p>

        <h2>Les cookies que nous utilisons</h2>
        <h3>Cookies essentiels</h3>
        <p>Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés.</p>

        <h3>Cookies analytiques</h3>
        <p>Nous utilisons Google Analytics pour comprendre comment les visiteurs utilisent notre site.</p>

        <h3>Cookies de personnalisation</h3>
        <p>Ces cookies nous permettent de mémoriser vos préférences pour personnaliser votre expérience.</p>

        <h2>Gestion des cookies</h2>
        <p>Vous pouvez à tout moment modifier vos préférences en matière de cookies :</p>
        <ul>
          <li>Via le panneau de configuration des cookies de notre site</li>
          <li>En modifiant les paramètres de votre navigateur</li>
        </ul>

        <h2>Durée de conservation</h2>
        <p>Les cookies ont une durée de vie limitée :</p>
        <ul>
          <li>Cookies de session : supprimés à la fermeture du navigateur</li>
          <li>Cookies persistants : maximum 13 mois conformément aux recommandations de la CNIL</li>
        </ul>

        <h2>Plus d'informations</h2>
        <p>Pour en savoir plus sur les cookies et vos droits, vous pouvez consulter le site de la CNIL : www.cnil.fr</p>
      </div>
    </div>
  );
}