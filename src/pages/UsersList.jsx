import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Icon from "../icons";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/users`).then((res) => {
      setUsers(res.data);
    });
  }, []);
  const handleDeleteUser = (id) => {
    console.log(id);
    axiosSecure.delete(`/users/${id}`).then((res) => {
      if (res?.data?.acknowledged) {
        Swal.fire({
          title: "Delete User!",
          icon: "success",
          draggable: true,
        });
      }
    });
  };
  return (
    <div className="my-5 w-11/12 mx-auto">
      <h1 className="text-xl text-center">Count Of user List:{users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Name Of Email</th>
              <th>Edit</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={item._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                    <Icon.USER_GROUP/>
                    User</td>
                <td
                  onClick={() => handleDeleteUser(item._id)}
                  className="text-red-300"
                >
                    <Icon.DELETE/>
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
