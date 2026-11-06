import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { LegalNoticeModal } from './LegalNoticeModal';

export const Footer: React.FC = () => {
  const [legalOpen, setLegalOpen] = useState(false);
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
              Site d'information sur la santé cellulaire et l'équilibre Oméga-6 / Oméga-3. Site indépendant : ce n'est pas le site officiel de Zinzino.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a href="#quiz" className="hover:text-emerald-400 transition-colors">
                  Quiz de connaissances
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
                  Avis d'experts & retours de la communauté
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
              <span>Échantillon identifié uniquement par un code personnel</span>
            </div>
          </div>
        </div>

        {/* Legal & Medical Disclaimers */}
        <div className="pt-8 border-t border-slate-900 space-y-4 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Avertissement médical :</strong> Ce quiz de connaissances et les données partagées sur ce site sont fournis exclusivement à des fins d'information et de sensibilisation. Ils ne constituent en aucun cas un diagnostic médical ni une prescription thérapeutique. En cas de pathologie ou de traitement en cours (notamment anticoagulants), demandez conseil à votre médecin traitant.
          </p>
          <p>
            <strong>Mention d'affiliation & Transparence :</strong> Cette page contient des liens affiliés Zinzino. Si vous commandez via ces liens, nous pouvons bénéficier d'un avantage auprès de Zinzino, sans coût supplémentaire pour vous. Les informations chiffrées proviennent des contenus publics de Zinzino.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} CellBalance. Tous droits réservés.
            </div>
            <div className="flex items-center gap-4">
              <span>Confidentialité & RGPD</span>
              <span>·</span>
              <button type="button" onClick={() => setLegalOpen(true)} className="hover:text-emerald-400 transition-colors underline-offset-2 hover:underline">
                Mentions Légales
              </button>
              <span>·</span>
              <span>Conditions Générales</span>
            </div>
          </div>
        </div>
      </div>
      <LegalNoticeModal open={legalOpen} onClose={() => setLegalOpen(false)} />
    </footer>
  );
};
