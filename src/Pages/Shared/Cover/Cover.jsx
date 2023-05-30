import { Parallax } from 'react-parallax';

const Cover = ({ img, title, minititle }) => {
    return (


        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div>
                <div className="hero h-[500px]" >
                    <div className="hero-overlay bg-opacity-20"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className=" max-w-md bg-black bg-opacity-30 w-[900px] h-[200px] justify-center">
                            <h1 className="mb-5 text-5xl font-bold my-12">{title}</h1>
                            <p className="mb-5">{minititle}</p>
                        </div>
                    </div>
                </div>

            </div>
        </Parallax>

    );
};

export default Cover;