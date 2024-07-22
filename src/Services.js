import "./index.css";
import MentelCounseling from "./Images/mentel cou.png"
import Newsletter from './components/Newsletter';

const Services = () => {
  const services = [
    {
      title: "Mental Counseling",
      description:
        "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla.",
      imageUrl: MentelCounseling,
    },
    {
      title: "Inner circle",
      description:
        "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla.",
        imageUrl: MentelCounseling,

      },
    {
      title: "Book Appointments",
      description:
        "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla.",
        imageUrl: MentelCounseling,

      // component: <HolisticApproach />,
    },
    {
      title: "Community groups",
      description:
        "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla.",
        imageUrl: MentelCounseling,

    },
    {
      title: "Your Gpt",
      description:
        "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla.",
        imageUrl: MentelCounseling,

    },
    {
      title: "Chatrooms",
      description:
        "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla.",
        imageUrl: MentelCounseling,

    },
  ];

  return (
    <>
      <div className="min-h-screen p-10 flex flex-col items-center">
        <div className="text-center text-black text-3xl font-bold mt-10 mb-8 border-b-2 border-green-800">
          Services
        </div>
        <div className="text-center text-black text-xl font-semibold mb-8">
          Empowering Minds Our Mental Health Consulting Services
        </div>
        <div className="grid grid-cols-2 gap-4  ">
          {services.map((service, index) => (
            <div key={index} className="relative h-[380px] w-[300px] border-2 rounded-lg transition duration-500 ease-in-out hover:bg-[#D2F6D5] transform hover:-translate-y-1 hover:scale-110 ... ">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="z-0 h-4/5 w-4/5 ml-5 pb-3 rounded-md object-cover  "
              />
              <div className="absolute inset-0 shadow-xl rounded-xl "></div>
              <div className="absolute bottom-4 left-4 text-left ">
                <h1 className="text-lg font-semibold text-black">
                  {service.title}
                </h1>
                <p className="mt-2 text-sm text-gray-700">
                  {service.description}
                  <button className="mt-2 inline-flex cursor-pointer items-center text-lg font-semibold text-black ml-45">
                    →
                  </button>
                </p>
              </div>
            </div>
          ))}
          
          
        </div>
      </div>
    <div className="flex justify-center space-x-8 p-8 bg-green-50">
      <div className="max-w-sm p-6 bg-green-100 rounded-lg shadow-md">
        <img
          className="w-24 h-24 mx-auto mb-4 rounded-full"
          src="https://via.placeholder.com/150" // Replace with the actual image URL
          alt="Client"
        />
        <p className="text-center text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam.
        </p>
        <p className="text-center font-bold text-gray-900">George J - Client</p>
      </div>
      <div className="max-w-sm p-6 bg-green-100 rounded-lg shadow-md">
        <img
          className="w-24 h-24 mx-auto mb-4 rounded-full"
          src="https://via.placeholder.com/150" // Replace with the actual image URL
          alt="Client"
        />
        <p className="text-center text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam.
        </p>
        <p className="text-center font-bold text-gray-900">George J - Client</p>
      </div>
    </div>
  

       <Newsletter /> 
    </>
  );
  
};

export default Services;
