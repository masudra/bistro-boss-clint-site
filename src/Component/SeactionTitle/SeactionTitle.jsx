
const SeactionTitle = ({ heading, subheading }) => {
    return (
        <div className="mx-auto text-center md:w-2/6  mb-10">
            <p className="text-yellow-400 text-xl">---{heading}---</p>
            <h3 className="text-4xl uppercase p-4 bShop-y-4">{subheading}</h3>

        </div>
    );
};

export default SeactionTitle;