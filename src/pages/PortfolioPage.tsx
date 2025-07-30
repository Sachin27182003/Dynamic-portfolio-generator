import { useParams } from "react-router-dom";
import { usePortfolio } from "../context/usePortfolio";
import Template1 from "../template/Template1";
import Template2 from "../template/Template2";

const PortfolioPage = () => {
  const { id } = useParams();
  const { portfolios } = usePortfolio();
  const data = portfolios.find((p) => p.id === id);

  if (!data) return <div className="p-6">Portfolio not found.</div>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {data.templateId === 1 ? (
        <Template1 data={data} />
      ) : data.templateId === 2 ? (
        <Template2 data={data} />
      ) : (
        <div className="text-red-500">Unknown Template ID</div>
      )}
    </div>
  );
};

export default PortfolioPage;
