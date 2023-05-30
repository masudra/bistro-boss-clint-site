import SeactionTitle from "../../../Component/SeactionTitle/SeactionTitle";
import photo from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="mt-8 mb-8 bgimg  bg-fixed">
            <SeactionTitle
                heading={'Check it out'}
                subheading={'FROM OUR MENU'}
            ></SeactionTitle>

            <div className="md:flex p-10 gap-12 justify-center items-center text-white bg-slate-500 bg-opacity-40 ">
                <div>
                    <img className="w-80 h-52" src={photo} alt="" />
                </div>
                <div className="w-96">
                    <h4>March 20, 2023</h4>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe eveniet nobis dignissimos consequatur similique repudiandae voluptatum nisi adipisci iusto corporis explicabo in, sint, aspernatur eum corrupti sapiente consequuntur.</p>
                    <button className="btn btn-outline btn-primary border-0  border-b-4 
  caret-violet-100">Button</button>

                </div>


            </div>
        </div>
    );
};

export default Featured;