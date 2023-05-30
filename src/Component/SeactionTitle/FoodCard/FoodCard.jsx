
const FoodCard = ({item}) => {
    const {recipe,name,image,price}= item
    return (
        <div className="card w-96 bg-base-100 mt-10 shadow-xl mx-auto  ">
  <figure className="px-2 pt-4">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
    <p className="bg-blue-950 text-white text-2xl absolute right-0 mr-5 mt-10 px-2">${price}</p>
  <div className="card-body  ">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;