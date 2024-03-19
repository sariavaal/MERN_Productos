import './App.css';
import FormComponent from './components/ProductComponent';
import ProductDetails from './components/ProductDetails';
import UpdateProduct from './components/UpdateProduct';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FormComponent />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='products/:id/edit' element={<UpdateProduct />} />
        
      </Routes>
    </Router>
  );
}

export default App;


