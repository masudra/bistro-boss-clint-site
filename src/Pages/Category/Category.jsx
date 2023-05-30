
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import logo1 from '../../assets/home/slide1.jpg'
import logo2 from '../../assets/home/slide2.jpg'
import logo3 from '../../assets/home/slide3.jpg'
import logo4 from '../../assets/home/slide4.jpg'
import logo5 from '../../assets/home/slide5.jpg'
import SeactionTitle from "../../Component/SeactionTitle/SeactionTitle";


const Category = () => {
    return (
        <section>
            <SeactionTitle
             heading ={"---From 11:00am to 10:00pm---"}
            subheading = {"Shop ONLINE"}>
            </SeactionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-6 mb-16"
            >
                <SwiperSlide>
                    <img src={logo1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white"> Salad </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={logo1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white"> Salad </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={logo2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white"> pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={logo3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white"> soup </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={logo4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white"> Desert </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={logo5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-24 text-white"> Salad</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;