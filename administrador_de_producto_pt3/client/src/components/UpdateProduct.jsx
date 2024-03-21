import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),
  price: Yup.number()
    .required("Price is required")
    .min(1, "Price must be at least 1")
    .typeError("Price must be a number"),
  description: Yup.string()
    .required("Description is required")
    .min(3, "Description must be at least 3 characters"),
});

const UpdateProduct = () => {
  const {id} = useParams();
  const initialValues = {
    title: "",
    price: "",
    description: "",
  };
  
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/products/${id}`,
        values
      );
      if (response.status === 200) {
        //alert("Product updated successfully");
        Swal.fire({
          title: "Exito",
          text: "Usuario actualizado correctamente",
          icon: "success"
        })
        
        resetForm();
        navigate("/");
      } else {
        console.log("Failed to update product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h4 className="center">Update Product</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <Field
                  name="title"
                  id="title"
                  type="text"
                  className={`validate ${
                    errors.title && touched.title ? "invalid" : ""
                  }`}
                />
                <label htmlFor="title">Title</label>
                <ErrorMessage
                  name="title"
                  component="div"
                  className="red-text"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <Field
                  name="price"
                  id="price"
                  type="number"
                  className={`validate ${
                    errors.price && touched.price ? "invalid" : ""
                  }`}
                />
                <label htmlFor="price">Price</label>
                <ErrorMessage
                  name="price"
                  component="div"
                  className="red-text"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <Field
                  name="description"
                  id="description"
                  as="textarea"
                  className={`materialize-textarea validate ${
                    errors.description && touched.description ? "invalid" : ""
                  }`}
                />
                <label htmlFor="description">Description</label>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="red-text"
                />
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Update Product
            </button>
            <Link
              to="/"
              className="btn waves-effect waves-light ml-2"
              style={{ marginLeft: "10px" }}
            >
              Back to Products
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateProduct;
