import FoodCard from "../../Component/SeactionTitle/FoodCard/FoodCard";

const OrderTab = ({ item }) => {
    return (
        <div>
            <div className="grid grid-cols-3">
                {
                    item.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>

        </div>
    );
};

export default OrderTab;