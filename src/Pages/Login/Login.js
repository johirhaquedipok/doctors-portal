import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <button className="btn btn-accent">BSign In</button>
          </div>
          <div className="divider">OR</div>
          <div className="card-actions justify-center">
            <button className="btn btn-accent">Goole Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
