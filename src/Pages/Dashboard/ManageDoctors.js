import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () => {
    return fetch(`http://localhost:5000/doctor`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesToken")}`,
      },
    }).then((res) => res.json());
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="text-4xl">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, idx) => (
              <DoctorRow
                key={doctor?._id}
                doctor={doctor}
                idx={idx}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
