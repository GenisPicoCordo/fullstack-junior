import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        const data = response.data.find(
          (product) => product.id === Number(productId)
        );
        setProduct(data);
        setSelectedVariant(data.variants[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleVariantChange = (event) => {
    const selectedOption = event.target.value;
    const selectedVariant = product.variants.find((variant) => {
      return variant.title === selectedOption;
    });
    setSelectedVariant(selectedVariant);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {product && selectedVariant && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Slider {...settings}>
              {product.images.map((image) => (
                <img key={image.id} src={image.src} alt={image.alt} />
              ))}
            </Slider>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-600">{product.body_html}</p>
            <p className="text-lg font-bold mt-4">${selectedVariant.price}</p>
            <label htmlFor="variants" className="block font-bold mt-4">
              Variants:
            </label>
            <select
              name="variants"
              id="variants"
              onChange={handleVariantChange}
              className="block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            >
              {product.options.map((option) => (
                <optgroup key={option.name} label={option.name}>
                  {option.values.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
