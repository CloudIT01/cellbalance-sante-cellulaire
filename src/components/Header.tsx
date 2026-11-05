import React from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { useTheme } from '../context/ThemeContext';
import { Settings, Code2, Sun, Moon } from 'lucide-react';

export const Header: React.FC = () => {
  const { setIsConfigOpen, setIsWordPressExportOpen } = useAffiliate();
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-emerald-950/5 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 flex items-center gap-2 font-display"
        >
          <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-base font-extrabold shadow-sm">
            CB
          </span>
          <span>CellBalance</span>
        </a>

        {/* Zone 2: Single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button
            onClick={() => scrollToSection('quiz')}
            className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Le Quiz Cellulaire
          </button>
          <button
            onClick={() => scrollToSection('science')}
            className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Pourquoi l’Oméga-3 ?
          </button>
          <button
            onClick={() => scrollToSection('test-sanguin')}
            className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Le Test Sanguin
          </button>
          <button
            onClick={() => scrollToSection('expert')}
            className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Avis Médicaux
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Questions Fréquentes
          </button>
        </nav>

        {/* Zone 3: Primary Action & Tools */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode nuit (Dark Mode)'}
            aria-label="Changer de thème"
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            onClick={() => setIsWordPressExportOpen(true)}
            title="Intégration WordPress & Webhook"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>WordPress / Make</span>
          </button>

          <button
            onClick={() => setIsConfigOpen(true)}
            title="Personnaliser votre lien d'affiliation"
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Configurer le lien affilié"
          >
            <Settings className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection('quiz')}
            className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Démarrer le Bilan
          </button>
        </div>
      </div>
    </header>
  );
};
