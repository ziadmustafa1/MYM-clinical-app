import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slider from "../../assets/sliedr.svg";

import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import "./swiper.css";

const Slider = () => {
    const sliders = [
        {
            id: 1,
            image: slider,
            description: `Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae
            consequatu`,
        },
        {
            id: 2,
            image: slider,
            description: `Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae
            consequatu`,
        },
        {
            id: 3,
            image: slider,
            description: `Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae
            consequatu`,
        },
    ];
    return (
        <>
            <Swiper
                className='mySwiper'
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                speed={1000}
            >
                {sliders.map((item) => (
                    <SwiperSlide key={item.id} className=" md:px-8 text-center px-5">
                        <div className='swiper-slide'>
                            <div className='flex justify-center items-center'>
                                <img
                                    src={item.image}
                                    alt='logo'
                                    className='flex justify-end img-s'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Slider;