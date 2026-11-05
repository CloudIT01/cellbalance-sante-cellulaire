import React from 'react';
import { ShieldCheck, ArrowRight, Activity, Sparkles, CheckCircle2 } from 'lucide-react';
import heroImg from '../assets/images/hero_cellular_health_1793872277057.jpg';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#F3F9F4] via-[#FBFDFB] to-[#FBFDFB] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors">
      {/* Subtle organic light shape */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 dark:bg-emerald-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed text kicker without static pill badges */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-400 uppercase">
              <span>Santé Cellulaire Préventive</span>
              <span aria-hidden="true">·</span>
              <span>Profil Acides Gras Essentiels</span>
              <span aria-hidden="true">·</span>
              <span>Évaluation en 2 min</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.15] text-balance">
              Vos cellules respirent-elles ou souffrent-elles{' '}
              <span className="text-emerald-700 dark:text-emerald-400 underline decoration-emerald-200 dark:decoration-emerald-800 decoration-wavy decoration-2">
                d’inflammation silencieuse
              </span>{' '}
              ?
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Plus de <strong>95 % de la population européenne</strong> présente un déséquilibre critique
              entre Oméga-6 et Oméga-3. Ce déséquilibre rigidifie la membrane de vos{' '}
              <strong>37 000 milliards de cellules</strong>, limitant l'absorption des nutriments et
              favorisant fatigue chronique, raideurs et brouillard mental.
            </p>

            {/* Micro-proof bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Auto-évaluation gratuite sans prise de tête</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Estimation immédiate de votre ratio Oméga 6:3</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Validation par test sanguin séché certifié</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Analyse en laboratoire indépendant Vitas AS</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => scrollTo('quiz')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Démarrer le Quiz Cellulaire Gratuit</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollTo('test-sanguin')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all duration-200 cursor-pointer shadow-xs"
              >
                <span>Découvrir le Test Sanguin</span>
              </button>
            </div>

            {/* Discreet Trust Signal */}
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Normes laboratoire GMP & ISO 15189
              </span>
              <span>·</span>
              <span>100% Confidentiel & Anonyme</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-emerald-950/10 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
              <img
                src={heroImg}
                alt="Vitalité et santé cellulaire optimale grâce au rééquilibrage en Oméga-3"
                className="w-full aspect-[4/3] lg:aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                    Indicateur Clé
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Ratio Oméga-6 / Oméga-3 Optimal : &le; 3:1
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Moyenne européenne</div>
                  <div className="text-base font-extrabold text-amber-600 dark:text-amber-400">15:1 à 25:1</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-metric strip below hero */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white font-display tabular-nums">
              +1 250 000
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Tests sanguins séchés analysés dans le monde</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-display tabular-nums">
              95 %
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">De la population européenne présente un ratio déséquilibré</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white font-display tabular-nums">
              120 jours
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Cycle de renouvellement complet des globules rouges</div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-extrabold text-emerald-700 dark:text-emerald-400 font-display tabular-nums">
              11 Acides Gras
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Dosés avec précision par spectrométrie de masse</div>
          </div>
        </div>
      </div>
    </section>
  );
};
