import React from 'react';
import { Award, FlaskConical, ExternalLink } from 'lucide-react';
import { EXPERT_VIDEO_URL } from '../config';

export const PractitionerSection: React.FC = () => {
  // Témoignages composites : synthèse d'avis de membres de la communauté Zinzino
  // (webinaires, groupes de réseaux sociaux). Prénoms, âges et villes sont illustratifs.
  const testimonials = [
    {
      name: 'Marc D.',
      age: '46 ans',
      location: 'Nantes',
      role: 'Sportif amateur & cadre commercial',
      beforeRatio: '22.4 : 1',
      afterRatio: '2.8 : 1',
      comment:
        'Je pensais manger sainement en mangeant des salades et du poulet. Mon premier test a été un choc : ratio de 22:1. En 120 jours avec l’huile d’équilibre polyphénols + oméga-3, je me sens plus souple le matin et j’ai l’impression de mieux récupérer après mes sorties de course à pied.',
      duration: '120 jours de protocole'
    },
    {
      name: 'Carole M.',
      age: '39 ans',
      location: 'Lyon',
      role: 'Entrepreneure & maman de 2 enfants',
      beforeRatio: '18.7 : 1',
      afterRatio: '3.1 : 1',
      comment:
        'Le brouillard mental et la fatigue vers 15h faisaient partie de mon quotidien. Le test sanguin a mis en lumière mon manque de DHA dans les membranes. En rééquilibrant mes apports, je me sens plus concentrée et mon énergie me paraît plus régulière au fil de la journée.',
      duration: '4 mois de suivi'
    },
    {
      name: 'Laurent V.',
      age: '52 ans',
      location: 'Genève',
      role: 'Médecin généraliste d’orientation nutritionnelle',
      beforeRatio: '16.2 : 1',
      afterRatio: '2.6 : 1',
      comment:
        'En tant que praticien, je refusais de conseiller des compléments à l’aveugle. Le BalanceTest permet enfin une approche préventive factuelle : tester avant, ajuster la dose selon le profil lipidique, et retester à 120 jours.',
      duration: 'Praticien prescripteur'
    }
  ];

  return (
    <section id="expert" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Expert synthesis (sources publiques Zinzino) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F4F9F5] dark:bg-slate-900/90 border border-emerald-950/10 dark:border-slate-800 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-3 flex justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-white dark:bg-slate-800 border border-emerald-900/10 dark:border-slate-700 shadow-sm flex items-center justify-center">
                <FlaskConical className="w-14 h-14 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
              </div>
            </div>

            <div className="lg:col-span-9 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>L’éclairage des experts de Zinzino</span>
              </div>

              <blockquote className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-100 font-display leading-relaxed">
                Pendant des années, l’attention s’est portée presque uniquement sur le cholestérol total. Aujourd’hui, les recherches indiquent que le ratio Oméga-6 / Oméga-3 dans la membrane des globules rouges est un indicateur pertinent de l’équilibre en acides gras. On ne peut pas améliorer ce que l’on ne mesure pas.
              </blockquote>

              <div className="pt-2 border-t border-emerald-900/10 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Synthèse des travaux du Dr Natalie Kather et de Steven Cherniske
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Membres du Zinzino Scientific Advisory Board (Dr Kather, Steven Cherniske, biochimiste)
                  </div>
                </div>
                {EXPERT_VIDEO_URL && (
                  <a
                    href={EXPERT_VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Source du Dr KATHER N.</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: community feedback */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              Retours de la communauté : évolution des ratios mesurés
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              120 jours correspond à la durée de vie moyenne d'un globule rouge : c'est le temps nécessaire pour renouveler les lipides de sa membrane.
            </p>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              Témoignages composites : synthèse d’avis recueillis auprès de membres de la communauté Zinzino (webinaires et groupes de réseaux sociaux). Prénoms, âges et villes sont illustratifs. Les résultats varient d’une personne à l’autre et ne constituent pas une promesse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900 dark:text-white">{t.name}</span>
                    <span className="text-slate-500 dark:text-slate-400">{t.location} · {t.age}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                    « {t.comment} »
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                  <div className="text-[11px] uppercase font-semibold text-slate-400 dark:text-slate-500 mb-1">
                    Évolution du Ratio Oméga-6 : 3
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-rose-600 dark:text-rose-400 tabular-nums">
                      Avant : {t.beforeRatio}
                    </div>
                    <span className="text-xs text-slate-400">&rarr;</span>
                    <div className="text-sm font-bold text-emerald-700 dark:text-emerald-400 tabular-nums">
                      Après : {t.afterRatio}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
