import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import AlikeProducts from "./AlikeProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ProductPage() {
  const [product, setProduct] = useState();
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const route = useParams();

  async function getProduct() {
    const prod = await axios.get(`https://fakestoreapi.com/products/${route.id}`).then((res) => res.data);
    setProduct(prod);
  }

  function onAddToCart() {
    for (let i = 0; i < count; i++) {
      dispatch(addToCart(product));
    }

    toast.info(`Добавлено: ${count} товаров`, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setCount(0);
  }

  useEffect(() => {
    getProduct()
  }, [route.id])

  return (
    <div className="product">
      <ToastContainer />
      <div className="product__inner">
        { product?.image && <img src={product?.image} /> }
        <div className="product__inner--wrapper">
          <p className="product__inner--wrapper__title">{ product?.title }</p>
          <p className="product__inner--wrapper__desc">{ product?.description }</p>
          <p className="product__inner--wrapper__category">Категория: { product?.category }</p>
          <div className="product__inner--wrapper__price">
            <p className="product__inner--wrapper__price--price">Цена: { product?.price }</p>
            <p className="product__inner--wrapper__price--rating">Рейтинг: { product?.rating?.rate }</p>
          </div>
          <div className="product__inner--wrapper__action">
            <button 
              disabled={count === 0}
              onClick={() => count !== 0 && setCount(count - 1)}
            >
              -
            </button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <button
            disabled={count === 0}
            onClick={() => onAddToCart()}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
      <hr />
      <div className="product__alike">
        <p>Другие товары категории</p>
        <AlikeProducts category={product?.category} />
      </div>
    </div>
  )
}