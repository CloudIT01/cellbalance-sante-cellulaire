import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Le prélèvement à domicile est-il douloureux ou difficile à réaliser ?',
      answer:
        'Pas du tout ! Le kit contient des lancettes stériles automatiques de dernière génération. Il suffit de nettoyer le bout du doigt avec la lingette antiseptique fournie, d’appuyer légèrement la lancette (un micro-picotement de moins d’une seconde), et de déposer quelques gouttes de sang sur le papier buvard. Tout est réalisable seul en moins de 2 minutes chrono.'
    },
    {
      question: 'Pourquoi une prise de sang classique chez mon médecin ne mesure-t-elle pas cela ?',
      answer:
        'Les prises de sang conventionnelles en laboratoire de ville dosent les graisses circulantes dans le sérum (triglycérides, cholestérol HDL/LDL). Ces valeurs fluctuent en quelques heures selon votre dernier repas. À l’inverse, le test sanguin séché mesure les acides gras intégrés dans la bicouche lipidique de la membrane des hématies (globules rouges). Cela reflète environ les 120 derniers jours.'
    },
    {
      question: 'Quel laboratoire analyse mon prélèvement et avec quelles garanties ?',
      answer:
        'Votre échantillon est analysé par Vitas AS à Oslo (Norvège), un laboratoire analytique indépendant. Selon Zinzino, il est certifié GMP et accrédité ISO 15189, et collabore avec des institutions de recherche internationales.'
    },
    {
      question: 'Mes résultats sont-ils confidentiels et protégés ?',
      answer:
        'Votre prélèvement n’est identifié que par un code alphanumérique unique situé sur votre carte. Seul vous possédez ce code personnel pour vous connecter à la plateforme sécurisée et consulter vos résultats.'
    },
    {
      question: 'Comment interpréter mes résultats et que faire si mon ratio est déséquilibré ?',
      answer:
        'Votre rapport de résultats en ligne détaille la proportion de 11 acides gras et votre ratio Oméga-6 : Oméga-3. Si votre ratio dépasse l’objectif de 3:1 (ce qui est le cas de plus de 95 % des Européens testés, selon Zinzino), Zinzino propose un protocole associant huile d’Oméga-3 et polyphénols d’olive, avec un nouveau test environ 120 jours plus tard pour suivre l’évolution de votre ratio. Les résultats varient d’une personne à l’autre ; pour toute question de santé, demandez conseil à un professionnel de santé.'
    },
    {
      question: 'Combien de temps faut-il pour recevoir les résultats ?',
      answer:
        'Une fois votre enveloppe T préaffranchie déposée dans une boîte aux lettres de La Poste, elle arrive au laboratoire d’Oslo en quelques jours. L’analyse par spectrométrie de masse prend généralement 10 à 15 jours ouvrés. Vous recevez une alerte email dès que votre rapport complet est disponible.'
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#F9FBFA] dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-2">
            Réponses Claires & Transparence
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Questions Fréquemment Posées
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Tout ce que vous devez savoir sur le test sanguin à domicile, l'analyse en laboratoire et la démarche cellulaire.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white text-sm sm:text-base cursor-pointer hover:text-emerald-800 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600 dark:text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
