// import { useEffect, useState } from "react";
import SeactionTitle from "../../../Component/SeactionTitle/SeactionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopulerMenu = () => {
    const [menu] =useMenu()
    const popular =menu.filter(item =>item.category ==='popular' )
  

    return (
        <div>
            <SeactionTitle
            heading={'Check it out'}
            subheading={'FROM OUR MENU'}
            ></SeactionTitle>

           <div className="grid md:grid-cols-2 gap-10 p-4">
           {
                popular.map(singelmenu => <MenuItem key={singelmenu._id} singelmenu={singelmenu}></MenuItem>)
            }
            

           </div>
           <div className="text-center">
           <button className="btn btn-outline btn-primary border-0 border-b-4">View Full  Menu</button>

           </div>

        </div>
    );
};

export default PopulerMenu;