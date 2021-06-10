import React from 'react'
import Slider from "react-slick";
import portada from "../imagenes/facebook_portada.png";
import portada2 from "../imagenes/portada2.jpeg";


const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 3000,
      };
    return (
        <div className="carrousel">
            <Slider {...settings}>
                <div className="slide">
                    <img src={portada} height={470} alt="" />
                </div>
                <div className="slide">
                    <img src={portada2} height={470} alt="" />
                </div>
            </Slider>
        </div>
    )
}
export default Carousel
