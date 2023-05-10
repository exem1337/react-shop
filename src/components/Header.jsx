import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const route = useLocation()?.pathname;
  const cart = useSelector(state => state.cart.items)
  
  const cartSum = () => {
    return cart?.reduce((acc, el) => acc += el.price ,0);
  }

  return (
    <header className="header">
      <div>
        <span>Магазинчик</span>
        <p 
          className={ route === '/' && 'active' }
          onClick={() => navigate('/')}
        >
          Товары
        </p>
      </div>
      <span>Корзина: {cartSum()}</span>
    </header>
  )
}