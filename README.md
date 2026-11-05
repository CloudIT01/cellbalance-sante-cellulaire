# CellBalance - Landing Page Santé Cellulaire & Test Sanguin Oméga-3

Une landing page professionnelle, moderne et responsive pour sensibiliser aux enjeux de la **santé cellulaire**, proposer un **quiz interactif d'auto-évaluation sur l'inflammation silencieuse** et convertir les prospects vers l'achat d'un **test sanguin séché de ratio Oméga-6 / Oméga-3** (BalanceTest) via un lien d'affiliation personnalisable.

---

## 🧬 Fonctionnalités Principales

- **Quiz d'Auto-Évaluation Interactif (7 Questions)** :
  - Évalue les apports alimentaires en acides gras marins (EPA/DHA) et huiles industrielles riches en Oméga-6.
  - Détecte les signaux faibles d'inflammation silencieuse (fatigue, raideurs matinales, sécheresse cutanée, brouillard mental, immunité).
  - Format ultra-compact en grille 2x2 tenant entièrement dans l'écran sans scroll forcé.
- **Moteur de Calcul & Scoring Biologique Immédiat** :
  - Estimation personnalisée du **ratio Oméga-6 : Oméga-3** (ex. 15:1 à 25:1 vs norme $\le$ 3:1).
  - Score de **fluidité et perméabilité de la membrane cellulaire** (en %).
  - Indice de risque d'inflammation silencieuse avec explications physiologiques claires.
- **Gestionnaire de Lien d'Affiliation Intégré** :
  - Modalité de configuration accessible via l'icône ⚙️ dans le header et le footer.
  - Permet d'insérer votre propre URL d'affiliation (ex. boutique Zinzino, lien tracké) et votre code promo personnalisé.
  - Sauvegarde locale automatique (`localStorage`) et application immédiate à tous les boutons CTA.
- **Section Scientifique & Visuelle 3D** :
  - Diagramme de la bicouche phospholipidique de la membrane cellulaire.
  - Comparatif cellule souple et fluide vs cellule rigide et inflammée.
- **Présentation du Kit de Test Sanguin Séché (DBS)** :
  - 3 étapes simples de prélèvement à domicile en 2 minutes.
  - Analyse certifiée par le laboratoire indépendant **Vitas AS** à Oslo (normes GMP et ISO 15189).
- **Caution Médicale & Témoignages Chiffrés** :
  - Intervention d'expert en micronutrition.
  - Évolutions réelles de ratios mesurés avant/après 120 jours de protocole.
- **Outils d'Intégration WordPress & Automatisation** :
  - Code d'intégration HTML / iFrame responsive pour Gutenberg, Elementor et Divi.
  - Code PHP prêt à l'emploi (extension ou `functions.php`) avec le shortcode `[cellbalance_quiz]`.
  - Schéma JSON pour Webhook **Make.com** ou **n8n** pour synchroniser les leads vers votre autorépondeur (Brevo, Mailchimp, HubSpot).

---

## 🚀 Installation & Démarrage Local

```bash
# 1. Cloner le dépôt
git clone <URL_DE_VOTRE_DEPOT_GITHUB>
cd <NOM_DU_DOSSIER>

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:3000`.

---

## 📦 Build & Production

```bash
npm run build
```

Les fichiers statiques de production seront générés dans le dossier `/dist`.

---

## ⚖️ Conformité & Mentions

- **Avertissement médical** : Fourni à titre d'information et d'orientation nutritionnelle, ne remplace pas un avis médical.
- **Transparence affiliation** : Conforme aux exigences de transparence publicitaire et RGPD.
