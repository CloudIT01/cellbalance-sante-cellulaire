import React, { createContext, useContext } from 'react';
import { ORDER_URL } from '../config';

// Le lien de commande est désormais fixé dans src/config.ts.
// Le contexte est conservé pour ne pas modifier les composants qui le consomment.
interface AffiliateContextType {
  affiliateUrl: string;
  promoCode: string;
}

const AffiliateContext = createContext<AffiliateContextType | undefined>(undefined);

export const AffiliateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AffiliateContext.Provider value={{ affiliateUrl: ORDER_URL, promoCode: '' }}>
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
