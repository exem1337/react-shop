import { useEffect, useState } from "react";
import axios from 'axios';
import Product from "./Product";
import ProductCategories from "./ProductCategories";

export default function Products() {
  const [products, setProducts] = useState([]);
  
  const getProducts = async () => {
    await axios.get('https://fakestoreapi.com/products/').then((res) => setProducts(res.data));
  }

  const ProductsList = () => {
    return products.length ?
      products.map((el) => (
        <Product key={el.id} product={el} />
      ))
    : <div>Нет продуктов</div> 
  }

  async function getProductsByCategory(category) {
    if (!category) {
      await getProducts()
      return;
    }

    await axios.get(`https://fakestoreapi.com/products/category/${category}`).then((res) => setProducts(res.data));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ProductCategories handleCategory={getProductsByCategory} />
      <div className="products">
        <ProductsList />
      </div>
    </>
  )
}