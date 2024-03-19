import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const UpdateProduct = () => {
  const {id} = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch(err => console.log(err));
  }, [id, navigate]);

  const updateProduct = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/${id}`, {
        title,
        price,
        description
      },{
        headers: {
          "Content-Type": "application/json"
        }
      })
      //.then(res => console.log(res))
      .then(() => navigate("/"))
      .catch(err => console.log(err));
  };
  return (
    <div className="container">
      <h4 className="center">Update Product</h4>
      <form onSubmit={updateProduct} className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              name="title"
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="validate"
            />
            <label htmlFor="title">Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              name="price"
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="validate"
            />
            <label htmlFor="price">Price</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              name="description"
              id="description"
              className="materialize-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label htmlFor="description">Description</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light"
        name="action" 
        type="submit" 
        onClick={updateProduct}
        >
          Update Product
        </button>
        <Link to='/' className="btn waves-effect waves-light ml-2" style={{ marginLeft: "10px" }}>
          Back to Products
        </Link>
      </form>
    </div>
  );
};


export default UpdateProduct;
