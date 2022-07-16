import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
const AddDoctor = () => {
  // form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch(`http://localhost:5000/service`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  /*
   * 3 ways to store images
   * 01. Third pary storage // Free Open public Storage is ok
   * 02. your own storage
   * 03. Database: MongoDb
   *
   * Validate File
   * YUP: to validate file: Search:Yup file validation
   */

  // image storage key
  const imgStorageKey = "ef578a4bfff87ef72b159fd0382e8dad";

  const onSubmit = async (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            img: img,
          };
          // send to your database
          fetch(`http://localhost:5000/doctor`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accesToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to add the doctor");
              }
            });
        }
      });
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
