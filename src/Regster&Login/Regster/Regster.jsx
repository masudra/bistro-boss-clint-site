import { Link } from 'react-router-dom';
import loginBaner from '../../assets/others/authentication.gif'
import { Helmet } from 'react-helmet-async';

const Regster = () => {


    const handelRegsterForm = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Regster</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 custombg">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <form onSubmit={handelRegsterForm}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                    <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" />

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