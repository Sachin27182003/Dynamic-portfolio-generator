import React, {useState } from 'react';
import type { PortfolioData } from '../types/Portfolio';
import { PortfolioContext } from './PortfolioContext';





export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portfolios, setPortfolios] = useState<PortfolioData[]>([]);

  const addPortfolio = (data: PortfolioData) => {
    setPortfolios((prev) => [...prev, data]);
  };

  const updatePortfolio = (data: PortfolioData) => {
    setPortfolios((prev) => prev.map(p => (p.id === data.id ? data : p)));
  };

  return (
    <PortfolioContext.Provider value={{ portfolios, addPortfolio, updatePortfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
};


