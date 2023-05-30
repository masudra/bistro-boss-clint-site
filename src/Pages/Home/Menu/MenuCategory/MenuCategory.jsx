import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ item, title, img, }) => {
    return (
        <div className="">
            {title && <Cover img={img} title={title} ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 p-4 my-10">
                {
                    item.map(singelmenu => <MenuItem key={singelmenu._id} singelmenu={singelmenu}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className=" mb-5 btn btn-outline btn-primary border-0 border-b-4">View Full  Menu</button>
            </Link>

        </div>
    );
};

export default MenuCategory;