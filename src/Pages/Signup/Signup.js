import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";

const Signup = () => {
  // singin with google
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // create with email and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // update the name of the user
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // navigate
  const navigate = useNavigate();

  // location
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // token
  const [token] = useToken(user || googleUser);

  // form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log(data);
  };

  if (token) {
    navigate(from, { replace: true });
    console.log(googleUser);
  }

  if (googleLoading || loading || updating) {
    return <Loading />;
  }
  // error handling
  let singInError;
  if (googleError || error || updateError) {
    singInError = (
      <p className="text-error">
        {googleError?.message || error?.message || updateError?.message}
      </p>
    );
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Your Name"
                {...register("name", {
                  required: true,
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email?.type === "required" && (
                <p className="text-error">Name is required</p>
              )}
            </div>
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
            <div className="card-actions justify-center mt-3">
              <button type="submit" className="btn btn-block btn-accent">
                Sign Up
              </button>
            </div>
          </form>
          {/* error */}
          {singInError}
          <p className="text-center">
            Already have an account?
            <Link to="/login" className="text-primary  ml-3">
              Sign In
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="card-actions justify-center">
            <button
              className="btn btn-block btn-outline"
              onClick={() => signInWithGoogle()}
            >
              Google Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
