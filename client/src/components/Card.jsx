import { Link } from "react-router-dom";

const Card = ({ id, title, image, variants }) => {
  // Obtener el precio más bajo del producto
  const minPrice = Math.min(...variants.map((variant) => variant.price));

  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <Link to={`/product/${id}`}>
        <img
          className="w-full h-auto object-cover rounded-xl"
          src={image}
          alt={title}
        />
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
          <h3 className="text-white text-sm overflow-y-auto prompt">{title}</h3>
        </div>
        <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
          <p className="text-white text-sm">${minPrice.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
