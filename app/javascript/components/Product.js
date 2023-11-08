import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LuPlay } from 'react-icons/lu';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { setProductId } from '../redux/product/currentProductSlice';
import ProductService from '../Service/classApi';
import Loader from '../Ui/Loader';
import showError from '../Ui/ErrorAlert';

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerPage = 3;

  useEffect(() => {
    const getall = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getAllProducts();
        if (response) {
          setProducts(response);
          setLoading(false);
        } else {
          showError('Something went wrong!, try again');
        }
      } catch (error) {
        showError(`${error}, Please try again`);
        setLoading(false);
      }
    };
    getall();
  }, [dispatch]);

  // Function to handle next slide
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  // Function to handle previous slide
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  // Filter products with removed === false
  const filteredProducts = products.filter((product) => !product.removed);

  // Calculate the range of products to display
  const startIdx = currentSlide * slidesPerPage;
  const endIdx = startIdx + slidesPerPage;

  // Slice the filtered products based on the current slide index
  const displayedProducts = filteredProducts.slice(startIdx, endIdx);

  return (
    <section className="md:w-full w-[100%] flex flex-col justify-center items-center h-full bg-slate-300">
      <div className="flex flex-col justify-center items-center py-3 pb-3">
        <h2 className="text-2xl">Our latest Product</h2>
        <p className="text-3xl">See all Products</p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-[100%]  w-full">
          <Loader />
        </div>
      ) : (
        <section className="flex flex-row gap-1">
          <div className="flex flex-row justify-center items-center">
            <button
              type="button"
              onClick={handlePrevSlide}
              disabled={currentSlide === 0}
              aria-label="Previous Slide"
              className={`${
                currentSlide === 0
                  ? 'hover:bg-gray-400'
                  : 'bg-green-800 hover:bg-green-800'
              } bg-green-800 border border-green-800 rotate-180 hover:bg-green-800 font-bold py-2 px-4 rounded`}
            >
              <LuPlay className="play-icon" />
            </button>
          </div>

          <div className="grid xl:grid-cols-3 xl:grid-rows-3 gap-2 w-[100%] xl:h-[35rem] h-full grid-cols-1 grid-row-2 justify-items-center">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="h-auto md:w-[20rem] outline-1 w-[10rem] my-10"
              >
                {/* Render product content as before */}
                <img
                  src={`${product.image_url}`}
                  alt={`${product.name}`}
                  className="w-[100%] h-[10rem] bg-cover"
                />
                <h4 className="text-bold text-1xl pt-10 text-center">
                  {product.name}
                </h4>
                <p className="text-1xl pt-10 text-center">
                  {product.description}
                </p>
                <p className="text-bold pt-10 text-center">
                  $
                  {product.price}
                  {' '}
                  / Session
                </p>
                <div className="flex flex-row justify-center mt-10 items-center gap-4" aria-label="Input Fields Container">
                  <a
                    href={product.web_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Web Link"
                  >
                    <FacebookRoundedIcon />
                  </a>
                  <a
                    href={product.web_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Web Link"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/your-instagram-url"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Web Link"
                  >
                    <InstagramIcon />
                  </a>
                  <button
                    type="submit"
                    onClick={() => {
                      dispatch(setProductId(product.id));
                      navigate('/product_details');
                    }}
                    aria-label="Submit button"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-center items-center">
            <button
              type="button"
              onClick={handleNextSlide}
              disabled={endIdx >= filteredProducts.length}
              aria-label="Next Slide"
              className={`${
                endIdx >= filteredProducts.length
                  ? 'hover:bg-gray-400'
                  : 'bg-green-800 hover:bg-green-800'
              } bg-green-800 border border-green-800 hover:bg-green-800 font-bold py-2 px-4 rounded`}
            >
              <LuPlay className="play-icon" />
            </button>
          </div>
        </section>
      )}
    </section>
  );
};

export default Product;
