import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AlikeProducts({ category }) {
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  
  function onGoToProduct(id) {
    navigate(`/product/${id}`)
  }

  async function getAlikeProducts() {
    if (!category) {
      return;
    }
  
    await axios.get(`https://fakestoreapi.com/products/category/${category}`).then((res) => setProducts(res.data));
  }

  useEffect(() => {
    getAlikeProducts();
  }, [category])

  return (
    <div className="products--alike">
      { products?.map((prod) => 
        <div 
          onClick={() => onGoToProduct(prod.id)}
          key={prod.id}
          className="products--alike__item"
        >
          { prod.image && <img src={prod.image} /> }
          <div className="products--alike__item--wrapper">
            <p>{ prod.title }</p>
            <p>Цена: { prod.price }</p>
          </div>
        </div>
      ) }
    </div>
  );
}