import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { LEGAL_HOSTING } from '../config';

interface Props {
  open: boolean;
  onClose: () => void;
}

// Texte repris des mentions légales de clouditechnologies.com (consigne de Charly, 2026-11-06).
// La section Hébergement n'apparaît que si LEGAL_HOSTING est renseigné dans config.ts.
export const LegalNoticeModal: React.FC<Props> = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const h = 'text-sm font-bold text-slate-900 dark:text-white mt-5 mb-1.5';
  const p = 'text-sm text-slate-600 dark:text-slate-300 leading-relaxed';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 id="legal-title" className="text-xl font-extrabold text-slate-900 dark:text-white font-display">
          Mentions légales
        </h2>

        <h3 className={h}>1. Informations légales</h3>
        <p className={p}>
          <strong>Dénomination sociale :</strong> CloudITechnologies.com<br />
          <strong>Forme juridique :</strong> SASU<br />
          <strong>Capital social :</strong> 1 000 €<br />
          <strong>Siège social :</strong> Vendée, France<br />
          <strong>RCS :</strong> 877866897 - La Roche-Sur-Yon<br />
          <strong>SIRET :</strong> 87786689700011<br />
          <strong>TVA intracommunautaire :</strong> FR69877866897
        </p>

        <h3 className={h}>2. Directeur de la publication</h3>
        <p className={p}>Le directeur de la publication est le représentant légal de CloudITechnologies.</p>

        {LEGAL_HOSTING && (
          <>
            <h3 className={h}>3. Hébergement</h3>
            <p className={p}>{LEGAL_HOSTING}</p>
          </>
        )}

        <h3 className={h}>{LEGAL_HOSTING ? '4' : '3'}. Propriété intellectuelle</h3>
        <p className={p}>
          L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. Toute
          reproduction, même partielle, est interdite sans l'autorisation préalable de CloudITechnologies.
        </p>

        <h3 className={h}>{LEGAL_HOSTING ? '5' : '4'}. Données personnelles</h3>
        <p className={p}>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données
          personnelles. Pour exercer ces droits, contactez-nous à : contact@clouditechnologies.fr
        </p>

        <h3 className={h}>{LEGAL_HOSTING ? '6' : '5'}. Responsabilité</h3>
        <p className={p}>
          CloudITechnologies s'efforce d'assurer l'exactitude des informations diffusées sur ce site, mais ne peut être
          tenue responsable des erreurs ou omissions. Ce site est indépendant : ce n'est pas le site officiel de
          Zinzino.
        </p>
      </div>
    </div>
  );
};
