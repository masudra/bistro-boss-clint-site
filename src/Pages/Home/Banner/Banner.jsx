import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import logo1 from '../../../assets/home/01.jpg'
import logo2 from '../../../assets/home/02.jpg'
import logo3 from '../../../assets/home/03.png'
import logo4 from '../../../assets/home/04.jpg'
import logo5 from '../../../assets/home/05.png'
import logo6 from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={logo1}/>
                </div>
                <div>
                    <img src={logo2}/>
                </div>
                <div>
                    <img src={logo3} />
                </div>
                <div>
                    <img src={logo4}/>
                </div>
                <div>
                    <img src={logo5}/>
                </div>
                <div>
                    <img src={logo6}/>
                </div>
               
            </Carousel>
    );
};

export default Banner;