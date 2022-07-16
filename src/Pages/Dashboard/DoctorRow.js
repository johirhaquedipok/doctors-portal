import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, idx, refetch }) => {
  const handleDelete = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Doctor ${doctor?.name} is deleted.`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={doctor?.img} alt={doctor?.name} />
          </div>
        </div>
      </td>
      <td>{doctor?.name}</td>
      <td>{doctor?.speciality}</td>
      <td>
        <button
          className="btn btn-xs btn-error btn-outline"
          onClick={() => handleDelete(doctor?.email)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
