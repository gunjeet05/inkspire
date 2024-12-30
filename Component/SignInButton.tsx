import { useSession, signIn,signOut } from "next-auth/react";

const SignInButton=()=>{
  const {data:session}=useSession();
  console.log("session in sign in button ", session);
  const handleLogin=async(e:any)=>{
    if(!session){
      await signIn('google');
    }
    else{
      await signOut();
    }

  }

  return (
  <button onClick={handleLogin}>
    {
        session ? "Logout":"Login"
    }
    

  
  </button>)
}

export default SignInButton;