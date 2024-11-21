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
    businessType: '',
    callbackDate: '',
    callbackTime: '',
    websiteObjective: '',
    needsEcommerce: '',
    projectDescription: ''
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
        'service_ka0zde7',
        'template_wjrx3kp',
        {
          from_name: formData.name,
          to_email: 'contacteasywebfr@gmail.com',
          phone: formData.phone,
          email: formData.email,
          business_type: getBusinessTypeText(formData.businessType),
          callback_date: formData.callbackDate,
          callback_time: formData.callbackTime,
          website_objective: getObjectiveText(formData.websiteObjective),
          needs_ecommerce: getEcommerceText(formData.needsEcommerce),
          project_description: formData.projectDescription
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

  const getBusinessTypeText = (value: string) => {
    const types = {
      'retail': 'Commerce',
      'restaurant': 'Restaurant',
      'service': 'Prestataire de Services',
      'professional': 'Profession Libérale',
      'other': 'Autre'
    };
    return types[value as keyof typeof types] || value;
  };

  const getObjectiveText = (value: string) => {
    const objectives = {
      'inform': 'Informer sur votre activité',
      'attract': 'Attirer de nouveaux clients'
    };
    return objectives[value as keyof typeof objectives] || value;
  };

  const getEcommerceText = (value: string) => {
    const ecommerce = {
      'yes': 'Oui, absolument',
      'no': 'Non, ce n\'est pas nécessaire'
    };
    return ecommerce[value as keyof typeof ecommerce] || value;
  };

  const today = new Date().toISOString().split('T')[0];
  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    timeSlots.push(`${hour}:00`);
    timeSlots.push(`${hour}:30`);
  }

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
            Nous créons votre site web gratuitement et sur mesure, sans engagement. Discutons de votre projet !
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 bg-white p-8 rounded-xl shadow-lg">
          <div className="space-y-8">
            {/* Coordonnées */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Vos coordonnées</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="form-label">Nom complet</label>
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
                  <label htmlFor="businessType" className="form-label">Type d'activité</label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    className="form-input"
                    value={formData.businessType}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="retail">Commerce</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="service">Prestataire de Services</option>
                    <option value="professional">Profession Libérale</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Date et heure */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Date et heure de l'appel</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="callbackDate" className="form-label">Date de l'appel</label>
                  <input
                    type="date"
                    name="callbackDate"
                    id="callbackDate"
                    min={today}
                    required
                    className="form-input"
                    value={formData.callbackDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="callbackTime" className="form-label">Heure de l'appel</label>
                  <select
                    name="callbackTime"
                    id="callbackTime"
                    required
                    className="form-input"
                    value={formData.callbackTime}
                    onChange={handleChange}
                  >
                    <option value="">Choisir une heure</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Questions sur le site */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Informations sur votre futur site</h3>
              <div className="space-y-8">
                <div>
                  <label className="form-label block mb-3">Quel est l'objectif principal de votre site web ?</label>
                  <div className="space-y-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="websiteObjective"
                        id="obj-inform"
                        value="inform"
                        className="h-4 w-4 text-indigo-600"
                        checked={formData.websiteObjective === 'inform'}
                        onChange={handleChange}
                        required
                      />
                      <span className="ml-3">Informer sur votre activité</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="websiteObjective"
                        id="obj-attract"
                        value="attract"
                        className="h-4 w-4 text-indigo-600"
                        checked={formData.websiteObjective === 'attract'}
                        onChange={handleChange}
                      />
                      <span className="ml-3">Attirer de nouveaux clients</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="form-label block mb-3">Avez-vous besoin d'une boutique en ligne pour vendre vos produits ou services ?</label>
                  <div className="space-y-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="needsEcommerce"
                        id="ecom-yes"
                        value="yes"
                        className="h-4 w-4 text-indigo-600"
                        checked={formData.needsEcommerce === 'yes'}
                        onChange={handleChange}
                        required
                      />
                      <span className="ml-3">Oui, absolument</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="needsEcommerce"
                        id="ecom-no"
                        value="no"
                        className="h-4 w-4 text-indigo-600"
                        checked={formData.needsEcommerce === 'no'}
                        onChange={handleChange}
                      />
                      <span className="ml-3">Non, ce n'est pas nécessaire</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDescription" className="form-label">Décrivez-nous votre projet de site</label>
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
            <h3 className="text-2xl font-bold text-center mb-4">Parfait !</h3>
            <p className="text-lg mb-4">
              Nous vous appellerons le {formData.callbackDate} à {formData.callbackTime}
            </p>
            <p className="text-gray-600 mb-4">
              Lors de notre appel, nous parlerons de votre projet en détail pour concevoir gratuitement une première version de votre site web.
            </p>
            <p className="text-gray-600 mb-6">
              Une fois le site créé, si il répond à vos attentes, vous pourrez choisir parmi nos forfaits pour bénéficier d'un hébergement fiable, d'une maintenance complète et d'un accompagnement continu.
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