import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ArrowLeft } from 'lucide-react';
import { scrollToSection } from '../../utils/navigation';

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  previousPost?: {
    url: string;
    title: string;
  };
  nextPost?: {
    url: string;
    title: string;
  };
  mainArticle?: {
    url: string;
    title: string;
  };
}

export default function BlogLayout({ 
  children, 
  title, 
  description, 
  previousPost, 
  nextPost,
  mainArticle = {
    url: "/creation-site-web",
    title: "Guide complet sur la création de sites web"
  }
}: BlogLayoutProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {mainArticle && mainArticle.url !== location.pathname && (
          <Link 
            to={mainArticle.url}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au {mainArticle.title}
          </Link>
        )}

        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600">{description}</p>
        </header>

        <div className="prose prose-indigo max-w-none">
          {children}
        </div>

        <nav className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex justify-between">
            {previousPost && (
              <Link 
                to={previousPost.url}
                className="text-indigo-600 hover:text-indigo-800 flex items-center"
              >
                ← {previousPost.title}
              </Link>
            )}
            {nextPost && (
              <Link 
                to={nextPost.url}
                className="text-indigo-600 hover:text-indigo-800 flex items-center ml-auto"
              >
                {nextPost.title} →
              </Link>
            )}
          </div>
        </nav>

        <div className="mt-12 bg-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">
            Besoin d'un site web professionnel ?
          </h2>
          <p className="text-indigo-700 mb-6">
            Nos experts sont là pour vous accompagner dans la création de votre site web.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => scrollToSection('callback-form', isHomePage)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Phone className="w-5 h-5 mr-2" />
              Être rappelé gratuitement
            </button>
            <button
              onClick={() => scrollToSection('pricing', isHomePage)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Voir les tarifs
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}