import React from 'react';
import { AffiliateProvider } from './context/AffiliateContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuizSection } from './components/QuizSection';
import { ScienceSection } from './components/ScienceSection';
import { TestKitSection } from './components/TestKitSection';
import { PractitionerSection } from './components/PractitionerSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AffiliateModal } from './components/AffiliateModal';
import { WordPressExportModal } from './components/WordPressExportModal';
import { Sparkles, ArrowRight } from 'lucide-react';

function LandingPageContent() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFDFB] dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Discreet top notification bar */}
      <div className="bg-emerald-900 dark:bg-emerald-950 text-white text-[12px] py-2 px-4 text-center font-medium tracking-wide">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
          <span>
            95 % des Européens sont en état de déséquilibre cellulaire silencieux.
          </span>
          <button
            onClick={() => scrollTo('quiz')}
            className="underline font-bold text-emerald-200 hover:text-white ml-1 cursor-pointer"
          >
            Faites le test en 2 min &rarr;
          </button>
        </span>
      </div>

      <Header />

      <main className="flex-1">
        <Hero />
        <QuizSection />
        <ScienceSection />
        <TestKitSection />
        <PractitionerSection />
        <FaqSection />
      </main>

      <Footer />

      {/* Configuration & Integration Modals */}
      <AffiliateModal />
      <WordPressExportModal />

      {/* Discreet Mobile Floating CTA (strictly under 15% mobile viewport cap) */}
      <div className="lg:hidden fixed bottom-3 left-3 right-3 z-30">
        <div className="bg-slate-900/95 dark:bg-slate-900/95 backdrop-blur-md text-white p-3 rounded-xl shadow-xl flex items-center justify-between gap-3 border border-emerald-500/30">
          <div className="text-xs">
            <div className="font-bold leading-tight">Bilan Cellulaire & Ratio 6:3</div>
            <div className="text-[11px] text-slate-300">Auto-évaluation gratuite</div>
          </div>
          <button
            onClick={() => scrollTo('quiz')}
            className="px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1"
          >
            <span>Faire le Quiz</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AffiliateProvider>
        <LandingPageContent />
      </AffiliateProvider>
    </ThemeProvider>
  );
}
