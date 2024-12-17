import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BlogPopup from '../BlogPopup';

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <BlogPopup />
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
      </article>
    </div>
  );
}