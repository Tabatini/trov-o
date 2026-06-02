import { Swiper } from "swiper/react";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "./slider.css";
const Slider = ({ children, settings }) => {
    return (
        <Swiper
            modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Autoplay,
                EffectFade,
            ]}
            navigation={true}

            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}

            scrollbar={{
                draggable: true,
            }}

            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}

            effect={"fade"}

            fadeEffect={{
                crossFade: true,
            }}

            speed={1000}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            allowTouchMove={true}
            {...settings}
        >
            {children}
        </Swiper>
    );
};

export default Slider;