import React from 'react';

export default function MentionsLegales() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Mentions Légales</h1>
      
      <div className="prose prose-indigo max-w-none">
        <h2>Éditeur du site</h2>
        <p>
          EasyWeb<br />
          SARL au capital de 10 000€<br />
          RCS Paris B 123 456 789<br />
          SIRET 123 456 789 00001<br />
          TVA FR12 345678901<br />
          Siège social : 1 rue de la Paix, 75001 Paris
        </p>

        <h2>Directeur de la publication</h2>
        <p>M. Jean Dupont, Gérant</p>

        <h2>Hébergeur</h2>
        <p>
          OVH SAS<br />
          2 rue Kellermann<br />
          59100 Roubaix<br />
          France
        </p>

        <h2>Contact</h2>
        <p>
          Téléphone : 01 23 45 67 89<br />
          Email : contact@easyweb.fr
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>

        <h2>Données personnelles</h2>
        <p>Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de modification et de suppression des données vous concernant. Pour exercer ce droit, contactez-nous par email.</p>

        <h2>Cookies</h2>
        <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur. Pour en savoir plus, consultez notre politique de gestion des cookies.</p>
      </div>
    </div>
  );
}