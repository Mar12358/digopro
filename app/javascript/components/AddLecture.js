import './AddLecture.css'
import React from 'react';

import { useState } from 'react';


function AddLecture() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    
    
    <section class="wrapper-add-lecture" id="contact">
    
      <h2 class="content">We are always interested in creating new projects,
             so if you'd like to add one lecture please fill this form.</h2>
      <form className="form-add-lecture" onSubmit={handleSubmit}>
        <label className="label-size">
        <input 
          className="items-form"
          type="text" 
          name="lecturename"
          placeholder="Lecture name"
          value={inputs.lecturename || ""} 
          onChange={handleChange}
          required
        />
        </label>

        <label className="label-size">
        <input 
          className="items-form"
          type="text" 
          name="imageurl"
          placeholder="Image url"
          value={inputs.imageurl || ""} 
          onChange={handleChange}
          required
        />
        </label>

        <label className="label-size">
        <input 
          className="items-form"
          type="text" 
          name="websitelink"
          placeholder="Website link"
          value={inputs.websitelink || ""} 
          onChange={handleChange}
          required
        />
        </label>

        <label className="label-size">
          <input
            className="items-form"
            type="number" 
            name="price" 
            placeholder="Price"
            value={inputs.price || ""} 
            onChange={handleChange}
          />
          </label>

           <label className="label-size">
          <textarea
            className="textarea"
            type="textarea" 
            name="description" 
            placeholder="Description"
            value={inputs.description || ""} 
            onChange={handleChange}
          />
          </label>

          <button className="form-button" type="submit" id="btn-submit">
            Get In Touch
          </button>
      </form>
    
    </section>
    

    
  )
}

export default AddLecture;
