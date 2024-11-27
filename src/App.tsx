import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CGV from './pages/CGV';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Cookies from './pages/Cookies';
import CreationSiteWebIndex from './pages/blog/creation-site-web';
import CreerSiteWebProfessionnel from './pages/blog/creation-site-web/creer-site-web-professionnel';
import OutilsCreationSiteWeb from './pages/blog/creation-site-web/outils-creation-site-web';
import GuideCreationSiteWeb from './pages/blog/creation-site-web/guide-creation-site-web';
import ErreursCreationSiteWeb from './pages/blog/creation-site-web/erreurs-a-eviter-creation-site-web';
import ProfessionnelCreationSiteWeb from './pages/blog/creation-site-web/professionnel-creation-site-web';
import ReferencementSEOIndex from './pages/blog/referencement-seo/index';
import IntroductionReferencementNaturel from './pages/blog/referencement-seo/introduction-referencement-naturel';
import TechniquesAvanceesSEO from './pages/blog/referencement-seo/techniques-avancees-seo';
import ErreursSEO from './pages/blog/referencement-seo/erreurs-seo-a-eviter';
import OptimiserContenuSEO from './pages/blog/referencement-seo/optimiser-contenu-seo';
import ImportanceBacklinksSEO from './pages/blog/referencement-seo/importance-backlinks-seo';
import HebergementWebIndex from './pages/blog/hebergement-web/index';
import ChoisirHebergeur from './pages/blog/hebergement-web/choisir-hebergeur-site-web';
import TypesHebergement from './pages/blog/hebergement-web/types-hebergement-web';
import ImpactHebergementSEO from './pages/blog/hebergement-web/impact-hebergement-seo';
import SecuriteHebergement from './pages/blog/hebergement-web/securite-hebergement-web';
import MigrerHebergeur from './pages/blog/hebergement-web/migrer-site-nouvel-hebergeur';
import CreationSiteGratuitIndex from './pages/blog/creation-site-web-gratuit/index';
import CreerMonSiteGratuit from './pages/blog/creation-site-web-gratuit/creer-mon-site-web-gratuit';
import CreerSiteGratuitGoogle from './pages/blog/creation-site-web-gratuit/creer-site-web-gratuit-google';
import CreerSiteCanva from './pages/blog/creation-site-web-gratuit/creer-site-web-canva';
import LogicielsGratuits from './pages/blog/creation-site-web-gratuit/logiciels-gratuits-creer-site-web';
import HebergerSiteGratuit from './pages/blog/creation-site-web-gratuit/creer-heberger-site-web-gratuitement';
import OutilsTechniquesIndex from './pages/blog/outils-techniques-creation-site-web/index';
import CreerSiteShopify from './pages/blog/outils-techniques-creation-site-web/creer-site-web-shopify';
import CreerSiteIA from './pages/blog/outils-techniques-creation-site-web/creer-site-web-ia';
import CreerSiteGoogle from './pages/blog/outils-techniques-creation-site-web/creer-site-web-google';
import ApprendreHTML5CSS3 from './pages/blog/outils-techniques-creation-site-web/apprendre-creer-site-web-html5-css3';
import LogicielsCreerSite from './pages/blog/outils-techniques-creation-site-web/logiciels-creer-site-web-professionnel';
import ConceptionSiteWebIndex from './pages/blog/conception-site-web/index';
import CreationSurMesure from './pages/blog/conception-site-web/creation-site-internet-sur-mesure';
import ConcepteurSitesWeb from './pages/blog/conception-site-web/concepteur-de-sites-web';
import CreerSiteSansCoder from './pages/blog/conception-site-web/creer-site-sans-coder';
import ApprendreCoderSite from './pages/blog/conception-site-web/apprendre-coder-site';
import IdeesSiteWeb from './pages/blog/conception-site-web/idees-de-site-web';

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
            <Route path="/creation-site-web" element={<CreationSiteWebIndex />} />
            <Route path="/creation-site-web/creer-site-web-professionnel" element={<CreerSiteWebProfessionnel />} />
            <Route path="/creation-site-web/outils-creation-site-web" element={<OutilsCreationSiteWeb />} />
            <Route path="/creation-site-web/guide-creation-site-web" element={<GuideCreationSiteWeb />} />
            <Route path="/creation-site-web/erreurs-a-eviter-creation-site-web" element={<ErreursCreationSiteWeb />} />
            <Route path="/creation-site-web/professionnel-creation-site-web" element={<ProfessionnelCreationSiteWeb />} />
            <Route path="/referencement-seo" element={<ReferencementSEOIndex />} />
            <Route path="/referencement-seo/introduction-referencement-naturel" element={<IntroductionReferencementNaturel />} />
            <Route path="/referencement-seo/techniques-avancees-seo" element={<TechniquesAvanceesSEO />} />
            <Route path="/referencement-seo/erreurs-seo-a-eviter" element={<ErreursSEO />} />
            <Route path="/referencement-seo/optimiser-contenu-seo" element={<OptimiserContenuSEO />} />
            <Route path="/referencement-seo/importance-backlinks-seo" element={<ImportanceBacklinksSEO />} />
            <Route path="/hebergement-web" element={<HebergementWebIndex />} />
            <Route path="/hebergement-web/choisir-hebergeur-site-web" element={<ChoisirHebergeur />} />
            <Route path="/hebergement-web/types-hebergement-web" element={<TypesHebergement />} />
            <Route path="/hebergement-web/impact-hebergement-seo" element={<ImpactHebergementSEO />} />
            <Route path="/hebergement-web/securite-hebergement-web" element={<SecuriteHebergement />} />
            <Route path="/hebergement-web/migrer-site-nouvel-hebergeur" element={<MigrerHebergeur />} />
            <Route path="/creation-site-web-gratuit" element={<CreationSiteGratuitIndex />} />
            <Route path="/creation-site-web-gratuit/creer-mon-site-web-gratuit" element={<CreerMonSiteGratuit />} />
            <Route path="/creation-site-web-gratuit/creer-site-web-gratuit-google" element={<CreerSiteGratuitGoogle />} />
            <Route path="/creation-site-web-gratuit/creer-site-web-canva" element={<CreerSiteCanva />} />
            <Route path="/creation-site-web-gratuit/logiciels-gratuits-creer-site-web" element={<LogicielsGratuits />} />
            <Route path="/creation-site-web-gratuit/creer-heberger-site-web-gratuitement" element={<HebergerSiteGratuit />} />
            <Route path="/outils-techniques-creation-site-web" element={<OutilsTechniquesIndex />} />
            <Route path="/outils-techniques-creation-site-web/creer-site-web-shopify" element={<CreerSiteShopify />} />
            <Route path="/outils-techniques-creation-site-web/creer-site-web-ia" element={<CreerSiteIA />} />
            <Route path="/outils-techniques-creation-site-web/creer-site-web-google" element={<CreerSiteGoogle />} />
            <Route path="/outils-techniques-creation-site-web/apprendre-creer-site-web-html5-css3" element={<ApprendreHTML5CSS3 />} />
            <Route path="/outils-techniques-creation-site-web/logiciels-creer-site-web-professionnel" element={<LogicielsCreerSite />} />
            <Route path="/conception-site-web" element={<ConceptionSiteWebIndex />} />
            <Route path="/conception-site-web/creation-site-internet-sur-mesure" element={<CreationSurMesure />} />
            <Route path="/conception-site-web/concepteur-de-sites-web" element={<ConcepteurSitesWeb />} />
            <Route path="/conception-site-web/creer-site-sans-coder" element={<CreerSiteSansCoder />} />
            <Route path="/conception-site-web/apprendre-coder-site" element={<ApprendreCoderSite />} />
            <Route path="/conception-site-web/idees-de-site-web" element={<IdeesSiteWeb />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}