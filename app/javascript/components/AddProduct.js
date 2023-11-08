import './AddProduct.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductService from '../Service/classApi';
import showError from '../Ui/ErrorAlert';

const AddProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [productDesctiption, setProductDescription] = useState('');
  const [productWeb, setProductWeb] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const obj = {
        name: productName,
        image_url: imageUrl,
        description: productDesctiption,
        web_link: productWeb,
        price: productPrice,
      };
      const response = await ProductService.createProducts(obj);
      if (response) {
        // notify("Product created successfully");
        setProductName('');
        setImageUrl('');
        setProductDescription('');
        setProductWeb('');
        setProductPrice('');
        navigate('/products');
      } else {
        showError('Something went wrong!, try again');
      }
    } catch (error) {
      showError('Product creation failed!', error);
    }
  };

  return (

    <section className="wrapper-add-product" id="contact">

      <h2 className="content">
        We are always interested in creating new projects,
        so if you would like to add one product please fill this form.
      </h2>
      <form className="form-add-product" onSubmit={handleSubmit}>
        <label className="label-size" htmlFor="item-1">
          <input
            id="item-1"
            className="items-form"
            type="text"
            name="productname"
            placeholder="product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-2">
          <input
            id="item-2"
            className="items-form"
            type="text"
            name="imageurl"
            placeholder="Image url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-3">
          <input
            id="item-3"
            className="items-form"
            type="text"
            name="websitelink"
            placeholder="Website link"
            value={productWeb}
            onChange={(e) => setProductWeb(e.target.value)}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-4">
          <input
            id="item-4"
            className="items-form"
            type="number"
            name="price"
            placeholder="Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-5">
          <textarea
            id="item-5"
            className="textarea"
            type="textarea"
            name="description"
            placeholder="Description"
            value={productDesctiption}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </label>

        <button className="form-button" type="submit" id="btn-submit">
          Create Product
        </button>
      </form>

    </section>

  );
};

export default AddProduct;
