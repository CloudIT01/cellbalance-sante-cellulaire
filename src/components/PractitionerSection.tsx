import React from 'react';
import { Quote, Star, Award, CheckCircle2 } from 'lucide-react';
import doctorImg from '../assets/images/health_practitioner_1793872278416.jpg';

export const PractitionerSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Marc D.',
      age: '46 ans',
      location: 'Nantes',
      role: 'Sportif amateur & cadre commercial',
      beforeRatio: '22.4 : 1',
      afterRatio: '2.8 : 1',
      comment:
        'Je pensais manger sainement en mangeant des salades et du poulet. Mon premier test a été un choc : ratio de 22:1 et membrane rigide à 28%. En 120 jours avec l’huile d’équilibre polyphénols + oméga-3, mes raideurs du matin ont disparu et mes temps de récupération en course à pied ont chuté.',
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
        'Le brouillard mental et la fatigue vers 15h faisaient partie de mon quotidien. Le test sanguin a mis en lumière mon manque critique de DHA dans les membranes. En rééquilibrant mes apports, j’ai retrouvé une clarté d’esprit et une régularité d’énergie impressionnantes.',
      duration: '4 mois de suivi'
    },
    {
      name: 'Dr. Laurent V.',
      age: '52 ans',
      location: 'Genève',
      role: 'Médecin généraliste d’orientation nutritionnelle',
      beforeRatio: '16.2 : 1',
      afterRatio: '2.6 : 1',
      comment:
        'En tant que praticien, je refusais de conseiller des compléments à l’aveugle. Le BalanceTest permet enfin une médecine préventive factuelle : tester avant, ajuster la dose selon le profil lipidique, et retester à 120 jours. Les résultats sur la perméabilité cellulaire sont indiscutables.',
      duration: 'Praticien prescripteur'
    }
  ];

  return (
    <section id="expert" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Expert Statement with photo */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F4F9F5] dark:bg-slate-900/90 border border-emerald-950/10 dark:border-slate-800 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-white dark:border-slate-800">
                <img
                  src={doctorImg}
                  alt="Dr. Éléonore Vasseur, Biologiste médicale et micronutritionniste"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>La parole d’expert en micronutrition</span>
              </div>

              <blockquote className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-100 font-display leading-relaxed">
                « Pendant des années, la médecine s’est focalisée uniquement sur le cholestérol total. Aujourd’hui, les recherches démontrent que le ratio Oméga-6 / Oméga-3 dans la membrane des hématies est le biomarqueur le plus révélateur de l’inflammation silencieuse de bas grade. On ne peut pas améliorer ce que l’on ne mesure pas. »
              </blockquote>

              <div className="pt-2 border-t border-emerald-900/10 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Dr. Éléonore Vasseur</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Docteure en Biologie Cellulaire & Consultante en Santé Fonctionnelle</div>
                </div>
                <div className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Validation scientifique indépendante</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Concrete Before/After Testimonials with Proof Metrics */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              Résultats biologiques mesurés avant / après 120 jours
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              120 jours est la durée de vie moyenne d'un globule rouge. C'est le temps biologique nécessaire pour renouveler intégralement les lipides membranaires.
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
