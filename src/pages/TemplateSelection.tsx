import { useNavigate } from "react-router-dom";

const TemplateSelection = () => {
  const navigate = useNavigate();

  const selectTemplate = (id: number) => {
    localStorage.setItem("selectedTemplate", id.toString());
    navigate("/form");
  };

  return (
    <div className="flex flex-col h-screen w-full items-center justify-start bg-gray-100 p-4">
      <div className="flex flex-col items-center justify-center text-center mb-2">
        <h1 className="text-5xl font-bold p-4">
          Choose your <span className="text-red-600">Template</span>
        </h1>
        <div className="w-36 h-1 bg-yellow-500"></div>
        <h1 className="text-lg text-gray-500 font-semibold mt-4">
          Select a professional template that best represents your style and
          customize
        </h1>
        <h1 className="text-lg text-gray-500 font-semibold ">
          it to your needs
        </h1>
      </div>

      <div className="flex gap-10">
        <div
          onClick={() => selectTemplate(1)}
          className="w-lg cursor-pointer border rounded-2xl shadow-2xl shadow-blue-400 bg-white hover:shadow-lg"
        >
          <div>
            <img
              className="w-full h-60 rounded-t-2xl shadow-2xl "
              src="/images.jpeg"
            />
          </div>
          <div className="p-6">
            <h1 className="text-gray-600">
              Modern and clean design with yellow hero section and professional
              layout
            </h1>
            <h2 className="font-bold mt-2">Key Features :</h2>

            <div className="flex items-center justify-between">
              <h1 className="before:content-['•'] before:mr-2 before:text-2xl before:text-red-500">
                Yellow Hero section
              </h1>
              <h1 className="mr-20 before:content-['•'] before:mr-2 before:text-2xl before:text-red-500">
                Grid portfolio
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="before:content-['•'] before:mr-2 before:text-2xl before:text-red-500">
                Testimonials Carousel
              </h1>
              <h1 className="mr-20 before:content-['•'] before:mr-2 before:text-2xl before:text-red-500">
                Contact Form
              </h1>
            </div>
            <span className="flex items-center justify-center mt-4">
              <div className="w-60 h-8 bg-red-500 rounded-xl border-2 border-red-800">
                <h1 className="text-center font-bold">Template 1 </h1>
              </div>
            </span>
          </div>
        </div>
        <div
          onClick={() => selectTemplate(2)}
          className="w-lg cursor-pointer border rounded-2xl shadow-2xl shadow-blue-400 bg-white hover:shadow-lg"
        >
          <div>
            <img
              className="w-full h-60 rounded-t-2xl shadow-2xl "
              src="/images (1).jpeg"
            />
          </div>
          <div className="p-6">
            <h1 className="text-gray-600">
              Modern and clean design with yellow hero section and professional
              layout
            </h1>
            <h2 className="font-bold mt-2">Key Features :</h2>

            <div className="flex items-center justify-between">
              <h1 className="before:content-['•'] before:mr-2 before:text-2xl before:text-red-500">
                Split Hero section
              </h1>
              <h1 className="mr-20 before:content-['•'] before:mr-2 before:text-2xl before:text-red-500">
                Timeline Skills
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="before:content-['•'] before:mr-2 before:text-2xl before:text-red-500">
                Masonry Portfolio
              </h1>
              <h1 className="mr-20 before:content-['•'] before:mr-2 before:text-2xl before:text-red-500">
                Blog Section
              </h1>
            </div>
            <span className="flex items-center justify-center mt-4">
              <div className="w-60 h-8 bg-red-500 rounded-xl border-2 border-red-800">
                <h1 className="text-center font-bold">Template 1 </h1>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;
