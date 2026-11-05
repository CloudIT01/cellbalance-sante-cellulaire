import React, { useState } from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { X, Link2, Tag, Check, RotateCcw, ExternalLink } from 'lucide-react';

export const AffiliateModal: React.FC = () => {
  const {
    affiliateUrl,
    setAffiliateUrl,
    promoCode,
    setPromoCode,
    isConfigOpen,
    setIsConfigOpen,
    resetToDefault
  } = useAffiliate();

  const [inputUrl, setInputUrl] = useState(affiliateUrl);
  const [inputCode, setInputCode] = useState(promoCode);
  const [saved, setSaved] = useState(false);

  if (!isConfigOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setAffiliateUrl(inputUrl.trim());
    setPromoCode(inputCode.trim());
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setIsConfigOpen(false);
    }, 700);
  };

  const handleReset = () => {
    resetToDefault();
    setInputUrl('https://www.zinzino.com/site/FR/fr-FR/products/shop/balance/300000');
    setInputCode('SANTECELLULAIRE');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="flex items-center gap-2">
            <Link2 className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
              Configuration de votre Lien d'Affiliation
            </h3>
          </div>
          <button
            onClick={() => setIsConfigOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 space-y-5">
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Personnalisez ici l'URL vers laquelle redirigent tous les boutons d'appel à l'action (« Commander mon Test Sanguin »). Votre lien sera automatiquement mémorisé dans votre navigateur et actif sur toute la page.
          </p>

          <div>
            <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
              Votre URL d'affiliation (Zinzino, boutique ou lien tracké)
            </label>
            <div className="relative">
              <input
                type="url"
                required
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="https://www.zinzino.com/site/FR/fr-FR/..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-xs text-slate-800 dark:text-slate-100"
              />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Exemple : Lien partenaire avec votre identifiant ou code parrain.
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
              Code promo ou avantage affiché (Optionnel)
            </label>
            <div className="relative">
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="VOTRECODEPROMO"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-xs text-slate-800 dark:text-slate-100"
              />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Affiché sous le bouton pour rassurer et inciter le prospect à l'achat.
            </p>
          </div>

          {/* Test Link Button */}
          <div className="pt-2 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={handleReset}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Rétablir par défaut</span>
            </button>

            <a
              href={inputUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-semibold flex items-center gap-1"
            >
              <span>Tester mon lien</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsConfigOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              Annuler
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Enregistré avec succès !</span>
                </>
              ) : (
                <span>Appliquer à toute la Landing Page</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
