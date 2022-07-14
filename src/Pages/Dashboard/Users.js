import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesToken")}`,
      },
    }).then((res) => res.json())
  );

  const makeAdmin = (email) => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("User Made to Admin");
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      All Users
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => (
              <tr key={user?._id}>
                <th>{idx + 1}</th>
                <td>{user?.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      className="btn btn-xs"
                      onClick={() => makeAdmin(user?.email)}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs">Remove User</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
