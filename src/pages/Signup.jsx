import { useSignUp } from "../hooks/useSignUp"
import { FcGoogle } from "react-icons/fc";



function Signup() {
  const {signupWithGoogle , user , error} = useSignUp()

    return (
      <div className="min-h-screen grid place-items-center">
        <button onClick={signupWithGoogle} className="btn btn-secondary">
        <FcGoogle className="text-3xl"/>
          <span className="text-2xl">Google</span></button>
      </div>
    )
  }
  
export default Signup