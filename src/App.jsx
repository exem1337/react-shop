import { Provider, useSelector } from 'react-redux';
import './App.scss';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import Products from './components/Produts';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import store from './store';
import Loader from './components/Loader';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Products /> },
    { path: '/product/:id', element: <ProductPage /> },
  ])

  return routes;
}

const AppWrapper = () => {
  const isLoading = useSelector(state => state.loader.isLoading);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className='container'>
          {/* { isLoading && <Loader /> } */}
          <App />
        </div>
      </Router>
    </Provider>
  )
}

export default AppWrapper;
