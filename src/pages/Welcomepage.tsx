import { useNavigate } from "react-router-dom";

function Welcomepage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col items-center justify-between bg-yellow-300 p-6">
      <h1 className=" text-4xl font-extrabold mb-4 ">
        ❤️‍🩹 Welcome to the Dynamic Portfolio Generator
      </h1>
      <div className="flex flex-col items-center justify-between rounded-xl bg-yellow-200 p-6 mb-4">
        <img src="/Work_7.jpg" className="h-80 w-80 rounded" />
        <div className="flex flex-col items-center justify-center rounded-xl bg-yellow-300 p-6">
          <p className="text-lg font-medium">
            Create and manage your professional portfolio with ease. Start by
            adding your details and projects.
          </p>
          <button
            onClick={() => navigate("/select")}
            className="bg-blue-500 text-white m-4 px-4 p-2 rounded"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcomepage;
