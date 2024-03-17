import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            axios
                .get('http://localhost:8000/api/products')
                .then((res) => {
                    setProducts(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div>
          {products.map(({ _id, title}) => (
            <div className='card' key={_id}>
              <div className='card-content'>
                <Link to={`/products/${_id}`} className='card-title'>
                  {title}
                </Link>
              </div>
            </div>
          ))}
        </div>
    );
};

export default ProductList;