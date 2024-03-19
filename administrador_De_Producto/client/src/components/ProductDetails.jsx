import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () =>{
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
    <div className="container">
        <div className="card">
            <div className="card-content">
            <h1>{product.title}</h1>
            <p>Price : {product.price}</p>
            <p>Description: {product.description}</p>
        </div> 
        </div>
    </div>
    
    );
}

export default ProductDetails