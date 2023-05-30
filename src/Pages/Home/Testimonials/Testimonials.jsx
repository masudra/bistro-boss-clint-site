import SeactionTitle from "../../../Component/SeactionTitle/SeactionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="my-12">
            <SeactionTitle
                heading={'What Our Clients Say'}
                subheading={'TESTIMONIALS'}
            ></SeactionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        review.map(reviewData => <div
                            key={reviewData._id}
                        >
                            <SwiperSlide>
                                <div className="flex flex-col items-center  gap-4p-12">
                                    <p className="mb-4"> <Rating
                                        style={{ maxWidth: 180 }}
                                        value={reviewData.rating}
                                        readOnly
                                    /></p>
                                    <p className="mx-20">{reviewData.details}</p>
                                    <h2 className="text-3xl text-orange-500">{reviewData.name}</h2>
                                </div>
                            </SwiperSlide>

                        </div>)
                    }

                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;