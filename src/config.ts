// Configuration centrale de la landing page.
// Les liens affiliés sont fixés ici (fournis par Charly le 2026-11-06), plus de réglage côté visiteur.

/** Page "Découvrir le test" (bouton du Hero). Lien affilié. */
export const EXPLORE_URL = 'https://www.zinzino.com/2017711977/fr/fr-fr/explore/balance-test';

/** Page de commande du test à domicile (bouton "Commander mon test à domicile"). Lien affilié. */
export const ORDER_URL = 'https://www.zinzino.com/shop/2017711977/fr/fr-fr/products/shop/home-health-tests/309000';

/** Mention de transparence affichée sous les boutons de commande. */
export const AFFILIATE_NOTICE = 'Contient un lien affilié Zinzino';

/** Valeur de rel pour les liens affiliés sortants. */
export const AFFILIATE_REL = 'noopener noreferrer sponsored';

/**
 * Lien de la vidéo YouTube publique d'où provient la synthèse des experts.
 * Fourni par Charly le 2026-11-06. Si vide, aucune ligne "Source" n'est affichée.
 */
export const EXPERT_VIDEO_URL = 'https://youtu.be/gpnALPCsExs';

/**
 * Hébergeur de la landing page, tel qu'il doit apparaître dans les mentions légales
 * (nom + adresse). À renseigner quand l'hébergement est choisi : tant qu'il est vide,
 * la section "Hébergement" n'est pas affichée.
 */
export const LEGAL_HOSTING = 'Site hébergé par GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, États-Unis).';

/**
 * Adresse du webhook (Make / n8n) qui reçoit les contacts du formulaire.
 * Définie via la variable d'environnement VITE_LEAD_WEBHOOK_URL au moment du build.
 * Tant qu'elle est vide, le formulaire e-mail n'est pas affiché (aucune promesse d'envoi sans destination réelle).
 */
export const LEAD_WEBHOOK_URL: string = (import.meta.env?.VITE_LEAD_WEBHOOK_URL as string | undefined) ?? '';
