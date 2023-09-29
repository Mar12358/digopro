import './AddLecture.css';
import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addLecture, addItemAxios, fetchMessages } from '../redux/messages/messagesSlice';

function AddLecture() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [imageUrl, setimageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [webLink, setwebLink] = useState('');
  const [price, setPrice] = useState('');

  const [inputs, setInputs] = useState({});

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const handleChange = (event) => {
    event.preventDefault();
    const eventName = event.target.name;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [eventName]: value }));
    setName(inputs.name);
    setimageUrl(inputs.imageUrl);
    setDescription(inputs.description);
    setwebLink(inputs.webLink);
    setPrice(inputs.price);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addLecture({
      name, imageUrl, description, webLink, price,
    }));

    dispatch(addItemAxios({
      name,
      imageUrl,
      description,
      webLink,
      price,
    }));

    navigate('/');
    dispatch(fetchMessages());
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
            name="imageUrl"
            placeholder="Image url"
            value={inputs.imageUrl || ''}
            onChange={handleChange}
            required
          />
        </label>

        <label className="label-size" htmlFor="item-3">
          <input
            id="item-3"
            className="items-form"
            type="text"
            name="webLink"
            placeholder="Website link"
            value={inputs.webLink || ''}
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
