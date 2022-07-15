import React from "react";
import { useForm } from "react-hook-form";
const AddDoctor = () => {
  // form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <p>Add a new Doctor</p>
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
            <span className="label-text">Speciality</span>
          </label>

          <input
            type="text"
            placeholder="Your Speciality"
            {...register("speciality", { required: true, min: 6 })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.speciality && (
            <p className="text-error">Speciality is required</p>
          )}
        </div>
        <div className="card-actions justify-center mt-3">
          <button type="submit" className="btn btn-block btn-accent">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
