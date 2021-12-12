import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from './Login';
import ProductsList from './ProductsList';
import NewProduct from './NewProduct';
import EditProduct from './EditProduct';

const Header = () => (
  <nav className="navbar navbar-dark bg-primary">
    <div className="container">
      <span className="navbar-brand mb-0 h1">Cadastro de Produtos</span>
    </div>
  </nav>
)

ReactDOM.render(
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductsList/>} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/products/edit" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  </>,

  document.getElementById('root')
);
