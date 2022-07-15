import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
const AddDoctor = () => {
  // form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch(`http://localhost:5000/service`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
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

          <select
            {...register("speciality")}
            className="select w-full max-w-xs"
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            placeholder="Photo"
            {...register("image", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.image?.type === "required" && (
            <p className="text-error">photo is required</p>
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
