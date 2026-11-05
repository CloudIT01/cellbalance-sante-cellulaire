import React, { useState } from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { X, Copy, Check, Code, FileCode, Zap, Layers } from 'lucide-react';

export const WordPressExportModal: React.FC = () => {
  const { isWordPressExportOpen, setIsWordPressExportOpen, affiliateUrl } = useAffiliate();
  const [activeTab, setActiveTab] = useState<'embed' | 'php' | 'automation'>('embed');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isWordPressExportOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const embedCode = `<!-- CellBalance Quiz Embed pour WordPress (Gutenberg / Elementor / Divi) -->
<div id="cellbalance-quiz-wrapper" style="width: 100%; max-width: 900px; margin: 0 auto;">
  <iframe
    src="${typeof window !== 'undefined' ? window.location.origin : 'https://votre-domaine.com'}/#quiz"
    width="100%"
    height="850"
    style="border: none; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);"
    title="Quiz Santé Cellulaire & Ratio Oméga-3"
    loading="lazy"
    allow="clipboard-write"
  ></iframe>
</div>`;

  const phpPluginCode = `<?php
/**
 * Plugin Name: CellBalance Quiz & Santé Cellulaire
 * Description: Intègre le quiz de santé cellulaire et le lien d'affiliation vers le test sanguin Oméga-3.
 * Version: 1.0.0
 * Author: CellBalance
 */

if (!defined('ABSPATH')) exit;

function cellbalance_register_quiz_shortcode($atts) {
    $a = shortcode_atts(array(
        'affiliate' => '${affiliateUrl}',
        'height'    => '850',
    ), $atts);

    $app_url = '${typeof window !== 'undefined' ? window.location.origin : 'https://votre-domaine.com'}';
    $target_src = esc_url($app_url . '/#quiz');

    ob_start();
    ?>
    <div class="cellbalance-container" style="max-width: 960px; margin: 2rem auto; width: 100%;">
        <iframe 
            src="<?php echo $target_src; ?>" 
            width="100%" 
            height="<?php echo esc_attr($a['height']); ?>" 
            style="border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; width: 100%; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);"
            loading="lazy">
        </iframe>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('cellbalance_quiz', 'cellbalance_register_quiz_shortcode');
`;

  const makeJsonSchema = `{
  "event": "quiz_completed",
  "first_name": "Sophie",
  "email": "sophie@exemple.com",
  "score_inflammation": 78,
  "risk_level": "elevated",
  "estimated_ratio": "18:1",
  "membrane_fluidity": "35%",
  "affiliate_url": "${affiliateUrl}",
  "timestamp": "2026-11-05T09:30:00Z"
}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh] animate-fadeIn">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
              <span>Export & Intégration WordPress & Automation</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Code prêt à l'emploi pour insérer le quiz sur votre site WordPress ou automatiser vos leads avec Make / n8n.
            </p>
          </div>
          <button
            onClick={() => setIsWordPressExportOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 pt-3 bg-white dark:bg-slate-900 gap-4">
          <button
            onClick={() => setActiveTab('embed')}
            className={`pb-3 text-xs font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'embed'
                ? 'border-emerald-600 text-emerald-700 dark:border-emerald-400 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>1. Intégration Rapide (HTML / iFrame)</span>
          </button>

          <button
            onClick={() => setActiveTab('php')}
            className={`pb-3 text-xs font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'php'
                ? 'border-emerald-600 text-emerald-700 dark:border-emerald-400 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>2. Plugin / Shortcode WordPress PHP</span>
          </button>

          <button
            onClick={() => setActiveTab('automation')}
            className={`pb-3 text-xs font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'automation'
                ? 'border-emerald-600 text-emerald-700 dark:border-emerald-400 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>3. Webhook Make.com / n8n</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {activeTab === 'embed' && (
            <div className="space-y-3">
              <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Copiez ce code et collez-le directement dans un bloc <strong>« HTML personnalisé »</strong> sur WordPress (Gutenberg, Elementor, Divi ou Beaver Builder). Il est 100% responsive et préserve toutes les interactions.
              </div>
              <div className="relative">
                <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
                  {embedCode}
                </pre>
                <button
                  onClick={() => copyToClipboard(embedCode, 'embed')}
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs cursor-pointer"
                >
                  {copiedKey === 'embed' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'embed' ? 'Copié !' : 'Copier le code'}</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'php' && (
            <div className="space-y-3">
              <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Ajoutez ce code dans le fichier <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded font-mono text-emerald-800 dark:text-emerald-400">functions.php</code> de votre thème enfant ou enregistrez-le comme extension WordPress autonome dans <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded font-mono text-emerald-800 dark:text-emerald-400">/wp-content/plugins/cellbalance-quiz.php</code>.
                Utilisez ensuite le shortcode : <code className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded font-mono text-emerald-900 dark:text-emerald-300 font-bold">[cellbalance_quiz]</code> sur n'importe quel article ou page.
              </div>
              <div className="relative">
                <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800 max-h-72">
                  {phpPluginCode}
                </pre>
                <button
                  onClick={() => copyToClipboard(phpPluginCode, 'php')}
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs cursor-pointer"
                >
                  {copiedKey === 'php' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'php' ? 'Copié !' : 'Copier le code PHP'}</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'automation' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Connectez vos prospects à un scénario <strong>Make.com</strong> ou <strong>n8n</strong> pour déclencher :
              </div>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li>Ajout du contact dans votre autorépondeur (Brevo, Mailchimp, HubSpot, ActiveCampaign).</li>
                <li>Envoi automatique d'une séquence de 3 emails éducatifs sur l'Oméga-3 avec votre lien d'affiliation.</li>
                <li>Notification instantanée sur Slack, Discord ou Telegram pour les prospects au risque « Élevé ».</li>
              </ul>

              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider pt-2">
                Exemple de Payload JSON envoyé par le webhook :
              </div>
              <div className="relative">
                <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
                  {makeJsonSchema}
                </pre>
                <button
                  onClick={() => copyToClipboard(makeJsonSchema, 'automation')}
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs cursor-pointer"
                >
                  {copiedKey === 'automation' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'automation' ? 'Copié !' : 'Copier le schéma JSON'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex justify-end">
          <button
            onClick={() => setIsWordPressExportOpen(false)}
            className="px-5 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
