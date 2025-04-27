import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Banner from "../Banner";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    axiosPublic.get(`/products`).then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <div className="w-11/12 mx-auto">
        <h1 className="text-center my-5 text-3xl font-bold">
          Products Of Items:{products.length}{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <div key={product._id} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img src={product.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-center">
                  <Link to={`/viewdetails/${product._id}`}>
                    {" "}
                    <button className="btn btn-primary">View details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
