import { useSignUp } from "../hooks/useSignUp"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";



function Signup() {
  const {signupWithGoogle , user , error} = useSignUp()

    return (
      <div className="min-h-screen grid place-items-center">
        <h2 className="font-bold text-4xl">Signup</h2>
        <button onClick={signupWithGoogle} className="btn btn-secondary">
        <FcGoogle className="text-3xl"/>
          <span className="text-2xl">Google</span></button>
          <p><Link className="hover:text-violet-600" to="/signin">Are you already registered?</Link></p>
          
      </div>
    )
  }
  
export default Signup