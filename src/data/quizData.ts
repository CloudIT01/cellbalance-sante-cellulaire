import { QuizQuestion, QuizAnalysisResult, RiskLevel } from '../types/quiz';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1_fish',
    category: 'nutrition',
    categoryLabel: 'Pôle 1 : Apports Alimentaires en Lipides',
    title: 'À quelle fréquence consommez-vous des poissons gras sauvages (sardines, maquereaux, anchois, saumon sauvage) ?',
    description: 'Ces poissons sont la seule source directe et hautement biodisponible en acides gras polyinsaturés Oméga-3 à longue chaîne (EPA et DHA).',
    options: [
      {
        id: 'opt1',
        label: 'Au moins 2 à 3 fois par semaine',
        sublabel: 'Régime riche en poissons gras frais ou marinés',
        points: 0,
        omegaRiskFactor: 0.1
      },
      {
        id: 'opt2',
        label: 'Environ 1 fois par semaine',
        sublabel: 'Consommation occasionnelle',
        points: 1,
        omegaRiskFactor: 0.4
      },
      {
        id: 'opt3',
        label: 'Rarement (1 à 2 fois par mois)',
        sublabel: 'Préfère les viandes ou poissons blancs',
        points: 2,
        omegaRiskFactor: 0.75
      },
      {
        id: 'opt4',
        label: 'Jamais ou presque jamais',
        sublabel: 'Végétarien, végan ou aversion pour les produits marins',
        points: 3,
        omegaRiskFactor: 1.0
      }
    ],
    scientificTip: '95 % de la population européenne ne consomme pas assez d’EPA/DHA pour protéger ses membranes cellulaires de l’oxydation.'
  },
  {
    id: 'q2_oils',
    category: 'nutrition',
    categoryLabel: 'Pôle 1 : Apports Alimentaires en Lipides',
    title: 'Quelle est la place des huiles riches en Oméga-6 et des produits industriels dans vos repas ?',
    description: 'Huile de tournesol, maïs, soja, plats préparés, sauces industrielles, viennoiseries, fritures et snacks.',
    options: [
      {
        id: 'opt1',
        label: 'Quotidienne ou très fréquente',
        sublabel: 'Repas à l’extérieur, plats cuisinés, cuisson au tournesol/friture',
        points: 3,
        omegaRiskFactor: 1.0
      },
      {
        id: 'opt2',
        label: 'Modérée (plusieurs fois par semaine)',
        sublabel: 'Mélange de cuisine maison et de produits transformés',
        points: 2,
        omegaRiskFactor: 0.65
      },
      {
        id: 'opt3',
        label: 'Faible et contrôlée',
        sublabel: 'Cuisine maison majoritaire, huiles vierges d’olive et de colza',
        points: 1,
        omegaRiskFactor: 0.3
      },
      {
        id: 'opt4',
        label: 'Strictement évitée',
        sublabel: '100% bio brut, aucune huile de tournesol ou plat industriel',
        points: 0,
        omegaRiskFactor: 0.05
      }
    ],
    scientificTip: 'L’excès d’acide linoléique (Oméga-6) sature les enzymes de conversion et génère des médiateurs pro-inflammatoires (acide arachidonique).'
  },
  {
    id: 'q3_fatigue',
    category: 'symptoms',
    categoryLabel: 'Pôle 2 : Signes Cellulaires & Énergie',
    title: 'Ressentez-vous une fatigue inexpliquée ou un manque d’énergie au réveil ?',
    description: 'Quand les membranes cellulaires manquent de fluidité, le passage de l’oxygène et des nutriments vers les mitochondries est ralenti.',
    options: [
      {
        id: 'opt1',
        label: 'Souvent : réveil lourd, coup de pompe dès 14h-15h',
        sublabel: 'Besoin fréquent de stimulants (café, sucre) pour tenir',
        points: 3,
        omegaRiskFactor: 0.9
      },
      {
        id: 'opt2',
        label: 'Par périodes : fluctuations d’énergie régulières',
        sublabel: 'Fatigue variable selon le niveau de charge mentale',
        points: 2,
        omegaRiskFactor: 0.6
      },
      {
        id: 'opt3',
        label: 'Rarement : bonne vitalité globale',
        sublabel: 'Coup de fatigue uniquement après une nuit trop courte',
        points: 1,
        omegaRiskFactor: 0.25
      },
      {
        id: 'opt4',
        label: 'Jamais : énergie stable et dynamique toute la journée',
        sublabel: 'Réveil alerte et récupération naturelle rapide',
        points: 0,
        omegaRiskFactor: 0.05
      }
    ],
    scientificTip: 'Les mitochondries ("centrales énergétiques" cellulaires) ont besoin d’acides gras polyinsaturés flexibles pour produire l’ATP.'
  },
  {
    id: 'q4_joints',
    category: 'symptoms',
    categoryLabel: 'Pôle 2 : Signes Cellulaires & Énergie',
    title: 'Ressentez-vous des raideurs musculaires ou une sensibilité articulaire au réveil ?',
    description: 'Une inflammation de bas grade non régulée se manifeste d’abord par des tensions ligamentaires et articulaires au lever.',
    options: [
      {
        id: 'opt1',
        label: 'Oui, raideurs ou gênes articulaires fréquentes le matin',
        sublabel: 'Besoin d’un temps de dérouillage avant d’être à l’aise',
        points: 3,
        omegaRiskFactor: 0.9
      },
      {
        id: 'opt2',
        label: 'Parfois, après un effort physique ou par temps humide',
        sublabel: 'Courbatures qui persistent plus de 48h',
        points: 2,
        omegaRiskFactor: 0.6
      },
      {
        id: 'opt3',
        label: 'Très occasionnellement',
        sublabel: 'Tensions légères passagères',
        points: 1,
        omegaRiskFactor: 0.25
      },
      {
        id: 'opt4',
        label: 'Non, articulations et muscles souples sans gêne',
        sublabel: 'Excellente mobilité et récupération articulaire',
        points: 0,
        omegaRiskFactor: 0.05
      }
    ],
    scientificTip: 'L’EPA permet la synthèse des résolvines et protectines, des molécules qui éteignent naturellement les feux inflammatoires articulaires.'
  },
  {
    id: 'q5_skin',
    category: 'symptoms',
    categoryLabel: 'Pôle 2 : Signes Cellulaires & Énergie',
    title: 'Comment qualifieriez-vous l’état de votre peau, de vos yeux et de vos cheveux ?',
    description: 'La peau et les muqueuses sont le miroir direct de la qualité lipidique de vos membranes cellulaires.',
    options: [
      {
        id: 'opt1',
        label: 'Peau sèche, tiraillements fréquents, rougeurs ou sécheresse oculaire',
        sublabel: 'Tendance aux irritations, cheveux secs ou ongles cassants',
        points: 3,
        omegaRiskFactor: 0.85
      },
      {
        id: 'opt2',
        label: 'Peau mixte à déshydratée selon la saison',
        sublabel: 'Nécessite une hydratation constante pour ne pas tirailler',
        points: 2,
        omegaRiskFactor: 0.5
      },
      {
        id: 'opt3',
        label: 'Peau normale avec peu de sensibilité',
        sublabel: 'Confort cutané satisfaisant',
        points: 1,
        omegaRiskFactor: 0.2
      },
      {
        id: 'opt4',
        label: 'Peau souple, lumineuse et bien hydratée naturellement',
        sublabel: 'Barrière lipidique cutanée optimale',
        points: 0,
        omegaRiskFactor: 0.05
      }
    ],
    scientificTip: 'Une membrane cellulaire appauvrie en acides gras essentiels perd sa capacité de rétention d’eau intracellulaire.'
  },
  {
    id: 'q6_brain',
    category: 'cognitive',
    categoryLabel: 'Pôle 3 : Clarté Mentale & Fonctions Cérébrales',
    title: 'Éprouvez-vous du brouillard mental (brain fog), des baisses de concentration ou de l’irritabilité ?',
    description: 'Le cerveau est composé à plus de 60 % de graisses, dont une part majeure de DHA constituant les synapses nerveuses.',
    options: [
      {
        id: 'opt1',
        label: 'Fréquemment : difficulté à me concentrer, charge mentale pesante',
        sublabel: 'Perte de vivacité cognitive en fin de matinée ou d’après-midi',
        points: 3,
        omegaRiskFactor: 0.95
      },
      {
        id: 'opt2',
        label: 'Modérément : sautes de concentration en période de stress',
        sublabel: 'Humeur plus réactive que souhaité',
        points: 2,
        omegaRiskFactor: 0.6
      },
      {
        id: 'opt3',
        label: 'Rarement : esprit clair la plupart du temps',
        sublabel: 'Bonne mémoire de travail et gestion du stress',
        points: 1,
        omegaRiskFactor: 0.2
      },
      {
        id: 'opt4',
        label: 'Jamais : concentration soutenue, clarté mentale et calme',
        sublabel: 'Excellente résilience émotionnelle',
        points: 0,
        omegaRiskFactor: 0.05
      }
    ],
    scientificTip: 'Le DHA est le carburant structural de la gaine de myéline et assure la vitesse de conduction des signaux neuronaux.'
  },
  {
    id: 'q7_immunity',
    category: 'immunity',
    categoryLabel: 'Pôle 4 : Résilience Immunitaire',
    title: 'Comment réagit votre organisme aux changements de saison et aux agressions extérieures ?',
    description: 'L’équilibre des acides gras régule la balance entre la réponse immunitaire protectrice et l’auto-inflammation chronique.',
    options: [
      {
        id: 'opt1',
        label: 'Je contracte facilement les coups de froid et mets du temps à récupérer',
        sublabel: 'Système immunitaire souvent mis à rude épreuve',
        points: 3,
        omegaRiskFactor: 0.85
      },
      {
        id: 'opt2',
        label: '1 à 2 épisodes par an avec baisse de régime notable',
        sublabel: 'Résilience moyenne face aux virus de saison',
        points: 2,
        omegaRiskFactor: 0.55
      },
      {
        id: 'opt3',
        label: 'Très résistant, épisodes très rares et vite surmontés',
        sublabel: 'Défenses naturelles efficaces',
        points: 1,
        omegaRiskFactor: 0.2
      },
      {
        id: 'opt4',
        label: 'Excellente immunité, je ne suis pratiquement jamais malade',
        sublabel: 'Récupération rapide et vitalité inaltérée',
        points: 0,
        omegaRiskFactor: 0.05
      }
    ],
    scientificTip: 'L’EFSA (Autorité Européenne de Sécurité des Aliments) reconnaît le rôle fondamental des Oméga-3 EPA/DHA dans l’équilibre immunitaire.'
  }
];

export function calculateQuizResult(answers: Record<string, string>): QuizAnalysisResult {
  let totalScore = 0;
  let maxScore = 0;
  let riskFactorSum = 0;
  let questionCount = 0;

  for (const q of QUIZ_QUESTIONS) {
    maxScore += 3;
    questionCount++;
    const selectedOptionId = answers[q.id];
    const option = q.options.find((opt) => opt.id === selectedOptionId);
    if (option) {
      totalScore += option.points;
      riskFactorSum += option.omegaRiskFactor;
    } else {
      // Default fallback
      totalScore += 2;
      riskFactorSum += 0.6;
    }
  }

  const percentage = Math.round((totalScore / maxScore) * 100);
  const avgRisk = riskFactorSum / questionCount;

  let riskLevel: RiskLevel = 'moderate';
  let riskTitle = 'Déséquilibre modéré à surveiller';
  let riskDescription = 'Vos réponses révèlent des premiers signes d’inflammation de bas grade et un apport d’Oméga-3 probablement insuffisant pour compenser vos apports en Oméga-6.';
  let estimatedRatio = '12:1 à 18:1';
  let targetRatio = '3:1 ou inférieur';
  let membraneFluidityScore = 45; // percentage

  if (avgRisk >= 0.75 || percentage >= 70) {
    riskLevel = 'critical';
    riskTitle = 'Risque élevé d’inflammation cellulaire silencieuse';
    riskDescription = 'Vos cellules subissent un stress lipidique majeur. La surreprésentation d’Oméga-6 pro-inflammatoires dans vos tissus rigifie vos membranes cellulaires et entrave la microcirculation et l’élimination des toxines.';
    estimatedRatio = '22:1 à 35:1';
    membraneFluidityScore = 24;
  } else if (avgRisk >= 0.45 || percentage >= 45) {
    riskLevel = 'elevated';
    riskTitle = 'Déséquilibre lipidique cellulaire significatif';
    riskDescription = 'Votre profil indique une membrane cellulaire fragilisée. Bien que votre organisme compense pour l’instant, ce déséquilibre chronique nourrit une fatigue récurrente et une baisse de résilience articulaire et cognitive.';
    estimatedRatio = '15:1 à 22:1';
    membraneFluidityScore = 42;
  } else if (avgRisk >= 0.25 || percentage >= 25) {
    riskLevel = 'moderate';
    riskTitle = 'Déséquilibre modéré : vigilance recommandée';
    riskDescription = 'Votre mode de vie présente des points forts, mais des signaux faibles (récupération, peau, concentration) laissent présager un ratio Oméga-6:3 supérieur aux recommandations des autorités de santé.';
    estimatedRatio = '8:1 à 14:1';
    membraneFluidityScore = 65;
  } else {
    riskLevel = 'optimal';
    riskTitle = 'Profil protecteur favorable';
    riskDescription = 'Excellents apports alimentaires et bonne souplesse cellulaire apparente. Néanmoins, seul un dosage sanguin direct en laboratoire permet de confirmer la concentration réelle en EPA/DHA dans vos érythrocytes.';
    estimatedRatio = '3:1 à 6:1';
    membraneFluidityScore = 88;
  }

  const keyFindings: string[] = [
    `Ratio Oméga-6 / Oméga-3 estimé : ${estimatedRatio} (Norme OMS recommandée ≤ 3:1).`,
    `Score estimé de perméabilité membranaire : ${membraneFluidityScore}% (une membrane souple permet l’entrée des nutriments et la sortie des toxines).`,
    'Tendance marquée à l’accumulation d’acides gras pro-inflammatoires (acide arachidonique issu des huiles et élevages industriels).'
  ];

  const actionPlan: string[] = [
    'Objectiver votre situation réelle par un test sanguin séché sur buvard (BalanceTest) certifié GMP et analysé par un laboratoire indépendant.',
    'Réguler les sources d’huiles végétales industrielles (tournesol, maïs) et privilégier l’huile d’olive vierge extra riche en polyphénols.',
    'Rééquilibrer vos membranes grâce à une huile d’équilibre purifiée combinant Oméga-3 marins sauvages et polyphénols d’olive protecteurs contre l’oxydation.'
  ];

  return {
    totalScore,
    maxScore,
    percentage,
    riskLevel,
    riskTitle,
    riskDescription,
    estimatedRatio,
    targetRatio,
    membraneFluidityScore,
    keyFindings,
    actionPlan
  };
}
