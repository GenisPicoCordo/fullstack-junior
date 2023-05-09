import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div>
        <h1 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">Collection Page</h1>
        <div className="grid">
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
