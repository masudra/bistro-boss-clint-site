import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const MyCart = () => {
    const [cart, refetch] = useCart()
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handelDelet = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item?._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="flex gap-10 justify-center ">
                <h2 className="uppercase text-2xl my-auto">Total orders: {cart.length}</h2>
                <h2 className="uppercase text-2xl my-auto">total price: ${total}</h2>
                <button className="btn">Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>#</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>

                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3 top-4">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>{item?.name}</td>
                                    <td>{item?.price}</td>
                                    <td>
                                        <button onClick={() => handelDelet(item)} className="btn btn-ghost btn-xs bg-red-600 text-white w-12 h-12 text-2xl"><FaTrash></FaTrash></button>
                                    </td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default MyCart;