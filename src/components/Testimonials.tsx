import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie Dubois',
    role: 'Fleuriste',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'EasyWeb a créé un site magnifique pour ma boutique de fleurs. Les clients adorent commander en ligne et mes ventes ont augmenté de 40% !',
  },
  {
    name: 'Thomas Martin',
    role: 'Architecte',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Le processus était simple et efficace. Mon portfolio en ligne est exactement ce dont j\'avais besoin pour présenter mes projets.',
  },
  {
    name: 'Sophie Bernard',
    role: 'Restaurant Le Gourmet',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Grâce à EasyWeb, nous avons un site moderne qui reflète parfaitement l\'ambiance de notre restaurant. Le système de réservation en ligne fonctionne à merveille.',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Témoignages</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ce que nos clients disent de nous
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8 flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-500 text-base">{testimonial.content}</p>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}