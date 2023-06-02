import { useState } from "react";
import Cover from "../../Pages/Shared/Cover/Cover";
import shoplogo from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categoris = ['Salad', 'Pizza', 'Soup', 'Dessert', 'Drinks'];
    const { category } = useParams();
    const initialIndex = categoris.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();

    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={shoplogo} title={'Our Order'} minititle={'Would you like to try a dish?'}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>dessert</Tab>
                    <Tab>drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab item={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={drinks}></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;