import React from 'react';
import { Phone, Clock, Settings, Shield, Palette, HeartHandshake } from 'lucide-react';

const features = [
  {
    name: 'Consultation Personnalisée',
    description: 'Échangez directement avec nos experts pour discuter de votre vision et de vos besoins.',
    icon: Phone,
  },
  {
    name: 'Réalisation Rapide',
    description: 'Obtenez votre site web professionnel en quelques jours seulement.',
    icon: Clock,
  },
  {
    name: 'Maintenance Incluse',
    description: 'Nous gérons toutes les mises à jour et la maintenance technique pour vous.',
    icon: Settings,
  },
  {
    name: 'Sécurisé & Fiable',
    description: 'Construit selon les dernières normes de sécurité et hébergé sur une infrastructure fiable.',
    icon: Shield,
  },
  {
    name: 'Design Sur Mesure',
    description: 'Des designs uniques adaptés à votre marque et à vos besoins.',
    icon: Palette,
  },
  {
    name: 'Support Continu',
    description: 'Une équipe support disponible 24/7 pour répondre à vos questions.',
    icon: HeartHandshake,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tout ce dont vous avez besoin pour votre présence en ligne
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Nous nous occupons de tous les aspects techniques pendant que vous vous concentrez sur l'essentiel - votre activité.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full hover:bg-gray-100 transition-colors duration-300">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}