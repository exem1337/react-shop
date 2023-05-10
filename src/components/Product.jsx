import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const navigate = useNavigate();

  const onProductClick = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <div className="products__item" onClick={onProductClick}>
      <img src={product.image} alt="#" />
      <p className="products__item--title">{ product.title }</p>
      <p className="products__item--desc">{ product.description }</p>
      <p className="products__item--category">Category: { product.category }</p>
    </div>
  )
}