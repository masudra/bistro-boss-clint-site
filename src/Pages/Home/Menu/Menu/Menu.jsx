import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import baner from '../../../../assets/menu/banner3.jpg'
import menuBaner from '../../../../assets/menu/dessert-bg.jpeg'
import menuBaner2 from '../../../../assets/menu/salad-bg.jpg'
import menuBaner3 from '../../../../assets/menu/pizza-bg.jpg'
import menuBaner4 from '../../../../assets/menu/soup-bg.jpg'

import useMenu from "../../../../Hooks/useMenu";
import SeactionTitle from "../../../../Component/SeactionTitle/SeactionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={baner}
                title={'OUR MENU'}
                minititle={'Would you like to try a dish?'}
            ></Cover>
            <SeactionTitle
                heading={"Don't miss"}
                subheading={"TODAY'S OFFER"}
            ></SeactionTitle>
            <MenuCategory item={offered}></MenuCategory>
            <MenuCategory item={dessert} title={'Dessert'} img={menuBaner}></MenuCategory>
            <MenuCategory item={salad} title={'Salad'} img={menuBaner2}></MenuCategory>
            <MenuCategory item={pizza} title={'Pizza'} img={menuBaner3}></MenuCategory>
            <MenuCategory item={soup} title={'Soup'} img={menuBaner4}></MenuCategory>

        </div>
    );
};

export default Menu;