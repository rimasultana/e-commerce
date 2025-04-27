import { Link, useLoaderData, useNavigate } from "react-router";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const ViewDetails = () => {
  const view = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleDeleteId = (_id) => {
    axiosPublic
      .delete(`/products/${_id}`)
      .then((res) => {
        if (res?.data?.acknowledged) {
          Swal.fire({
            title: "Delete Product",
            icon: "success",
            draggable: true,
          });
          navigate("/");
        }
      })
      .catch(() => {
        toast.error("Failed to delete item!");
      });
  };
  return (
    <div>
      <div className="card bg-base-100 w-3xl mx-auto shadow-sm">
        <figure>
          <img className="w-full object-cover" src={view.image} alt="Shoes" />
        </figure>
        <div className="card-body flex">
          <h2 className="card-title">{view.title}</h2>
          <p>{view.description}</p>
          <div className="card-actions justify-center gap-10 my-3">
            <Link to={`/update/${view._id}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
            <button
              onClick={() => handleDeleteId(view._id)}
              className="btn btn-secondary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
