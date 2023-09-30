import React, { useState, useEffect } from 'react';
import { LuPlay } from 'react-icons/lu';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LectureService from '../Service/classApi';
import Loader from '../Ui/Loader';
import showError from '../Ui/ErrorAlert';

const Lecture = () => {
  const [loading, setLoading] = useState(false);
  const [lectures, setLectures] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerPage = 3;

  useEffect(() => {
    const getall = async () => {
      setLoading(true);
      try {
        const response = await LectureService.getAllLectures();
        if (response) {
          setLectures(response);
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
  }, []);

  // Function to handle next slide
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  // Function to handle previous slide
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  // Calculate the range of lectures to display
  const startIdx = currentSlide * slidesPerPage;
  const endIdx = startIdx + slidesPerPage;

  // Filter lectures based on the current slide index
  const displayedLectures = lectures
    .slice(startIdx, endIdx)
    .filter((lecture) => !lecture.removed);

  return (
    <section className="md:w-full w-[100%] flex flex-col justify-center items-center h-full bg-white">
      <div className="flex flex-col justify-center items-center py-3 pb-3">
        <h2 className="text-2xl">Our latest Lecture</h2>
        <p className="text-3xl">See all lectures</p>
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
              className={`${
                currentSlide === 0
                  ? 'hover:bg-gray-400'
                  : 'bg-green-800 hover:bg-green-800'
              } bg-green-800 border border-green-800 rotate-180 hover:bg-green-800 font-bold py-2 px-4 rounded`}
            >
              <LuPlay className="play-icon" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 md:grid-rows-3 gap-2 w-[100%] md:h-[35rem] h-full grid-cols-1  grid-row-2 justify-items-center">
            {displayedLectures.map((lecture) => (
              <div
                key={lecture.id}
                className="h-auto md:w-[20rem] outline-1 w-[10rem] my-10"
              >
                <img
                  src={`${lecture.image_url}`}
                  alt={`${lecture.name}`}
                  className="w-[100%] h-[10rem] bg-cover"
                />
                <h4 className="text-bold text-1xl pt-10 text-center">
                  {lecture.name}
                </h4>
                <p className="text-1xl pt-10 text-center">
                  {lecture.description}
                </p>
                <p className="text-bold pt-10 text-center">
                  $
                  {lecture.price}
                  {' '}
                  / Session
                </p>
                <div className="flex flex-row justify-center mt-10 items-center gap-4">
                  <a
                    href={lecture.web_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookRoundedIcon />
                  </a>
                  <a
                    href={lecture.web_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/your-instagram-url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-center items-center">
            <button
              type="button"
              onClick={handleNextSlide}
              disabled={endIdx >= lectures.length}
              className={`${
                endIdx >= lectures.length
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

export default Lecture;
