import { Link } from 'react-router-dom';
import loginBaner from '../../assets/others/authentication.gif'
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Regster = () => {

    const { createUser}= useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email,data.password)
        .then(result =>{
            const loguser = result.user
            console.log(loguser);

        })
        .catch(error =>{
            alert(error.message)
        })

    };


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Regster</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 custombg">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-600'>Email is required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"  {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" placeholder="Password" className="input input-bordered" />
                                    {errors.password && <span className='text-red-600'>Password is required </span>}
                                    {errors.password?.type === 'minLength' && <p  className='text-red-600' role="alert">Password is required min 6 </p>}
                                    {errors.password?.type === 'maxLength' && <p  className='text-red-600' role="alert">Password is required max 20 </p>}


                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-600'>Name is required</span>}

                                    <label className="label">
                                        <p className="label-text-alt text-xl"> Already registered? <Link className=' link link-hover  text-orange-600' to='/login'>Go to log in</Link></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Regster" />
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="text-center lg:text-left">
                        <img className="w-[700px]" src={loginBaner} alt="" />

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Regster;