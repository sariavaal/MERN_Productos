import axios from "axios";
import CreateProduct from "./CreateProduct";
import DeleteProduct from "./DeleteProduct";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchProducts();
    }, 1000); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="row">
      <div className="col-6 p-5">
        <h3 className="text-center">Listado de Productos</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product._id}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        DeleteProduct(product._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                  <button className="btn btn-info btn-no-underline">
                      <Link
                        to={`/update/${product._id}`}
                      >
                        Update
                      </Link>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="col-4">
        <CreateProduct />
      </div>
    </div>
  );
};
export default ProductList;
