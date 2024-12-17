import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Votre site web de rêve</span>
                <span className="block text-indigo-600">sans les complications</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Nous créons gratuitement votre site web professionnel pendant que vous vous concentrez sur votre activité. Profitez ensuite d'un hébergement premium avec maintenance complète à partir de 29€/mois.
              </p>
              <p className="mt-2 text-sm text-indigo-600 font-medium">
                Création offerte (valeur 1000€) • Sans engagement
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#callback-form" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    <Phone className="w-5 h-5 mr-2" />
                    Être Rappelé Gratuitement
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#pricing" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Voir les Forfaits
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 p-8">
        <div className="h-56 sm:h-72 md:h-96 lg:h-full w-full relative rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Équipe travaillant sur un site web"
          />
        </div>
      </div>
    </div>
  );
}