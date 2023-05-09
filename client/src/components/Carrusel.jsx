import Slider from "react-slick";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
