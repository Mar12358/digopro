import './DeletePage.css';

import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteProduct from '../components/DeleteProduct';
import { fetchMessages } from '../redux/product/productReducer';

const DeletePage = () => {
  const dispatch = useDispatch();

  const { allProduct, status } = useSelector((state) => state.product);

  const [myProducts, setMyProducts] = useState([]);

  const myProductsRef = useRef();

  useEffect(() => {
    dispatch(fetchMessages);
    myProductsRef.current = [];

    for (let i = 0; i < allProduct.length; i += 1) {
      const str = `product${i}`;
      if (!allProduct[i].removed) {
        myProductsRef.current.push(<DeleteProduct
          key={str}
          id={allProduct[i].id}
          name={allProduct[i].name}
        />);
      }
    }
    setMyProducts(myProductsRef.current);
  }, [status, dispatch, allProduct]);

  return (
    <div className="container">
      {myProducts}
    </div>
  );
};

export default DeletePage;
