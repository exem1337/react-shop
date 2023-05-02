import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="products__item" onClick={useNavigate(`/products/${product.id}`)}>
      <img src={product.image} alt="#" />
      <p className="products__item--title">{ product.title }</p>
      <p className="products__item--desc">{ product.description }</p>
      <p className="products__item--category">Category: { product.category }</p>
    </div>
  )
}