import './AddLecture.css';
import React, { useState, useEffect } from 'react';


import { useDispatch } from 'react-redux';
import { addLecture, addItemAxios, fetchMessages } from '../redux/messages/messagesSlice';
import { useNavigate } from "react-router-dom";

function AddLecture() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [image_url, setimageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [web_link, setwebLink] = useState('');
  const [price, setPrice] = useState('');

  const [inputs, setInputs] = useState({});

  useEffect(() => {
    // Check the status from the Redux store
    if (status === 'idle') {
      dispatch(fetchMessages());
    }
  }, [status, dispatch]);

  const handleChange = (event) => {
    event.preventDefault();
    const event_name = event.target.name;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [event_name]: value }));
    setName(inputs.name);
    setimageUrl(inputs.image_url);
    setDescription(inputs.description);
    setwebLink(inputs.web_link);
    setPrice(inputs.price);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addLecture({
      name, image_url, description, web_link, price,
    }));

    dispatch(addItemAxios({
      name,
      image_url,
      description,
      web_link,
      price,
    }));

    dispatch(fetchMessages());

    navigate('/');

  };

  return (

    <section className="wrapper-add-lecture" id="contact">

      <h2 className="content">
        We are always interested in creating new projects,
        so if you would like to add one lecture please fill this form.
      </h2>
      <form className="form-add-lecture" onSubmit={handleSubmit}>
        <label className="label-size" htmlFor="item-1">
          <input
            id="item-1"
            className="items-form"
            type="text"
            name="name"
            placeholder="Lecture name"
            value={inputs.name || ''}
            onChange={handleChange}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-2">
          <input
            id="item-2"
            className="items-form"
            type="text"
            name="image_url"
            placeholder="Image url"
            value={inputs.image_url || ''}
            onChange={handleChange}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-3">
          <input
            id="item-3"
            className="items-form"
            type="text"
            name="web_link"
            placeholder="Website link"
            value={inputs.web_link || ''}
            onChange={handleChange}
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
            value={inputs.price || ''}
            onChange={handleChange}
          />
        </label>

        <label className="label-size" htmlFor="item-5">
          <textarea
            id="item-5"
            className="textarea"
            type="textarea"
            name="description"
            placeholder="Description"
            value={inputs.description || ''}
            onChange={handleChange}
          />
        </label>

        <button className="form-button" type="submit" id="btn-submit">
          Get In Touch
        </button>
      </form>

    </section>
  );
}

export default AddLecture;
