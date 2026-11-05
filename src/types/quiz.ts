export interface QuizOption {
  id: string;
  label: string;
  sublabel?: string;
  points: number; // 0 (ideal) to 3 (high risk)
  omegaRiskFactor: number; // impact on calculated ratio
}

export interface QuizQuestion {
  id: string;
  category: 'nutrition' | 'symptoms' | 'cognitive' | 'immunity';
  categoryLabel: string;
  title: string;
  description: string;
  options: QuizOption[];
  scientificTip: string;
}

export interface QuizState {
  answers: Record<string, string>; // questionId -> optionId
  currentStep: number;
  isCompleted: boolean;
}

export type RiskLevel = 'optimal' | 'moderate' | 'elevated' | 'critical';

export interface QuizAnalysisResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  riskLevel: RiskLevel;
  riskTitle: string;
  riskDescription: string;
  estimatedRatio: string;
  targetRatio: string;
  membraneFluidityScore: number; // 0 - 100%
  keyFindings: string[];
  actionPlan: string[];
}

export interface LeadData {
  firstName: string;
  email: string;
  phone?: string;
  optInNewsletter: boolean;
}
