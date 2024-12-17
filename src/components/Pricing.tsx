import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Essentiel',
    price: '29',
    features: [
      'Site vitrine 1 à 3 pages',
      'Design moderne et personnalisé',
      'Hébergement premium inclus',
      'Nom de domaine offert',
      'Maintenance technique',
      'Certificat SSL inclus',
      'Sans engagement'
    ],
  },
  {
    name: 'Professionnel',
    price: '39',
    popular: true,
    features: [
      'Site vitrine 3 à 6 pages',
      'Design moderne et personnalisé',
      'Hébergement premium inclus',
      'Nom de domaine offert',
      'Maintenance hebdomadaire',
      'Optimisation SEO de base',
      'Certificat SSL inclus',
      'Sans engagement'
    ],
  },
  {
    name: 'Entreprise',
    price: '49',
    features: [
      'Site vitrine jusqu\'à 12 pages',
      'Design moderne et personnalisé',
      'Hébergement premium inclus',
      'Nom de domaine offert',
      'Maintenance hebdomadaire',
      'Optimisation SEO avancée',
      'Certificat SSL inclus',
      'Support prioritaire',
      'Sans engagement'
    ],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Tarifs</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Des forfaits adaptés à vos besoins
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Tous nos forfaits incluent la création gratuite de votre site (valeur 1000€), l'hébergement premium et la maintenance
          </p>
          <p className="mt-2 text-sm text-indigo-600 font-medium">
            Création sans frais initiaux • Devis et consultation gratuits • Sans engagement
          </p>
        </div>

        <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 bg-white border ${
                plan.popular ? 'border-indigo-600' : 'border-gray-200'
              } rounded-2xl shadow-sm flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                  <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white">
                    Populaire
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">€/mois</span>
                </p>
                <p className="mt-2 text-sm text-indigo-600">Création offerte (valeur 1000€)</p>
                <ul className="mt-6 space-y-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-5 h-5 text-indigo-500" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#callback-form"
                className={`mt-8 w-full py-3 px-4 rounded-md shadow ${
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                } font-medium text-center`}
              >
                Être rappelé gratuitement
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}