import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";

const Login = () => {
  // singin with google
  const [signInWithGoogle, googleuser, googleloading, googleError] =
    useSignInWithGoogle(auth);

  // sing in with email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // navigate
  const navigate = useNavigate();
  // location
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(user || googleuser);
  // form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  if (token) {
    navigate(from, { replace: true });
  }

  if (googleloading || loading) {
    return <Loading />;
  }
  // error handling
  let singInError;
  if (googleError || error) {
    singInError = (
      <p className="text-error">{googleError?.message || error?.message}</p>
    );
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Provide a valid email",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email?.type === "required" && (
                <p className="text-error">Email is required</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                placeholder="Your Password"
                {...register("password", { required: true, min: 6 })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-error">Password is required</p>
              )}
            </div>
            {/* sing in Error */}
            {singInError}
            {/* sing in button */}
            <div className="card-actions justify-center mt-3">
              <button type="submit" className="btn btn-block btn-accent">
                Sign In
              </button>
            </div>
          </form>
          {/* new sing up */}
          <p className="text-center">
            New to Doctors Portal?
            <Link to="/signup" className="text-primary text-center ml-3">
              Create New Account
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="card-actions justify-center">
            <button
              className="btn btn-block btn-outline"
              onClick={() => {
                signInWithGoogle();
                navigate("/appointment");
              }}
            >
              Google Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
