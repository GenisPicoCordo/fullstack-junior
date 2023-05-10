import { Link } from "react-router-dom";

const Card = ({ id, title, image, variants }) => {
  // Obtener el precio más bajo del producto
  const minPrice = Math.min(...variants.map((variant) => variant.price));

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Link to={`/product/${id}`}>
        <img
          className="object-cover w-full"
          src={image ? image.src : "https://via.placeholder.com/300"}
          alt={title}
        />
        <div className="p-4">
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-gray-500 mt-2">${minPrice.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
