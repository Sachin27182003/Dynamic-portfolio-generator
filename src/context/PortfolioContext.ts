import { createContext } from "react";
import type { PortfolioData } from '../types/Portfolio';

interface PortfolioContextProps {
  portfolios: PortfolioData[];
  addPortfolio: (data: PortfolioData) => void;
  updatePortfolio: (data: PortfolioData) => void;
}

export const PortfolioContext = createContext<PortfolioContextProps | undefined>(undefined);