import { useState, useEffect } from 'react';
import M from 'materialize-css';
import axios from 'axios';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: ''
  });

  useEffect(() => {
    M.updateTextFields();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/products', formData);

      if (response.status === 200) {
        alert('Product created successfully');
        setFormData({
          title: '',
          price: '',
          description: ''
        });
      } else {
        console.log('Failed to create product');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <h4 className="center">Product Manager</h4>
      <form onSubmit={handleSubmit} className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input name="title" id="title" type="text" value={formData.title} onChange={handleChange} className="validate" />
            <label htmlFor="title">Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input name="price" id="price" value={formData.price} onChange={handleChange} type="number" className="validate" />
            <label htmlFor="price">Price</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea name="description" id="description" value={formData.description} onChange={handleChange} className="materialize-textarea"></textarea>
            <label htmlFor="description">Description</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Create</button>
      </form>
    </div>
  );
};

export default FormComponent;
