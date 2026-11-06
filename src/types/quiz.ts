export interface QuizOption {
  id: string;
  label: string;
  correct: boolean;
}

export interface QuizQuestion {
  id: string;
  topic: string; // petit libellé de thème affiché au-dessus de la question
  title: string;
  multiple: boolean; // true : plusieurs bonnes réponses possibles
  options: QuizOption[];
  explanation: string; // affichée après validation
}

export interface QuizResult {
  score: number; // nombre de questions réussies
  total: number;
  percentage: number;
  title: string;
  message: string;
}

export interface LeadData {
  firstName: string;
  email: string;
  phone?: string;
  optInNewsletter: boolean;
}
