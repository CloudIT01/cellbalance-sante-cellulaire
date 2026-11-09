import React, { createContext, useContext, useState, useEffect } from 'react';

interface AffiliateContextType {
  affiliateUrl: string;
  setAffiliateUrl: (url: string) => void;
  promoCode: string;
  setPromoCode: (code: string) => void;
  isConfigOpen: boolean;
  setIsConfigOpen: (open: boolean) => void;
  isWordPressExportOpen: boolean;
  setIsWordPressExportOpen: (open: boolean) => void;
  resetToDefault: () => void;
}

const DEFAULT_AFFILIATE_URL = 'https://www.zinzino.com/shop/2017711977/fr/fr-fr/products/shop/home-health-tests/309000';
const OLD_DEFAULT_AFFILIATE_URL = 'https://www.zinzino.com/site/FR/fr-FR/products/shop/balance/300000';
const DEFAULT_PROMO_CODE = 'SANTECELLULAIRE';

const AffiliateContext = createContext<AffiliateContextType | undefined>(undefined);

export const AffiliateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [affiliateUrl, setAffiliateUrlState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cellbalance_affiliate_url');
      if (stored && stored !== OLD_DEFAULT_AFFILIATE_URL) {
        return stored;
      }
      return DEFAULT_AFFILIATE_URL;
    }
    return DEFAULT_AFFILIATE_URL;
  });

  const [promoCode, setPromoCodeState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cellbalance_promo_code') || DEFAULT_PROMO_CODE;
    }
    return DEFAULT_PROMO_CODE;
  });

  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isWordPressExportOpen, setIsWordPressExportOpen] = useState(false);

  const setAffiliateUrl = (url: string) => {
    setAffiliateUrlState(url);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cellbalance_affiliate_url', url);
    }
  };

  const setPromoCode = (code: string) => {
    setPromoCodeState(code);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cellbalance_promo_code', code);
    }
  };

  const resetToDefault = () => {
    setAffiliateUrl(DEFAULT_AFFILIATE_URL);
    setPromoCode(DEFAULT_PROMO_CODE);
  };

  return (
    <AffiliateContext.Provider
      value={{
        affiliateUrl,
        setAffiliateUrl,
        promoCode,
        setPromoCode,
        isConfigOpen,
        setIsConfigOpen,
        isWordPressExportOpen,
        setIsWordPressExportOpen,
        resetToDefault,
      }}
    >
      {children}
    </AffiliateContext.Provider>
  );
};

export const useAffiliate = () => {
  const context = useContext(AffiliateContext);
  if (!context) {
    throw new Error('useAffiliate must be used within an AffiliateProvider');
  }
  return context;
};
