import React from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { ExternalLink, Check, ShieldCheck, Clock, Award, Building2, Truck } from 'lucide-react';
import testKitImg from '../assets/images/blood_spot_test_kit_1793872277021.jpg';

export const TestKitSection: React.FC = () => {
  const { affiliateUrl, promoCode } = useAffiliate();

  return (
    <section id="test-sanguin" className="py-20 lg:py-28 bg-[#F6FAF7] dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Product Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
              <span>Dispositif Médical d’Autotest Certifié</span>
              <span aria-hidden="true">·</span>
              <span>Analyse Vitas AS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight text-balance">
              Le Test Sanguin Séché (BalanceTest) : Votre empreinte biologique exacte
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Ne devinez plus votre état de santé : <strong>mesurez-le avec précision scientifique</strong>. Ce test à domicile sur buvard quantifie le profil lipidique de la membrane de vos globules rouges, reflétant vos 120 derniers jours de nutrition cellulaire.
            </p>

            {/* Product image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-white dark:bg-slate-800 p-2">
              <img
                src={testKitImg}
                alt="Kit de prélèvement sanguin séché avec lancette stérile et buvard"
                className="w-full aspect-[4/3] object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right: What You Get & Protocol */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                Ce que révèle votre analyse en laboratoire :
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Dosage exact de 11 acides gras</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      Mesure rigoureuse par chromatographie en phase gazeuse et spectrométrie de masse (acides gras saturés, mono-insaturés et polyinsaturés).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Votre véritable ratio Oméga-6 / Oméga-3</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      Indique si vos cellules sont en état de protection anti-inflammatoire ou sous tension chronique.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Indice de fluidité de la membrane cellulaire</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      Calcule la vitesse d’échange cellulaire et la perméabilité de vos 37 000 milliards de cellules.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Indice de protection mentale et cardiaque</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      Concentration de DHA et EPA protectrice pour vos neurones et votre système vasculaire.
                    </p>
                  </div>
                </div>
              </div>

              {/* Protocol summary */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block">2 minutes</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Prélèvement simple</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <Truck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block">Enveloppe T</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Retour gratuit</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block">Vitas AS Oslo</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Labo certifié GMP</span>
                </div>
              </div>

              {/* Action Conversion Button */}
              <div className="pt-2">
                <a
                  href={affiliateUrl || 'https://www.zinzino.com/shop/2017711977/fr/fr-fr/products/shop/home-health-tests/309000'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <span>Commander mon test à domicile</span>
                  <ExternalLink className="w-5 h-5" />
                </a>

                <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2.5">
                  Contient un lien affilié Zinzino
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
