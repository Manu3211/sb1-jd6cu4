import React from 'react';
import BlogLayout from '../../../components/blog/BlogLayout';
import { Link } from 'react-router-dom';

export default function HebergerSiteGratuit() {
  return (
    <BlogLayout
      title="Créer et héberger un site web gratuitement en 2024"
      description="Guide complet pour héberger votre site web gratuitement : comparatif des meilleures solutions, conseils et astuces pour un hébergement performant sans frais."
      previousPost={{
        url: "/creation-site-web-gratuit/logiciels-gratuits-creer-site-web",
        title: "Logiciels gratuits pour créer un site"
      }}
      nextPost={{
        url: "/creation-site-web-gratuit/creer-mon-site-web-gratuit",
        title: "Créer mon site web gratuit"
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Hébergement web gratuit"
        className="w-full h-96 object-cover rounded-xl mb-8"
      />

      <div className="prose prose-indigo max-w-none">
        {/* Contenu existant jusqu'à WordPress.com */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-3">WordPress.com</h4>
            <ul className="list-disc pl-6">
              <li>2 Go d'espace gratuit
                <ul className="pl-4 mt-1">
                  <li>Stockage cloud sécurisé</li>
                  <li>Backup automatique</li>
                  <li>CDN inclus</li>
                </ul>
              </li>
              <li>Sous-domaine inclus
                <ul className="pl-4 mt-1">
                  <li>SSL gratuit</li>
                  <li>DNS géré</li>
                  <li>Protection DDoS</li>
                </ul>
              </li>
              <li>Thèmes gratuits
                <ul className="pl-4 mt-1">
                  <li>Designs responsives</li>
                  <li>Personnalisation facile</li>
                  <li>Mises à jour auto</li>
                </ul>
              </li>
              <li>Support communautaire
                <ul className="pl-4 mt-1">
                  <li>Forums actifs</li>
                  <li>Documentation complète</li>
                  <li>Tutoriels vidéo</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Reste du contenu inchangé */}
        </div>

        {/* Reste du contenu inchangé */}
      </div>
    </BlogLayout>
  );
}