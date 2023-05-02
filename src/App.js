import './App.scss';
import Header from './components/Header';
import Product from './components/Product';
import Products from './components/Produts';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Products /> },
    { path: '/product/:id', element: <Product /> },
  ])

  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <Header />
      <div className='container'>
        <App />
      </div>
    </Router>
  )
}

export default AppWrapper;
