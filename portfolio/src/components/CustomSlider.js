import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './CustomSlider.css'; 
import slide1 from '../images/FavAni_anime_page.png';
import slide2 from '../images/apt_rental_home.png';
import slide3 from '../images/Apt_rental_question.png';
import slide4 from '../images/android_UI_design.png';


const slides = [
    { image: slide1 },
    { image: slide2 },
    { image: slide3 },
    { image: slide4 },
  ];

  function CustomSlider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <div className="slider-wrapper" style={{ padding: '25px', backgroundColor: '#C2CBB2' }}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={prevSlide} className='left-arrow'/>
        <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={nextSlide} className='right-arrow'/>
        {slides.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <div className="image-container"> 
                    <img src={slide.image} alt="slide image" className="image" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="dots">
        {slides.map((_, idx) => (
          <span key={idx} className={idx === current ? "dot active" : "dot"} onClick={() => setCurrent(idx)}></span>
        ))}
      </div>
    </section>
  );
};

export default CustomSlider;
