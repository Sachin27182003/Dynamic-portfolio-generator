import { useContext } from "react";
import  { PortfolioContext } from "./PortfolioContext";

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context)
    throw new Error("usePortfolio must be used within PortfolioProvider");
  return context;
};
