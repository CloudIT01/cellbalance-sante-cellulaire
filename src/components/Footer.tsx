import React from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { ShieldCheck, Heart, Settings, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setIsConfigOpen, setIsWordPressExportOpen } = useAffiliate();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-14 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-xl font-bold tracking-tight text-white font-display flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-sm font-extrabold">
                CB
              </span>
              <span>CellBalance</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Plateforme d'information et d'évaluation en santé cellulaire et micronutrition. Dépistage de l’inflammation silencieuse et rééquilibrage du ratio Oméga-6 : Oméga-3.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => setIsConfigOpen(true)}
                className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Modifier mon lien affilié</span>
              </button>

              <button
                onClick={() => setIsWordPressExportOpen(true)}
                className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Export WordPress</span>
              </button>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a href="#quiz" className="hover:text-emerald-400 transition-colors">
                  Quiz d'évaluation cellulaire
                </a>
              </li>
              <li>
                <a href="#science" className="hover:text-emerald-400 transition-colors">
                  La science des membranes
                </a>
              </li>
              <li>
                <a href="#test-sanguin" className="hover:text-emerald-400 transition-colors">
                  Le test sanguin certifié Vitas
                </a>
              </li>
              <li>
                <a href="#expert" className="hover:text-emerald-400 transition-colors">
                  Témoignages & Études cliniques
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Foire Aux Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Accreditations */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Garanties & Laboratoire
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Analyses réalisées par <strong>Vitas AS</strong> (Oslo, Norvège), laboratoire agréé aux normes BPF (GMP) et ISO 15189.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs pt-1">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Analyse en double aveugle 100% anonymisée</span>
            </div>
          </div>
        </div>

        {/* Legal & Medical Disclaimers */}
        <div className="pt-8 border-t border-slate-900 space-y-4 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Avertissement médical :</strong> Ce quiz d'auto-évaluation et les données partagées sur ce site sont fournis exclusivement à des fins d'information, de sensibilisation et d'orientation nutritionnelle. Ils ne constituent en aucun cas un diagnostic médical ni une prescription thérapeutique. En cas de pathologie ou de traitement en cours (notamment anticoagulants), demandez conseil à votre médecin traitant.
          </p>
          <p>
            <strong>Mention d'affiliation & Transparence :</strong> Cette page intègre des liens d'affiliation vers les solutions de test sanguin et compléments d'équilibre cellulaire. Si vous commandez votre kit via nos liens partenaires, une commission peut nous être reversée sans aucun coût supplémentaire pour vous. Cela contribue au maintien et à l'indépendance de nos outils d'information gratuits.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} CellBalance. Tous droits réservés.
            </div>
            <div className="flex items-center gap-4">
              <span>Confidentialité & RGPD</span>
              <span>·</span>
              <span>Mentions Légales</span>
              <span>·</span>
              <span>Conditions Générales</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
