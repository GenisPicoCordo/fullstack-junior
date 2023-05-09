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
        const { data } = await axios.get(`/products/${productId}`);
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
        <div>
          <h1>{product.title}</h1>
          <Slider {...settings}>
            {product.images.map((image) => (
              <img key={image.id} src={image.src} alt={image.alt} />
            ))}
          </Slider>
          <p>{product.body_html}</p>
          <p>Price: {selectedVariant.price}</p>
          <label htmlFor="variants">Variants:</label>
          <select name="variants" id="variants" onChange={handleVariantChange}>
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
      )}
    </>
  );
};

export default ProductPage;
