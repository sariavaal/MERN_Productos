import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";

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

const Formulario = ({ onsubmit, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onsubmit}
    >
      <Form>
    <div className="container">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <Field type="text" className="form-control" id="title" name="title" />
          <ErrorMessage
            name="title"
            component="div"
            className="alert alert-danger mt-2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <Field
            type="number"
            className="form-control"
            id="price"
            name="price"
          />
          <ErrorMessage
            name="price"
            component="div"
            className="alert alert-danger mt-2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <Field
            type="text"
            className="form-control"
            id="description"
            name="description"
          />
          <ErrorMessage
            name="description"
            component="div"
            className="alert alert-danger mt-2"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      </Form>
    </Formik>
  );
};
//prop validation
Formulario.propTypes = {
  onsubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }),
}
export default Formulario;
