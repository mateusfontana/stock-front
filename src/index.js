import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ProductsList from './ProductsList';
import NewProduct from './NewProduct';
import EditProduct from './EditProduct';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductsList/>} />
      <Route path="new" element={<NewProduct />} />
      <Route path="edit" element={<EditProduct />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
