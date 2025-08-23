import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import mainHeroImg from '../assets/images/main_hero_img.jpg';


function Hero({videogames}) {

    // const swiperRef = useRef(null);
    // const swiperInstance = useRef(null);

    // // Setup swiper after videogames are loaded
    // useEffect(() => {
    //     if (swiperRef.current && videogames && videogames.length > 0) {
    //         // Destroy existing swiper if it exists
    //         if (swiperInstance.current) {
    //             swiperInstance.current.destroy();
    //         }

    //         // Create new swiper instance
    //         swiperInstance.current = new Swiper(swiperRef.current, {
    //             modules: [Autoplay, Pagination],
    //             direction: 'horizontal',
    //             loop: videogames.length > 1, // Only loop if there's more than one slide
    //             autoplay: videogames.length > 1 ? {
    //                 delay: 3000,
    //                 disableOnInteraction: false,
    //             } : false,
    //             speed: 800,
    //             pagination: {
    //                 el: '.swiper-pagination',
    //                 clickable: true,
    //                 dynamicBullets: true,
    //             }
    //         });
    //     }

    //     // Cleanup function to destroy swiper when component unmounts
    //     return () => {
    //         if (swiperInstance.current) {
    //             swiperInstance.current.destroy();
    //             swiperInstance.current = null;
    //         }
    //     };
    // }, [videogames]);

  return (
    <div>
        <img 
        src={mainHeroImg} 
        alt="Futuristic dj" 
        className='img-fluid'
        />
    </div>
    // <div 
    //     ref={swiperRef}
    //     className="swiper"
    //     role='region'
    //     aria-label="Featured video games carousel"
    //     >
    //     <div className="swiper-wrapper">
    //         {videogames.map((videogame, index) => (
    //         <div 
    //         key={videogame.id || index}
    //         className="swiper-slide">
    //             <img 
    //             src={videogame.cover_image}
    //             alt={videogame.title}
    //             loading='lazy'
    //             />
    //         </div>
    //         ))}
    //     </div>
    //     <div className="swiper-pagination"></div>
    // </div>
  )
}

export default Hero