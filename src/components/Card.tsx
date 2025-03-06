import dtifmarketing from "../assets/img/projects/dtifmarketing.png";

type Props = {
  title: string;
};

const Card = ({ title = 'Title' }: Props) => {
  return (
    <>
      {/* <!-- Card Container */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm transition-all duration-300 hover:shadow-lg">
        {/* <!-- Image */}
        <img
          src={dtifmarketing}
          alt="Card Image"
          className="w-full h-48 object-cover"
        />

        {/* <!-- Content */}
        <div className="p-6">
          {/* <!-- Title */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

          {/* <!-- Description */}
          <p className="text-gray-600 mb-4">
            This is a simple card with an image, a short description, and a
            button. It has a light theme and slight rounded corners.
          </p>

          {/* <!-- Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
