import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

const projects = [
  {
    title: 'Le Bistrot Parisien',
    category: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    mockup: {
      header: 'Le Bistrot Parisien',
      hero: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      description: 'Une cuisine authentique au cœur de Paris',
      features: ['Menu du jour', 'Réservations', 'Événements privés'],
    },
    description: 'Site vitrine élégant pour un restaurant gastronomique avec système de réservation en ligne.',
  },
  {
    title: 'Studio Zen',
    category: 'Bien-être',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    mockup: {
      header: 'Studio Zen',
      hero: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      description: 'Retrouvez votre équilibre intérieur',
      features: ['Cours de yoga', 'Méditation', 'Bien-être'],
    },
    description: 'Site moderne pour un studio de yoga avec planning des cours et réservations.',
  },
  {
    title: 'Maison de l\'Architecture',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    mockup: {
      header: 'Maison de l\'Architecture',
      hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      description: 'Créons l\'habitat de demain',
      features: ['Projets', 'Services', 'Contact'],
    },
    description: 'Portfolio architectural mettant en valeur les projets avec galeries photo immersives.',
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="portfolio" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Dernières Réalisations
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Découvrez quelques-uns des sites web que nous avons créés pour nos clients
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-indigo-600">{project.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-3 text-base text-gray-500">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal avec maquette de site */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4 z-10">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Maquette de site */}
              <div className="bg-white h-[800px] overflow-y-auto">
                {/* Navigation */}
                <nav className="bg-white shadow-sm sticky top-0 z-10">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                      <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-xl font-bold text-gray-900">{selectedProject.mockup.header}</h1>
                      </div>
                      <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        {selectedProject.mockup.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </nav>

                {/* Hero Section */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
                  <img
                    src={selectedProject.mockup.hero}
                    alt={selectedProject.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center">
                      <h2 className="text-4xl font-bold text-white mb-4">{selectedProject.mockup.header}</h2>
                      <p className="text-xl text-white">{selectedProject.mockup.description}</p>
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {selectedProject.mockup.features.map((feature) => (
                      <div key={feature} className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">{feature}</h3>
                        <p className="text-gray-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}