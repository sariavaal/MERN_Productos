import './App.css';
import ProductList from "./components/ProductList";
import UpdateProduct from './components/UpdateProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/update/:id" element={<UpdateProduct />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App