import './AddLecture.css';
import React, { useState } from 'react';

function AddLecture() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
            name="lecturename"
            placeholder="Lecture name"
            value={inputs.lecturename || ''}
            onChange={handleChange}
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
            value={inputs.imageurl || ''}
            onChange={handleChange}
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
            value={inputs.websitelink || ''}
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
