import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './DeleteProduct.css';
import { useDispatch } from 'react-redux';
import ProductService from '../Service/classApi';
import showError from '../Ui/ErrorAlert';

import { removeProduct, setAllProduct } from '../redux/product/productReducer';

const DeleteProduct = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getall = async () => {
      try {
        const response = await ProductService.getAllProducts();
        if (response) {
          dispatch(setAllProduct(response));
        } else {
          showError('Something went wrong!, try again');
        }
      } catch (error) {
        showError('Request failed!', error);
      }
    };
    getall();
  }, [dispatch]);

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await ProductService.removeProduct(productId);
      if (response.message) {
        dispatch(removeProduct(productId));
      } else {
        showError('Request failed!');
      }
    } catch (error) {
      showError(`${error}, Please try again`);
    }
  };

  const {
    id,
    name,
  } = props;
  return (
    <div className="Lesson-Panel">

      <div className="container-1">
        <ul className="book-data">
          <li className="product-id">
            ID
            {id}
          </li>
          <li className="title">{name}</li>
        </ul>
      </div>

      <div className="actions">
        <button
          type="submit"
          onClick={() => {
            handleDeleteProduct(id);
          }}
        >
          Remove
        </button>
      </div>

    </div>

  );
};

DeleteProduct.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

DeleteProduct.defaultProps = {
  id: 'none',
  name: 'none',
};

export default DeleteProduct;
