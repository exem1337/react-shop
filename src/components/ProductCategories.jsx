import axios from "axios";
import { useEffect, useState } from "react"

export default function ProductCategories({ handleCategory }) {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('')

  async function getCategories() {
    await axios.get('https://fakestoreapi.com/products/categories').then((res) => setCategories(res.data));
  }

  useEffect(() => {
    handleCategory(currentCategory);
  }, [currentCategory])

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="products--categories">
      <p>Категории</p>
      <div className="products--categories__wrapper">
        <div 
          className={`products--categories__wrapper--category ${currentCategory === '' && 'active'}`}
          onClick={() => setCurrentCategory('')}
        >
          Все товары
        </div>
        {
          categories?.map((el, index) => 
            <div 
              key={index}
              className={`products--categories__wrapper--category ${currentCategory === el && 'active'}`}
              onClick={() => setCurrentCategory(el)}
            >
              { el }
            </div>
          )
        }
      </div>
    </div>
  )
}