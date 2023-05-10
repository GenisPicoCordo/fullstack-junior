import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products");
      setProducts(response.data);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="font-bold text-[#6469ff] text-3xl uppercase mb-6">
        Collection Page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            variants={product.variants}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
