import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () =>{
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id, navigate]);

    //eliminar producto
    const deleteProduct = () => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                Swal.fire("Exito", "El producto fue eliminado", "success");
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <h1>{product.title}</h1>
            <p>Price : {product.price}</p>
            <p>Description: {product.description}</p>
          </div>
        </div>

        <Link
          to={`/products/${product._id}/edit`}
          className="btn btn-primary" style={{ marginRight: "10px" }}>
          Update
        </Link>

        <button onClick={deleteProduct} className="btn btn-danger">
          Delete
        </button>
      </div>
    );
}

export default ProductDetails