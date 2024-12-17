import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

emailjs.init("iQxurQbT2Rxt7AKp3");

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export default function CallbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectDescription: '',
    needsEcommerce: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_ka0zde7', // Service ID
        'template_wjrx3kp', // Template ID
        {
          to_name: "EasyWeb", // Nom du destinataire
          from_name: formData.name, // Nom de l'expéditeur
          from_email: formData.email, // Email de l'expéditeur
          phone: formData.phone, // Téléphone
          message: `
Description du projet : ${formData.projectDescription}

Besoin e-commerce : ${formData.needsEcommerce}

Informations du contact :
Nom : ${formData.name}
Téléphone : ${formData.phone}
Email : ${formData.email}
          `, // Message formaté
          reply_to: formData.email, // Email de réponse
        }
      );

      // Déclencher l'événement de conversion Google Ads
      if (window.gtag_report_conversion) {
        window.gtag_report_conversion();
      }

      if (window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-640171249/WbXYCNyR9oMYEPuR1LQC'
        });
      }

      setShowModal(true);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors de l\'envoi du formulaire.');
    }
  };

  return (
    <div id="callback-form" className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-8 h-8 text-indigo-600 hidden md:block" />
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Demandez à être rappelé gratuitement
            </h2>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Nous créons votre site web sur mesure, sans engagement. Discutons de votre projet !
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 bg-white p-8 rounded-xl shadow-lg">
          <div className="space-y-8">
            {/* Coordonnées */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Vos coordonnées</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="form-label">Nom</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="form-label">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="needsEcommerce" className="form-label">Avez-vous besoin de vendre des produits sur le site ?</label>
                  <select
                    name="needsEcommerce"
                    id="needsEcommerce"
                    required
                    className="form-input"
                    value={formData.needsEcommerce}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionnez une option</option>
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Description du projet */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Le projet</h3>
              <div>
                <label htmlFor="projectDescription" className="form-label">Parlez-nous de votre site en quelques phrases</label>
                <textarea
                  name="projectDescription"
                  id="projectDescription"
                  rows={4}
                  required
                  className="form-input"
                  value={formData.projectDescription}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Demander à être rappelé gratuitement
            </button>
          </div>
        </form>
      </div>

      {/* Modal de confirmation */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold text-center mb-4">Merci {formData.name} !</h3>
            <p className="text-lg mb-4">
              Un de nos développeurs va vous contacter dans les prochaines heures pour discuter de votre projet et commencer la création de votre site web.
            </p>
            <p className="text-gray-600 mb-4">
              Nous allons étudier votre demande et préparer une première ébauche gratuite de votre site web, adaptée à vos besoins spécifiques.
            </p>
            <p className="text-gray-600 mb-6">
              Une fois votre site créé, vous pourrez choisir l'un de nos forfaits pour bénéficier d'un hébergement premium, d'une maintenance complète et d'un accompagnement personnalisé.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}