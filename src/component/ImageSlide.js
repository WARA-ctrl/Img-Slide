import ImageData from "./ImageData";
// import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const len = ImageData.length;
  //   console.log(len);

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(len - 1);
    } else {
      setCurrent(current - 1);
    }
    // current===0? setCurrent(len-1)
  };
  const nextSlide = () => {
    if (current === len - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <section className="slider">
      <MdKeyboardArrowLeft className="leftArrow" onClick={prevSlide} />
      {ImageData.map((data, index) => {
        console.log(index);
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div>
                <img src={data.image} alt={data.title} className="image" />
                <h1>{data.title}</h1>
              </div>
            )}
          </div>
        );
      })}
      <MdKeyboardArrowRight className="rightArrow" onClick={nextSlide} />
    </section>
  );
};
export default ImageSlider;
