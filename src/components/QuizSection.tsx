import React, { useState } from 'react';
import { QUIZ_QUESTIONS, calculateQuizResult } from '../data/quizData';
import { ResultReport } from './ResultReport';
import { ArrowRight, ArrowLeft, Lightbulb, Check, HelpCircle } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const selectedOptionId = answers[currentQuestion?.id];

  const handleSelectOption = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (!selectedOptionId) return;
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const progressPercent = Math.round(((currentStep + (isCompleted ? 1 : 0)) / totalQuestions) * 100);

  return (
    <section id="quiz" className="py-8 sm:py-12 bg-[#F8FAF9] dark:bg-slate-900/60 border-t border-b border-emerald-950/5 dark:border-slate-800 scroll-mt-20 transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Compact Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1">
            <span>Auto-évaluation Scientifique</span>
            <span aria-hidden="true">·</span>
            <span>7 Questions Rapides</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight text-balance">
            Vos cellules sont-elles en état d’inflammation silencieuse ?
          </h2>
          <p className="mt-1 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            Détectez en moins de 2 minutes les signaux faibles d'un déséquilibre en acides gras essentiels.
          </p>
        </div>

        {/* Quiz Flow Card */}
        {!isCompleted ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 sm:p-6 lg:p-7 transition-all">
            {/* Progress Header */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
                  {currentQuestion.categoryLabel}
                </span>
                <span className="tabular-nums font-medium text-slate-600 dark:text-slate-400 text-[11px]">
                  Question {currentStep + 1} / {totalQuestions}
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-600 dark:bg-emerald-500 h-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question Details */}
            <div className="space-y-1 mb-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display leading-snug">
                {currentQuestion.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {currentQuestion.description}
              </p>
            </div>

            {/* Option Cards: 2x2 Grid on sm+ screens to keep the window ultra-compact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedOptionId === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleSelectOption(option.id)}
                    className={`w-full text-left p-3 sm:p-3.5 rounded-xl border transition-all duration-150 flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? 'border-emerald-600 dark:border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 shadow-xs ring-1 ring-emerald-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/90 hover:bg-slate-50/70 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? 'border-emerald-600 dark:border-emerald-500 bg-emerald-600 dark:bg-emerald-500 text-white'
                          : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800'
                      }`}
                    >
                      {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                        {option.label}
                      </div>
                      {option.sublabel && (
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                          {option.sublabel}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Compact Scientific Tip Box */}
            <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs flex items-center gap-2.5 mb-4">
              <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div className="leading-tight text-[11px] sm:text-xs text-slate-600 dark:text-slate-300">
                <strong className="text-slate-800 dark:text-slate-200 font-semibold">Repère : </strong>
                {currentQuestion.scientificTip}
              </div>
            </div>

            {/* Navigation Buttons: Always directly in view */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Précédent</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!selectedOptionId}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 disabled:opacity-40 disabled:pointer-events-none rounded-xl shadow-xs hover:shadow transition-all duration-150 cursor-pointer"
              >
                <span>{currentStep === totalQuestions - 1 ? 'Calculer mon Bilan Cellulaire' : 'Question Suivante'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <ResultReport
            result={calculateQuizResult(answers)}
            onReset={handleReset}
          />
        )}
      </div>
    </section>
  );
};
