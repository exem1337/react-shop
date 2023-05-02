import { useEffect, useState } from "react";
import axios from 'axios';
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios.get('https://fakestoreapi.com/products/').then((res) => setProducts(res.data));
  }

  const ProductsList = () => {
    return products.length ?
      products.map((el) => (
        <Product key={el.id} product={el}/>
      ))
    : <div>Нет продуктов</div> 
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products">
      <ProductsList />
    </div>
  )
}