import { QuizQuestion, QuizResult } from '../types/quiz';

// Quiz de connaissances (version validée par Charly le 2026-11-06).
// Contenu éducatif : aucune allégation thérapeutique, chiffres attribués à Zinzino.
// Q4 : formulation de l'allégation DHA alignée sur le règlement (UE) n° 432/2012 (EUR-Lex, vérifié le 2026-11-06).

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1_membrane',
    topic: "La membrane cellulaire",
    title: "Quel est le rôle fondamental de la membrane cellulaire ?",
    multiple: false,
    options: [
      { id: 'a', label: "Elle synthétise directement le glucose nécessaire à la cellule.", correct: false },
      { id: 'b', label: "Elle régule les échanges entre la cellule et l’extérieur.", correct: true },
      { id: 'c', label: "Elle sert uniquement de barrière contre les rayons ultraviolets.", correct: false },
      { id: 'd', label: "Elle bloque en permanence tout échange avec l’extérieur.", correct: false },
    ],
    explanation:
      "La membrane contrôle les échanges de la cellule avec son environnement. Selon Zinzino, sa composition en acides gras influence sa souplesse.",
  },
  {
    id: 'q2_ratio',
    topic: "Le ratio cible",
    title: "Quel ratio oméga-6 / oméga-3 Zinzino fixe-t-il comme objectif avec son protocole ?",
    multiple: false,
    options: [
      { id: 'a', label: "3:1 ou moins", correct: true },
      { id: 'b', label: "20:1", correct: false },
      { id: 'c', label: "0:1", correct: false },
      { id: 'd', label: "50:1", correct: false },
    ],
    explanation:
      "3:1 ou moins est l’objectif de Zinzino avec son protocole (Balance Concept). Ce n’est pas un seuil médical.",
  },
  {
    id: 'q3_symptomes',
    topic: "Repères et symptômes",
    title: "Peut-on connaître son ratio oméga-6 / oméga-3 à partir de ses symptômes ?",
    multiple: false,
    options: [
      { id: 'a', label: "Oui, la fatigue révèle un déséquilibre.", correct: false },
      { id: 'b', label: "Oui, les douleurs articulaires le confirment.", correct: false },
      { id: 'c', label: "Oui, l’aspect de la peau le révèle.", correct: false },
      { id: 'd', label: "Non, seule une mesure le permet.", correct: true },
    ],
    explanation:
      "Les symptômes ne permettent pas de connaître son ratio : seule une mesure le peut. En cas de gêne, parlez-en à un professionnel de santé.",
  },
  {
    id: 'q4_dha',
    topic: "Le DHA",
    title: "Selon les allégations de santé autorisées dans l’Union européenne, à quoi contribue le DHA ?",
    multiple: false,
    options: [
      { id: 'a', label: "À soigner les maladies du système nerveux central.", correct: false },
      { id: 'b', label: "À transformer les graisses saturées en protéines.", correct: false },
      { id: 'c', label: "Au fonctionnement normal du cerveau (250 mg de DHA par jour).", correct: true },
      { id: 'd', label: "À remplacer l’eau et les minéraux dont le cerveau a besoin.", correct: false },
    ],
    explanation:
      "L’allégation autorisée dans l’Union européenne (règlement (UE) n° 432/2012) est que le DHA contribue au fonctionnement normal du cerveau. L’effet bénéfique est obtenu par une consommation journalière de 250 mg de DHA.",
  },
  {
    id: 'q5_sang_seche',
    topic: "Le prélèvement de sang séché",
    title: "Quelles caractéristiques décrit-on pour le prélèvement de sang séché ?",
    multiple: true,
    options: [
      { id: 'a', label: "Une stabilité à température ambiante, sans chaîne du froid.", correct: true },
      { id: 'b', label: "Une ponction veineuse de plusieurs millilitres à l’hôpital.", correct: false },
      { id: 'c', label: "Une technologie ancienne, utilisée pour le dépistage néonatal.", correct: true },
      { id: 'd', label: "Un autotest à domicile par une piqûre au bout du doigt.", correct: true },
    ],
    explanation:
      "Le sang séché se conserve à température ambiante, repose sur une technologie utilisée depuis plusieurs décennies (notamment pour le dépistage néonatal) et se prélève chez soi par une piqûre au bout du doigt. Aucune ponction veineuse n’est nécessaire.",
  },
  {
    id: 'q6_chiffre',
    topic: "Un chiffre à bien lire",
    title: "Selon Zinzino, quelle proportion des Européens testés présente un ratio déséquilibré lors du premier test ?",
    multiple: false,
    options: [
      { id: 'a', label: "50 %", correct: false },
      { id: 'b', label: "Plus de 95 %", correct: true },
      { id: 'c', label: "10 %", correct: false },
      { id: 'd', label: "2 %", correct: false },
    ],
    explanation:
      "Selon Zinzino, plus de 95 % des Européens testés présentent un ratio déséquilibré lors du premier test. Ce chiffre concerne les personnes qui ont fait le test, pas toute la population.",
  },
  {
    id: 'q7_finalite',
    topic: "La finalité du test",
    title: "Que précise Zinzino sur la finalité du BalanceTest ?",
    multiple: false,
    options: [
      { id: 'a', label: "Il diagnostique des maladies.", correct: false },
      { id: 'b', label: "Il remplace une consultation médicale.", correct: false },
      { id: 'c', label: "Il est réservé aux sportifs de haut niveau.", correct: false },
      { id: 'd', label: "Il mesure des acides gras, sans poser de diagnostic.", correct: true },
    ],
    explanation:
      "Selon la page produit de Zinzino, le BalanceTest mesure des acides gras sur goutte de sang séché et ne sert pas à diagnostiquer, traiter ni guérir une maladie. Il ne remplace pas un avis médical.",
  },
  {
    id: 'q8_rapport',
    topic: "Le rapport du test",
    title: "Quelles mesures figurent dans le rapport du BalanceTest ?",
    multiple: true,
    options: [
      { id: 'a', label: "La glycémie à jeun.", correct: false },
      { id: 'b', label: "L’indice oméga-3 (EPA et DHA).", correct: true },
      { id: 'c', label: "Le ratio oméga-6 / oméga-3.", correct: true },
      { id: 'd', label: "Le niveau d’acide arachidonique (AA).", correct: true },
    ],
    explanation:
      "Le rapport présente notamment l’indice oméga-3, le ratio oméga-6 / oméga-3 et le niveau d’acide arachidonique (AA). Il ne mesure pas la glycémie.",
  },
  {
    id: 'q9_protocole',
    topic: "Le protocole Balance Concept",
    title: "Selon Zinzino, quelle démarche accompagne le Balance Concept ?",
    multiple: false,
    options: [
      { id: 'a', label: "Mesurer son ratio, prendre des oméga-3 et polyphénols d’olive, retester.", correct: true },
      { id: 'b', label: "Supprimer toutes les graisses de son alimentation pendant 120 jours.", correct: false },
      { id: 'c', label: "Augmenter les huiles riches en oméga-6, comme l’huile de soja.", correct: false },
      { id: 'd', label: "Remplacer l’eau par des boissons sucrées au quotidien.", correct: false },
    ],
    explanation:
      "Selon Zinzino, le Balance Concept associe une mesure initiale du ratio, des oméga-3 (EPA/DHA) avec des polyphénols d’olive, puis un second test environ 120 jours plus tard pour suivre l’évolution.",
  },
  {
    id: 'q10_omega6',
    topic: "Oméga-6 et oméga-3",
    title: "Les oméga-6 sont-ils à supprimer de l’alimentation ?",
    multiple: false,
    options: [
      { id: 'a', label: "Oui, ils sont toujours nocifs pour l’organisme.", correct: false },
      { id: 'b', label: "Oui, ils font grossir dès qu’on en consomme.", correct: false },
      { id: 'c', label: "Non : acides gras essentiels, c’est l’équilibre qui compte.", correct: true },
      { id: 'd', label: "Non, car ils réparent les tissus abîmés du corps.", correct: false },
    ],
    explanation:
      "Oméga-6 et oméga-3 sont des acides gras essentiels : le corps ne les fabrique pas, ils viennent de l’alimentation. Selon Zinzino, c’est l’équilibre entre les deux qui compte.",
  },
];

/** Une question est réussie si la sélection correspond exactement aux bonnes réponses. */
export function isQuestionCorrect(question: QuizQuestion, selected: string[] | undefined): boolean {
  if (!selected || selected.length === 0) return false;
  const correctIds = question.options.filter((o) => o.correct).map((o) => o.id).sort();
  const picked = [...selected].sort();
  return correctIds.length === picked.length && correctIds.every((id, i) => id === picked[i]);
}

export function calculateQuizResult(answers: Record<string, string[]>): QuizResult {
  const total = QUIZ_QUESTIONS.length;
  const score = QUIZ_QUESTIONS.filter((q) => isQuestionCorrect(q, answers[q.id])).length;
  const percentage = Math.round((score / total) * 100);

  let title = 'Des bases à consolider';
  let message =
    'Ce sujet est riche et plein de nuances : il est normal de ne pas tout connaître. Reprenez les explications de chaque question pour retenir les repères essentiels.';

  if (score >= 8) {
    title = 'Excellent niveau de connaissances';
    message =
      'Vous maîtrisez l’essentiel sur la membrane cellulaire, les oméga et le principe du test. Pour aller plus loin, la mesure de votre propre ratio est l’étape suivante possible.';
  } else if (score >= 5) {
    title = 'Vous maîtrisez l’essentiel';
    message =
      'Vous avez de bons repères sur la santé cellulaire et les oméga. Relisez les explications des questions manquées pour compléter votre compréhension.';
  }

  return { score, total, percentage, title, message };
}
