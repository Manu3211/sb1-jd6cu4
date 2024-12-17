import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CGV from './pages/CGV';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Cookies from './pages/Cookies';

// Import des composants de création de site web
import CreationSiteWebIndex from './pages/blog/creation-site-web';
import CreerSiteWebProfessionnel from './pages/blog/creation-site-web/creer-site-web-professionnel';
import OutilsCreationSiteWeb from './pages/blog/creation-site-web/outils-creation-site-web';
import GuideCreationSiteWeb from './pages/blog/creation-site-web/guide-creation-site-web';
import ErreursCreationSiteWeb from './pages/blog/creation-site-web/erreurs-a-eviter-creation-site-web';
import ProfessionnelCreationSiteWeb from './pages/blog/creation-site-web/professionnel-creation-site-web';

// Import des composants de référencement SEO
import ReferencementSEOIndex from './pages/blog/referencement-seo';
import IntroductionReferencementNaturel from './pages/blog/referencement-seo/introduction-referencement-naturel';
import TechniquesAvanceesSEO from './pages/blog/referencement-seo/techniques-avancees-seo';
import ErreursSEO from './pages/blog/referencement-seo/erreurs-seo-a-eviter';
import OptimiserContenuSEO from './pages/blog/referencement-seo/optimiser-contenu-seo';
import ImportanceBacklinksSEO from './pages/blog/referencement-seo/importance-backlinks-seo';

// Import des composants d'hébergement web
import HebergementWebIndex from './pages/blog/hebergement-web';
import ChoisirHebergeur from './pages/blog/hebergement-web/choisir-hebergeur-site-web';
import TypesHebergement from './pages/blog/hebergement-web/types-hebergement-web';
import ImpactHebergementSEO from './pages/blog/hebergement-web/impact-hebergement-seo';
import SecuriteHebergement from './pages/blog/hebergement-web/securite-hebergement-web';
import MigrerHebergeur from './pages/blog/hebergement-web/migrer-site-nouvel-hebergeur';

// Import des composants de création de site gratuit
import CreationSiteGratuitIndex from './pages/blog/creation-site-web-gratuit';
import CreerMonSiteGratuit from './pages/blog/creation-site-web-gratuit/creer-mon-site-web-gratuit';
import CreerSiteGratuitGoogle from './pages/blog/creation-site-web-gratuit/creer-site-web-gratuit-google';
import CreerSiteCanva from './pages/blog/creation-site-web-gratuit/creer-site-web-canva';
import LogicielsGratuits from './pages/blog/creation-site-web-gratuit/logiciels-gratuits-creer-site-web';
import HebergerSiteGratuit from './pages/blog/creation-site-web-gratuit/creer-heberger-site-web-gratuitement';

// Import des composants de conception web
import ConceptionSiteWebIndex from './pages/blog/conception-site-web';
import CreationSurMesure from './pages/blog/conception-site-web/creation-site-internet-sur-mesure';
import ConcepteurSitesWeb from './pages/blog/conception-site-web/concepteur-de-sites-web';
import CreerSiteSansCoder from './pages/blog/conception-site-web/creer-site-sans-coder';
import ApprendreCoderSite from './pages/blog/conception-site-web/apprendre-coder-site';
import IdeesSiteWeb from './pages/blog/conception-site-web/idees-de-site-web';

// Import des composants d'hébergement et nom de domaine
import HebergementNomDomaineIndex from './pages/blog/hebergement-nom-domaine';
import CommentHebergerSite from './pages/blog/hebergement-nom-domaine/comment-heberger-site-web';
import ConnaitreHebergeur from './pages/blog/hebergement-nom-domaine/connaitre-hebergeur-site-web';
import HebergementSiteGratuitDomaine from './pages/blog/hebergement-nom-domaine/hebergement-site-gratuit';
import CoutHebergement from './pages/blog/hebergement-nom-domaine/cout-hebergement-site-internet';
import PrixNomDomaine from './pages/blog/hebergement-nom-domaine/prix-nom-de-domaine';

// Import des composants outils et techniques
import OutilsTechniquesIndex from './pages/blog/outils-techniques-creation-site-web';
import CreerSiteShopify from './pages/blog/outils-techniques-creation-site-web/creer-site-web-shopify';
import CreerSiteIA from './pages/blog/outils-techniques-creation-site-web/creer-site-web-ia';
import CreerSiteGoogle from './pages/blog/outils-techniques-creation-site-web/creer-site-web-google';
import ApprendreHTML5CSS3 from './pages/blog/outils-techniques-creation-site-web/apprendre-creer-site-web-html5-css3';
import LogicielsCreerSite from './pages/blog/outils-techniques-creation-site-web/logiciels-creer-site-web-professionnel';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/cookies" element={<Cookies />} />

            {/* Routes création de site web */}
            <Route path="/creation-site-web" element={<CreationSiteWebIndex />} />
            <Route path="/creation-site-web/creer-site-web-professionnel" element={<CreerSiteWebProfessionnel />} />
            <Route path="/creation-site-web/outils-creation-site-web" element={<OutilsCreationSiteWeb />} />
            <Route path="/creation-site-web/guide-creation-site-web" element={<GuideCreationSiteWeb />} />
            <Route path="/creation-site-web/erreurs-a-eviter-creation-site-web" element={<ErreursCreationSiteWeb />} />
            <Route path="/creation-site-web/professionnel-creation-site-web" element={<ProfessionnelCreationSiteWeb />} />

            {/* Routes référencement SEO */}
            <Route path="/referencement-seo" element={<ReferencementSEOIndex />} />
            <Route path="/referencement-seo/introduction-referencement-naturel" element={<IntroductionReferencementNaturel />} />
            <Route path="/referencement-seo/techniques-avancees-seo" element={<TechniquesAvanceesSEO />} />
            <Route path="/referencement-seo/erreurs-seo-a-eviter" element={<ErreursSEO />} />
            <Route path="/referencement-seo/optimiser-contenu-seo" element={<OptimiserContenuSEO />} />
            <Route path="/referencement-seo/importance-backlinks-seo" element={<ImportanceBacklinksSEO />} />

            {/* Routes hébergement web */}
            <Route path="/hebergement-web" element={<HebergementWebIndex />} />
            <Route path="/hebergement-web/choisir-hebergeur-site-web" element={<ChoisirHebergeur />} />
            <Route path="/hebergement-web/types-hebergement-web" element={<TypesHebergement />} />
            <Route path="/hebergement-web/impact-hebergement-seo" element={<ImpactHebergementSEO />} />
            <Route path="/hebergement-web/securite-hebergement-web" element={<SecuriteHebergement />} />
            <Route path="/hebergement-web/migrer-site-nouvel-hebergeur" element={<MigrerHebergeur />} />

            {/* Routes création de site gratuit */}
            <Route path="/creation-site-web-gratuit" element={<CreationSiteGratuitIndex />} />
            <Route path="/creation-site-web-gratuit/creer-mon-site-web-gratuit" element={<CreerMonSiteGratuit />} />
            <Route path="/creation-site-web-gratuit/creer-site-web-gratuit-google" element={<CreerSiteGratuitGoogle />} />
            <Route path="/creation-site-web-gratuit/creer-site-web-canva" element={<CreerSiteCanva />} />
            <Route path="/creation-site-web-gratuit/logiciels-gratuits-creer-site-web" element={<LogicielsGratuits />} />
            <Route path="/creation-site-web-gratuit/creer-heberger-site-web-gratuitement" element={<HebergerSiteGratuit />} />

            {/* Routes conception web */}
            <Route path="/conception-site-web" element={<ConceptionSiteWebIndex />} />
            <Route path="/conception-site-web/creation-site-internet-sur-mesure" element={<CreationSurMesure />} />
            <Route path="/conception-site-web/concepteur-de-sites-web" element={<ConcepteurSitesWeb />} />
            <Route path="/conception-site-web/creer-site-sans-coder" element={<CreerSiteSansCoder />} />
            <Route path="/conception-site-web/apprendre-coder-site" element={<ApprendreCoderSite />} />
            <Route path="/conception-site-web/idees-de-site-web" element={<IdeesSiteWeb />} />

            {/* Routes hébergement et nom de domaine */}
            <Route path="/hebergement-nom-domaine" element={<HebergementNomDomaineIndex />} />
            <Route path="/hebergement-nom-domaine/comment-heberger-site-web" element={<CommentHebergerSite />} />
            <Route path="/hebergement-nom-domaine/connaitre-hebergeur-site-web" element={<ConnaitreHebergeur />} />
            <Route path="/hebergement-nom-domaine/hebergement-site-gratuit" element={<HebergementSiteGratuitDomaine />} />
            <Route path="/hebergement-nom-domaine/cout-hebergement-site-internet" element={<CoutHebergement />} />
            <Route path="/hebergement-nom-domaine/prix-nom-de-domaine" element={<PrixNomDomaine />} />

            {/* Routes outils et techniques */}
            <Route path="/outils-techniques-creation-site-web" element={<OutilsTechniquesIndex />} />
            <Route path="/outils-techniques-creation-site-web/creer-site-web-shopify" element={<CreerSiteShopify />} />
            <Route path="/outils-techniques-creation-site-web/creer-site-web-ia" element={<CreerSiteIA />} />
            <Route path="/outils-techniques-creation-site-web/creer-site-web-google" element={<CreerSiteGoogle />} />
            <Route path="/outils-techniques-creation-site-web/apprendre-creer-site-web-html5-css3" element={<ApprendreHTML5CSS3 />} />
            <Route path="/outils-techniques-creation-site-web/logiciels-creer-site-web-professionnel" element={<LogicielsCreerSite />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}