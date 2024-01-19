import { useCallback, useRef } from "react"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { Autoplay, Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import caraousel1 from "../../assets/carousel1.webp"
import caraousel2 from "../../assets/carousel2.webp"
import caraousel3 from "../../assets/carousel3.webp"
import caraousel4 from "../../assets/carousel4.webp"
import caraousel5 from "../../assets/carousel5.webp"
import caraousel6 from "../../assets/carousel6.webp"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [caraousel1, caraousel2, caraousel3, caraousel4, caraousel5, caraousel6, caraousel4, caraousel5, caraousel6, caraousel1, caraousel2, caraousel3, caraousel1, caraousel2, caraousel3, caraousel4, caraousel5, caraousel6, caraousel4, caraousel5, caraousel6, caraousel1, caraousel2, caraousel3];

export default function HeroItemCaraousel() {

    const sliderRef = useRef<SwiperRef>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return <Swiper ref={sliderRef}
        slidesPerView={6}
        spaceBetween={7}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        className="relative w-[30rem] mr-12 hidden lg:block" >
        <button onClick={handlePrev} className=' py-3 bg-gradient-to-r from-gray-900 to-transparent absolute left-0 top-0 z-10 swiper-button-prev'>
            <FaAngleLeft size={24} />
        </button>
        <button onClick={handleNext} className=' py-3 bg-gradient-to-l from-gray-900 to-transparent absolute right-0 top-0 z-10 swiper-button-next'>
            <FaAngleRight size={24} />
        </button>

        {images.map((url) => (
            <SwiperSlide className='!w-[5rem]'>
                <img src={url} alt="caraousel image" className="rounded-md" />
            </SwiperSlide>
        ))}

    </Swiper>
}