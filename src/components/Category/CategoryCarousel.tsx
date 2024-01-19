import { useCallback, useRef } from "react"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"
import { Autoplay, Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [
 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/9666/1649666-v-e994faa3b7bf',
 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/88/1650088-v-c469bd343897', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5407/1645407-v-7b84525a75fa', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3617/1643617-v-df1c4ea39e07', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/2398/1642398-v-3ec00f10b8e7', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/217/1640217-v-99dd2cb43cd4', 'https://img10.hotstar.com/image/upload/l_discovery:PP:usp_callouts_on_artwork:Free:Free_Vertical_Eng/c_scale,fl_relative,w_1.0/c_crop,fl_relative,w_1.0,h_1.0/fl_layer_apply/f_auto,q_90,w_256/sources/r1/cms/prod/1221/1641221-v-abf34e6972ba',
 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/88/1650088-v-c469bd343897', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5407/1645407-v-7b84525a75fa', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3617/1643617-v-df1c4ea39e07', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/2398/1642398-v-3ec00f10b8e7', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/217/1640217-v-99dd2cb43cd4', 'https://img10.hotstar.com/image/upload/l_discovery:PP:usp_callouts_on_artwork:Free:Free_Vertical_Eng/c_scale,fl_relative,w_1.0/c_crop,fl_relative,w_1.0,h_1.0/fl_layer_apply/f_auto,q_90,w_256/sources/r1/cms/prod/1221/1641221-v-abf34e6972ba',
 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/88/1650088-v-c469bd343897', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5407/1645407-v-7b84525a75fa', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3617/1643617-v-df1c4ea39e07', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/2398/1642398-v-3ec00f10b8e7', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/217/1640217-v-99dd2cb43cd4', 'https://img10.hotstar.com/image/upload/l_discovery:PP:usp_callouts_on_artwork:Free:Free_Vertical_Eng/c_scale,fl_relative,w_1.0/c_crop,fl_relative,w_1.0,h_1.0/fl_layer_apply/f_auto,q_90,w_256/sources/r1/cms/prod/1221/1641221-v-abf34e6972ba',
 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/9666/1649666-v-e994faa3b7bf',
 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/88/1650088-v-c469bd343897', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5407/1645407-v-7b84525a75fa', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3617/1643617-v-df1c4ea39e07', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/2398/1642398-v-3ec00f10b8e7', 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/217/1640217-v-99dd2cb43cd4', 'https://img10.hotstar.com/image/upload/l_discovery:PP:usp_callouts_on_artwork:Free:Free_Vertical_Eng/c_scale,fl_relative,w_1.0/c_crop,fl_relative,w_1.0,h_1.0/fl_layer_apply/f_auto,q_90,w_256/sources/r1/cms/prod/1221/1641221-v-abf34e6972ba',
];

interface ILatestReleaseCarousel {
    isHover: boolean;
}

const CategoryCarousel = ({ isHover }: ILatestReleaseCarousel) => {
    const sliderRef = useRef<SwiperRef>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <Swiper ref={sliderRef}
            slidesPerView={6}
            spaceBetween={7}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
            loop={true}
            autoplay={false}
            className="relative" >
            {
                isHover
                && <>
                    <button onClick={handlePrev} className='px-2 py-28 bg-gradient-to-r from-gray-900 to-transparent absolute left-0 top-1/2 -translate-y-1/2 z-10 swiper-button-prev'>
                        <FaAngleLeft size={24} />
                    </button>
                    <button onClick={handleNext} className='px-2 py-11 bg-gradient-to-l from-gray-900 to-transparent absolute right-0 top-1/2 -translate-y-1/2 z-10 swiper-button-next'>
                        <FaAngleRight size={24} />
                    </button>
                </>
            }

            {images.map((url) => (
                <SwiperSlide className='md:h-60 object-cover rounded-md'>
                    <img src={url} alt="caraousel image" className="h-60 md:h-fit rounded-lg -mt-10" />
                </SwiperSlide>
            ))}

        </Swiper>
    )
}

export default CategoryCarousel