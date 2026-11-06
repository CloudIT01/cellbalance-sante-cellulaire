import React, { useState } from 'react';
import { QuizResult, LeadData } from '../types/quiz';
import { useAffiliate } from '../context/AffiliateContext';
import { RotateCcw, Sparkles, CheckCircle, ExternalLink, Send, Lock } from 'lucide-react';
import bloodKitImg from '../assets/images/blood_spot_test_kit_1793872277021.jpg';
import { LEAD_WEBHOOK_URL, AFFILIATE_REL, AFFILIATE_NOTICE } from '../config';

interface ResultReportProps {
  result: QuizResult;
  onReset: () => void;
}

export const ResultReport: React.FC<ResultReportProps> = ({ result, onReset }) => {
  const { affiliateUrl } = useAffiliate();
  const [lead, setLead] = useState<LeadData>({
    firstName: '',
    email: '',
    phone: '',
    optInNewsletter: false, // consentement explicite : case décochée par défaut (RGPD)
  });
  const [submittedLead, setSubmittedLead] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.email || !lead.firstName || !lead.optInNewsletter || !LEAD_WEBHOOK_URL) return;

    setIsSubmitting(true);
    setSubmitError(false);
    try {
      const response = await fetch(LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'quiz_completed',
          first_name: lead.firstName,
          email: lead.email,
          consent: lead.optInNewsletter,
          score: result.score,
          total: result.total,
          timestamp: new Date().toISOString(),
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setSubmittedLead(true);
    } catch (err) {
      console.error(err);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Score */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm transition-colors">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
              Résultat du quiz de connaissances
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              {result.title}
            </h3>
          </div>
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Refaire le quiz</span>
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 text-center">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Votre score</div>
            <div className="text-5xl font-extrabold text-slate-900 dark:text-white mt-1 font-display tabular-nums">
              {result.score} <span className="text-2xl text-slate-400">/ {result.total}</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden mt-3">
              <div
                className="h-full bg-emerald-500 transition-all duration-1000"
                style={{ width: `${result.percentage}%` }}
              />
            </div>
          </div>
          <p className="md:col-span-8 text-base text-slate-700 dark:text-slate-300 leading-relaxed">{result.message}</p>
        </div>

        {/* À retenir */}
        <div className="mt-8 p-6 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 text-slate-800 dark:text-slate-200 space-y-3">
          <div className="text-sm font-bold text-emerald-950 dark:text-emerald-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            <span>À retenir</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed list-disc pl-5">
            <li>
              Les oméga-6 et les oméga-3 sont des acides gras essentiels : le corps ne les fabrique pas. Selon Zinzino,
              c’est leur équilibre qui compte.
            </li>
            <li>
              L’objectif de Zinzino avec son protocole est un ratio oméga-6 / oméga-3 de <strong>3:1 ou moins</strong>.
              Ce n’est pas un seuil médical.
            </li>
            <li>
              On ne peut pas connaître son ratio à partir de ses symptômes : seule une mesure le permet. En cas de
              gêne, parlez-en à un professionnel de santé.
            </li>
          </ul>
        </div>
      </div>

      {/* Carte de conversion : le kit de test */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white p-7 sm:p-10 shadow-xl border border-emerald-500/20">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wide border border-emerald-500/30">
              Étape suivante possible
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
              Passez de la connaissance à la mesure
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Ce quiz teste vos connaissances : il ne mesure pas votre ratio. Pour le connaître, il faut mesurer la composition en acides gras de la membrane de vos globules rouges via un <strong>test de sang séché (BalanceTest)</strong>. Ce test ne sert pas à diagnostiquer une maladie.
            </p>

            <ul className="space-y-2 text-sm text-slate-200 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Prélèvement à domicile : quelques gouttes de sang sur buvard</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Analyse par le laboratoire indépendant Vitas AS à Oslo (normes GMP, selon Zinzino)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dosage de 11 acides gras et de votre ratio Oméga-6 / Oméga-3</span>
              </li>
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={affiliateUrl}
                target="_blank"
                rel={AFFILIATE_REL}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 cursor-pointer"
              >
                <span>Commander mon test à domicile</span>
                <ExternalLink className="w-5 h-5" />
              </a>

              <div className="text-xs text-emerald-300/90 self-center">{AFFILIATE_NOTICE}</div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-xs rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-3">
              <img
                src={bloodKitImg}
                alt="Kit de prélèvement sanguin séché BalanceTest à domicile"
                className="w-full aspect-[4/3] object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
              <div className="text-center pt-3 text-xs text-slate-400">
                Kit complet avec lancettes stériles, papier buvard et enveloppe T retour labo
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire e-mail : affiché uniquement si un webhook réel est configuré (VITE_LEAD_WEBHOOK_URL) */}
      {LEAD_WEBHOOK_URL && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm transition-colors">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
              Rester informé
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
              Recevez des contenus sur la santé cellulaire par e-mail
            </h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Laissez votre prénom et votre e-mail pour recevoir nos contenus éducatifs. Aucune information de santé n’est collectée par ce formulaire.
            </p>

            {submittedLead ? (
              <div className="mt-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div className="text-sm">
                  <strong>Merci {lead.firstName} !</strong> Votre demande a bien été transmise.
                </div>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lead-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Votre prénom
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      value={lead.firstName}
                      onChange={(e) => setLead({ ...lead, firstName: e.target.value })}
                      placeholder="ex. Sophie"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Votre adresse email
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      required
                      value={lead.email}
                      onChange={(e) => setLead({ ...lead, email: e.target.value })}
                      placeholder="sophie@exemple.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <label className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={lead.optInNewsletter}
                      onChange={(e) => setLead({ ...lead, optInNewsletter: e.target.checked })}
                      className="rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 dark:border-slate-700 w-4 h-4"
                    />
                    <span>J’accepte de recevoir des e-mails sur la santé cellulaire (désinscription possible à tout moment)</span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting || !lead.optInNewsletter}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-500 text-white text-sm font-semibold transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Envoi en cours...' : 'Recevoir les contenus'}</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center gap-1.5 pt-1">
                  <Lock className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                  <span>Vos données servent uniquement à vous envoyer ces contenus. Vous pouvez demander leur suppression à tout moment.</span>
                </div>
                {submitError && (
                  <div className="text-xs text-rose-600 dark:text-rose-400">
                    L’envoi a échoué. Merci de réessayer dans un instant.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
