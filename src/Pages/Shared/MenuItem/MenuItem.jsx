
const MenuItem = ({singelmenu}) => {
    const {recipe,name,image,price}= singelmenu
    console.log(singelmenu)
    return (
    
            <div className="flex gap-4">
            <img style={{bShopRadius:'0 200px 200px 200px'}} className="w-[100px] " src={image}alt="" />
            <div>
                <h4 className="uppercase">{name}------------------</h4>
                <p>{recipe}</p>

            </div>
            <p className="text-yellow-600 text-xl">${price}</p>
    
        </div>
        
    );
};

export default MenuItem;