import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({item}) => {
    const {recipe,name,image,price,_id}= item
    const {user}= useContext(AuthContext)
    const naviget= useNavigate();
    const [, refetch] = useCart()

    const handelAddToCard =(item)=>{
      console.log(item);
      if(user && user.email){
        const cartItem ={menuItemId: _id,name,price,image, email: user.email }

        fetch('http://localhost:5000/carts',{
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
          if(data._id){
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your prodect has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            
          }
        })
      }
      else{
        Swal.fire({
          title: 'Login fast',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Login it!'
        }).then((result) => {
          if (result.isConfirmed) {
           naviget('/login')
          }
        })
      }
    }
   
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
      <button onClick={()=> handelAddToCard(item)} className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;