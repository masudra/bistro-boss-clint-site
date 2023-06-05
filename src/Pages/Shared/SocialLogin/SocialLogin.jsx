import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSingin } = useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handalGoogleLog = () => {
        googleSingin()
            .then(result => {
                const logUser = result.user
                console.log(logUser);

                const sevedData = { name: logUser.displayName, email: logUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(sevedData)
                })
                    .then(res => res.json())
                    .then(()=> {
                        navigate(from, { replace: true });
                    })


            })
            .catch(error => {
                alert(error.message)
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="mb-6 w-full text-center">
                <button onClick={handalGoogleLog} className="btn btn-circle  btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>


        </div>
    );
};

export default SocialLogin;