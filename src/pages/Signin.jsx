import { useSignUp } from "../hooks/useSignUp"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Signin() {
  const {signupWithGoogle , user , error} = useSignUp()
  return (
    <div className="min-h-screen grid place-items-center">
      <h2 className="font-bold text-4xl">Signin</h2>
    <button onClick={signupWithGoogle} className="btn btn-secondary">
    <FcGoogle className="text-3xl"/>
      <span className="text-2xl">Google</span></button>
      <p><Link className="hover:text-violet-600" to="/signup" >Don't you have an account?</Link></p>
  </div>
  )
}

export default Signin