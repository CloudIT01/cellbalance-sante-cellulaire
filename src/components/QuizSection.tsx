import React, { useState } from 'react';
import { QUIZ_QUESTIONS, calculateQuizResult, isQuestionCorrect } from '../data/quizData';
import { ResultReport } from './ResultReport';
import { ArrowRight, ArrowLeft, Lightbulb, Check, X } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const selectedIds = answers[currentQuestion?.id] ?? [];
  const isRevealed = !!revealed[currentQuestion?.id];
  const isCorrect = isQuestionCorrect(currentQuestion, selectedIds);

  const handleSelectOption = (optionId: string) => {
    if (isRevealed) return;
    setAnswers((prev) => {
      const current = prev[currentQuestion.id] ?? [];
      if (currentQuestion.multiple) {
        const next = current.includes(optionId) ? current.filter((id) => id !== optionId) : [...current, optionId];
        return { ...prev, [currentQuestion.id]: next };
      }
      return { ...prev, [currentQuestion.id]: [optionId] };
    });
  };

  const handleValidate = () => {
    if (selectedIds.length === 0) return;
    setRevealed((prev) => ({ ...prev, [currentQuestion.id]: true }));
  };

  const handleNext = () => {
    if (!isRevealed) return;
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
    setRevealed({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const progressPercent = Math.round(((currentStep + (isCompleted ? 1 : 0)) / totalQuestions) * 100);

  return (
    <section id="quiz" className="py-8 sm:py-12 bg-[#F8FAF9] dark:bg-slate-900/60 border-t border-b border-emerald-950/5 dark:border-slate-800 scroll-mt-20 transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Titre de section */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1">
            <span>Quiz de connaissances</span>
            <span aria-hidden="true">·</span>
            <span>{totalQuestions} questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight text-balance">
            Que savez-vous de la santé cellulaire et des oméga ?
          </h2>
          <p className="mt-1 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            Testez vos connaissances en quelques minutes. Ce quiz est éducatif : il ne mesure pas votre état de santé.
          </p>
        </div>

        {!isCompleted ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 sm:p-6 lg:p-7 transition-all">
            {/* Progression */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
                  {currentQuestion.topic}
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

            {/* Question */}
            <div className="space-y-1 mb-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display leading-snug">
                {currentQuestion.title}
              </h3>
              {currentQuestion.multiple && (
                <p className="text-xs text-slate-500 dark:text-slate-400">Plusieurs réponses possibles.</p>
              )}
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-2.5 mb-4">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedIds.includes(option.id);
                const showCorrect = isRevealed && option.correct;
                const showWrong = isRevealed && isSelected && !option.correct;

                let style =
                  'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/90 hover:bg-slate-50/70 dark:hover:bg-slate-800/60';
                if (isSelected && !isRevealed) {
                  style =
                    'border-emerald-600 dark:border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 shadow-xs ring-1 ring-emerald-500/20';
                }
                if (showCorrect) {
                  style = 'border-emerald-600 dark:border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50';
                }
                if (showWrong) {
                  style = 'border-rose-500 dark:border-rose-500 bg-rose-50 dark:bg-rose-950/30';
                }

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleSelectOption(option.id)}
                    disabled={isRevealed}
                    aria-pressed={isSelected}
                    className={`w-full text-left p-3 sm:p-3.5 rounded-xl border transition-all duration-150 flex items-start gap-3 ${
                      isRevealed ? 'cursor-default' : 'cursor-pointer'
                    } ${style}`}
                  >
                    <div
                      className={`w-4 h-4 ${currentQuestion.multiple ? 'rounded' : 'rounded-full'} border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        showCorrect
                          ? 'border-emerald-600 bg-emerald-600 text-white'
                          : showWrong
                          ? 'border-rose-500 bg-rose-500 text-white'
                          : isSelected
                          ? 'border-emerald-600 dark:border-emerald-500 bg-emerald-600 dark:bg-emerald-500 text-white'
                          : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800'
                      }`}
                    >
                      {showWrong ? (
                        <X className="w-2.5 h-2.5 stroke-[3]" />
                      ) : (isSelected || showCorrect) ? (
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      ) : null}
                    </div>
                    <div className="flex-1 min-w-0 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                      {option.label}
                      {showCorrect && <span className="sr-only"> (bonne réponse)</span>}
                      {showWrong && <span className="sr-only"> (réponse incorrecte)</span>}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explication après validation */}
            {isRevealed && (
              <div
                className="p-2.5 sm:p-3 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs flex items-start gap-2.5 mb-4"
                role="status"
              >
                <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="leading-snug text-[11px] sm:text-xs text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-800 dark:text-slate-200 font-semibold">
                    {isCorrect ? 'Bonne réponse. ' : 'Pas tout à fait. '}
                  </strong>
                  {currentQuestion.explanation}
                </div>
              </div>
            )}

            {/* Navigation */}
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

              {!isRevealed ? (
                <button
                  type="button"
                  onClick={handleValidate}
                  disabled={selectedIds.length === 0}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 disabled:opacity-40 disabled:pointer-events-none rounded-xl shadow-xs hover:shadow transition-all duration-150 cursor-pointer"
                >
                  <span>Valider ma réponse</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-xl shadow-xs hover:shadow transition-all duration-150 cursor-pointer"
                >
                  <span>{currentStep === totalQuestions - 1 ? 'Voir mon score' : 'Question suivante'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <ResultReport result={calculateQuizResult(answers)} onReset={handleReset} />
        )}
      </div>
    </section>
  );
};
