import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  if (user) {
    console.log(user);
  }

  if (loading) {
    console.log(loading);
  }
  if (error) {
    console.log(error);
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
            <div className="card-actions justify-center mt-3">
              <button type="submit" className="btn btn-block btn-accent">
                Sign In
              </button>
            </div>
          </form>
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

export default Login;
