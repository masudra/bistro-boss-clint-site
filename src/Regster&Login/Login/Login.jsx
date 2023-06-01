import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { Helmet } from "react-helmet-async";
import './Login.css'
import loginBaner from '../../assets/others/authentication.gif'
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const [Disable, setDisable] = useState(true)
    const {signin}=useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);

    }, [])

    const handelLoginForm = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signin(email,password)
        .then(result =>{
            const loguser= result.user 
            console.log(loguser);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: ' Login  successful',
                showConfirmButton: false,
                timer: 1500
              })
            navigate(from, { replace: true });
        })
        .catch(error => {
            alert(error.message)
        })

    }


    const handelcaptchaBtn =event => {
        const user_captcha_value = event.target.value;

        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false)
        }

        else {
            setDisable(true)
        }


    }


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 custombg">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <form onSubmit={handelLoginForm}>
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
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input type="text"  onBlur={handelcaptchaBtn} name="captcha" placeholder="Enter captcha" className="input input-bordered"  />
                                    {/* <button  className="btn btn-outline btn-success btn-xs mt-2">VALIDATE</button> */}

                                    <label className="label">
                                        <p className="label-text-alt  text-xl">New here? <Link className=' link link-hover  text-orange-600'  to='/regster'> Create a New Account</Link></p>
                                    </label>
                                 
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" disabled={Disable} type="submit" value="Login" />
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

export default Login;