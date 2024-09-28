import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] =useState(true)
  useEffect(() => {
    setLoader(true)
    async function fetchData() {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
      setLoader(false)
     console.log(response.data);
    }
    fetchData();
  }, []);

  if(loader){
    return(
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <>
      <div className="products-container">
        {product.map((p) => (
          <div className="product" key={p.id}>
            <img src={p.image} alt={p.title} />
            <h4>{p.title}</h4>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
