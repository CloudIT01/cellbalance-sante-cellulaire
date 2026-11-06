import React from 'react';
import { Layers, Activity, Zap, CheckCircle2, AlertOctagon } from 'lucide-react';
import membraneImg from '../assets/images/cellular_membrane_diagram_1793872279129.jpg';

export const ScienceSection: React.FC = () => {
  return (
    <section id="science" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-2">
            <span>Biologie cellulaire : les bases</span>
            <span aria-hidden="true">·</span>
            <span>Comprendre la Membrane</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight text-balance">
            La santé commence à l'échelle de votre membrane cellulaire
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Votre corps compte environ <strong>37 000 milliards de cellules</strong>. Chaque cellule est entourée d’une enveloppe lipidique (bicouche de phospholipides) qui régule tout : les échanges avec l’extérieur : l’entrée de l’oxygène, du glucose et des vitamines, et l’évacuation des déchets.
          </p>
        </div>

        {/* 2-Column Split: Image on Left + Educational Insights on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Scientific Diagram Asset */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-slate-900">
              <img
                src={membraneImg}
                alt="Représentation scientifique de la bicouche phospholipidique de la membrane cellulaire et acides gras oméga-3"
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-slate-900 text-white text-xs border-t border-slate-800 flex items-center justify-between">
                <span className="text-emerald-400 font-semibold">Bicouche lipidique et récepteurs transmembranaires</span>
                <span className="text-slate-400">Structure microscopique</span>
              </div>
            </div>
          </div>

          {/* Right: Comparative Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            {/* Box 1: Healthy Cell */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Membrane Souple & Fluide (Ratio &le; 3:1)</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Riche en <strong>acides gras Oméga-3 polyinsaturés (EPA et DHA)</strong>. Selon Zinzino, la membrane garde alors toute sa souplesse, ce qui favorise les échanges entre la cellule et son environnement.
              </p>
              <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 flex items-center gap-2 pt-1">
                <span>À savoir :</span>
                <span>l’EPA et le DHA contribuent au fonctionnement normal du cœur, et le DHA à celui du cerveau.</span>
              </div>
            </div>

            {/* Box 2: Rigid Inflamed Cell */}
            <div className="p-6 rounded-2xl bg-rose-50/50 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/50 space-y-3">
              <div className="flex items-center gap-2 text-rose-950 dark:text-rose-300 font-bold text-base">
                <AlertOctagon className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                <span>Membrane moins équilibrée (ratio &ge; 15:1)</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Une alimentation très riche en <strong>Oméga-6</strong> et pauvre en <strong>Oméga-3</strong> modifie la composition en acides gras des membranes. Selon Zinzino, c’est le cas d’une grande majorité des Européens testés.
              </p>
              <div className="text-xs font-semibold text-rose-800 dark:text-rose-400 flex items-center gap-2 pt-1">
                <span>À retenir :</span>
                <span>seul un test permet de connaître votre ratio réel.</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Evolution & Modern Gap Graphic */}
        <div className="mt-16 p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
          <div className="max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
              Pourquoi ce déséquilibre est-il si répandu ?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Selon les contenus publics de Zinzino, l'être humain a longtemps évolué avec un régime apportant autant d'Oméga-6 que d'Oméga-3 (ratio proche de 1:1). En quelques décennies, l'agriculture industrielle et les huiles raffinées ont fortement augmenté la consommation d'Oméga-6, tandis que celle d'Oméga-3 marins a diminué.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-xs font-semibold text-slate-400 uppercase">Alimentation ancestrale (Zinzino)</div>
              <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-display mt-2 tabular-nums">1:1</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-2">Ratio Oméga-6 / Oméga-3 estimé</div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-xs font-semibold text-slate-400 uppercase">Objectif Zinzino (Balance Concept)</div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-display mt-2 tabular-nums">&le; 3:1</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-2">Ratio cible visé par le protocole</div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-xs font-semibold text-slate-400 uppercase">Alimentation moderne actuelle</div>
              <div className="text-3xl font-extrabold text-rose-600 dark:text-rose-400 font-display mt-2 tabular-nums">15:1 à 25:1</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-2">Moyenne observée chez 95 % des Européens testés (Zinzino)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
