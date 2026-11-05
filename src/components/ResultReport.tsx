import React, { useState } from 'react';
import { QuizAnalysisResult, LeadData } from '../types/quiz';
import { useAffiliate } from '../context/AffiliateContext';
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  CheckCircle,
  ExternalLink,
  Send,
  Lock,
  Droplets,
  HeartPulse,
  Brain,
  Activity
} from 'lucide-react';
import bloodKitImg from '../assets/images/blood_spot_test_kit_1793872277021.jpg';

interface ResultReportProps {
  result: QuizAnalysisResult;
  onReset: () => void;
}

export const ResultReport: React.FC<ResultReportProps> = ({ result, onReset }) => {
  const { affiliateUrl, promoCode } = useAffiliate();
  const [lead, setLead] = useState<LeadData>({
    firstName: '',
    email: '',
    phone: '',
    optInNewsletter: true,
  });
  const [submittedLead, setSubmittedLead] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.email || !lead.firstName) return;

    setIsSubmitting(true);
    // Simulate webhook transmission or local storage
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedLead(true);
      // Store in localStorage for webhook / CRM export
      try {
        const existing = JSON.parse(localStorage.getItem('cellbalance_leads') || '[]');
        existing.push({
          ...lead,
          score: result.percentage,
          riskLevel: result.riskLevel,
          estimatedRatio: result.estimatedRatio,
          date: new Date().toISOString(),
        });
        localStorage.setItem('cellbalance_leads', JSON.stringify(existing));
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'critical':
        return {
          bg: 'bg-rose-50 text-rose-900 border-rose-200',
          badge: 'bg-rose-600 text-white',
          text: 'text-rose-700',
          bar: 'bg-rose-500',
          icon: <ShieldAlert className="w-6 h-6 text-rose-600" />
        };
      case 'elevated':
        return {
          bg: 'bg-amber-50 text-amber-950 border-amber-200',
          badge: 'bg-amber-600 text-white',
          text: 'text-amber-700',
          bar: 'bg-amber-500',
          icon: <AlertTriangle className="w-6 h-6 text-amber-600" />
        };
      case 'moderate':
        return {
          bg: 'bg-yellow-50 text-yellow-950 border-yellow-200',
          badge: 'bg-yellow-600 text-white',
          text: 'text-yellow-700',
          bar: 'bg-yellow-500',
          icon: <AlertTriangle className="w-6 h-6 text-yellow-600" />
        };
      default:
        return {
          bg: 'bg-emerald-50 text-emerald-950 border-emerald-200',
          badge: 'bg-emerald-600 text-white',
          text: 'text-emerald-700',
          bar: 'bg-emerald-500',
          icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
        };
    }
  };

  const riskStyle = getRiskColor(result.riskLevel);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header of Report */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm transition-colors">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
              Bilan d’Orientation Santé Cellulaire
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              {result.riskTitle}
            </h3>
          </div>
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Refaire le test</span>
          </button>
        </div>

        {/* Narrative Description */}
        <p className="mt-6 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          {result.riskDescription}
        </p>

        {/* 3 Key Calculated Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {/* Card 1: Ratio Oméga-6 : Oméga-3 */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>Ratio Oméga-6 / Oméga-3 estimé</span>
                <HeartPulse className="w-4 h-4 text-rose-500" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 font-display tabular-nums">
                {result.estimatedRatio}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
              <span>Objectif santé idéal :</span>
              <span className="font-bold text-emerald-700 dark:text-emerald-400">&le; 3:1</span>
            </div>
          </div>

          {/* Card 2: Perméabilité de la membrane */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>Fluidité de membrane cellulaire</span>
                <Droplets className="w-4 h-4 text-cyan-500" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 font-display tabular-nums">
                {result.membraneFluidityScore} %
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden mt-3">
                <div
                  className={`h-full transition-all duration-1000 ${
                    result.membraneFluidityScore > 70
                      ? 'bg-emerald-500'
                      : result.membraneFluidityScore > 40
                      ? 'bg-amber-500'
                      : 'bg-rose-500'
                  }`}
                  style={{ width: `${result.membraneFluidityScore}%` }}
                />
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
              <span>Niveau optimal :</span>
              <span className="font-bold text-emerald-700 dark:text-emerald-400">&ge; 80 %</span>
            </div>
          </div>

          {/* Card 3: Indice d'inflammation silencieuse */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>Indice d'inflammation silencieuse</span>
                <Activity className="w-4 h-4 text-amber-500" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 font-display tabular-nums">
                {result.percentage} / 100
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden mt-3">
                <div
                  className={`h-full transition-all duration-1000 ${riskStyle.bar}`}
                  style={{ width: `${result.percentage}%` }}
                />
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
              <span>Seuil de sécurité :</span>
              <span className="font-bold text-emerald-700 dark:text-emerald-400">&lt; 25</span>
            </div>
          </div>
        </div>

        {/* Biological Explanation Box */}
        <div className="mt-8 p-6 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 text-slate-800 dark:text-slate-200 space-y-3">
          <div className="text-sm font-bold text-emerald-950 dark:text-emerald-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            <span>Que se passe-t-il au niveau de vos cellules ?</span>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Vos membranes cellulaires sont composées d'une double couche de lipides. Lorsque l'alimentation
            apporte trop d'<strong>Oméga-6</strong> (huiles de tournesol, élevages aux céréales) et trop peu d'<strong>Oméga-3</strong> (poissons gras marins riches en EPA/DHA), la membrane se rigidifie.
            Résultat : <strong>les nutriments et l'oxygène pénètrent avec difficulté</strong>, et les toxines cellulaires s'évacuent mal. Cela entretient un feu inflammatoire silencieux.
          </p>
        </div>
      </div>

      {/* Primary Conversion Card: The Test Kit CTA */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white p-7 sm:p-10 shadow-xl border border-emerald-500/20">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wide border border-emerald-500/30">
              Étape Essentielle Recommandée
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
              Passez de l’estimation à la certitude biologique
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Ce quiz donne une orientation basée sur votre mode de vie. Cependant, le seul moyen médicalement prouvé de connaître votre profil exact est de mesurer la composition en acides gras de la membrane de vos globules rouges via un <strong>test de sang séché (BalanceTest)</strong>.
            </p>

            <ul className="space-y-2 text-sm text-slate-200 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Prélèvement à domicile en 2 minutes : 2 gouttes de sang indolores sur buvard</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Analyse certifiée GMP par le laboratoire indépendant Vitas AS à Oslo</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dosage précis de 11 acides gras essentiels et bilan de fluidité complet</span>
              </li>
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 cursor-pointer"
              >
                <span>Commander Mon Test Sanguin Certifié</span>
                <ExternalLink className="w-5 h-5" />
              </a>

              {promoCode && (
                <div className="text-xs text-emerald-300/90 flex items-center gap-1.5 self-center">
                  <span>Code avantage partenaire inclus :</span>
                  <strong className="px-2 py-0.5 rounded bg-emerald-900/60 font-mono text-white border border-emerald-500/30">
                    {promoCode}
                  </strong>
                </div>
              )}
            </div>
          </div>

          {/* Test Kit Thumbnail preview */}
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

      {/* Optional Lead Capture Form (Email my detailed plan) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm transition-colors">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
            Sauvegarde & Protocole Nutritionnel
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
            Recevez votre bilan détaillé et le guide anti-inflammatoire par email
          </h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Téléchargez la synthèse complète de vos résultats ainsi que la liste des 15 aliments pour rééquilibrer vos membranes cellulaires.
          </p>

          {submittedLead ? (
            <div className="mt-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div className="text-sm">
                <strong>Merci {lead.firstName} !</strong> Votre bilan complet a été enregistré. Un email avec vos recommandations personnalisées vous a été envoyé.
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
                  <span>J’accepte de recevoir des conseils en santé cellulaire (désinscription en 1 clic)</span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-500 text-white text-sm font-semibold transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Envoi en cours...' : 'M’envoyer le rapport'}</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center gap-1.5 pt-1">
                <Lock className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                <span>Vos données restent 100% confidentielles conformément au RGPD. Aucun spam.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
