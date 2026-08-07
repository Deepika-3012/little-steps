import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllDaycares,
  deleteDaycare,
} from "../services/daycareService";

import {
  FaMapMarkerAlt,
  FaUsers,
  FaRupeeSign,
  FaEye,
  FaEdit,
  FaTrash,
  FaSearch,
} from "react-icons/fa";

import daycareImage from "../assets/daycare.jpg";

function Centers() {
  const [daycares, setDaycares] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchDaycares();
  }, []);

  const fetchDaycares = async () => {
    try {
      const res = await getAllDaycares();
      setDaycares(res.data.daycares);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this daycare?"
    );

    if (!confirmDelete) return;

    const token = localStorage.getItem("token");

    try {
      await deleteDaycare(id, token);

      alert("Daycare Deleted Successfully");

      fetchDaycares();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Delete Failed"
      );
    }
  };

  const filteredDaycares = daycares.filter((daycare) => {
    const matchName = daycare.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchLocation =
      location === "" ||
      daycare.location
        .toLowerCase()
        .includes(location.toLowerCase());

    return matchName && matchLocation;
  });

  return (
    <div className="container py-5">

      <h1 className="text-center fw-bold text-primary mb-2">
        🏡 Daycare Centers
      </h1>

      <p className="text-center text-muted mb-5">
        Find the best childcare centers near you.
      </p>

      {/* Search & Filter */}

      <div className="row mb-4">

        <div className="col-md-6 mb-2">

          <div className="input-group">

            <span className="input-group-text">
              <FaSearch />
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Search daycare..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

        </div>

        <div className="col-md-6 mb-2">

          <input
            type="text"
            className="form-control"
            placeholder="Filter by location..."
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
          />

        </div>

      </div>

      {/* Cards */}

      <div className="row">

        {filteredDaycares.length > 0 ? (

          filteredDaycares.map((daycare) => (

            <div
              className="col-lg-4 col-md-6 mb-4"
              key={daycare._id}
            >

              <div
                className="card shadow border-0 h-100"
                style={{
                  borderRadius: "18px",
                }}
              >

                <img
                  src={daycareImage}
                  alt={daycare.name}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "18px",
                    borderTopRightRadius: "18px",
                  }}
                />

                <div className="card-body">

                  <h4 className="fw-bold text-primary">
                    {daycare.name}
                  </h4>

                  <hr />

                  <p>
                    <FaMapMarkerAlt className="text-danger me-2" />
                    {daycare.location}
                  </p>

                  <p>
                    <FaUsers className="text-success me-2" />
                    Capacity : {daycare.capacity}
                  </p>

                  <p>
                    <FaRupeeSign className="text-warning me-2" />
                    ₹{daycare.pricePerDay}/day
                  </p>

                  <Link
                    to={`/daycare/${daycare._id}`}
                    className="btn btn-primary w-100 rounded-pill mb-2"
                  >
                    <FaEye className="me-2" />
                    View Details
                  </Link>

                  {user?.role === "provider" &&
                    daycare.provider?._id === user.id && (
                      <>
                        <Link
                          to={`/edit-daycare/${daycare._id}`}
                          className="btn btn-warning w-100 rounded-pill mb-2"
                        >
                          <FaEdit className="me-2" />
                          Edit
                        </Link>

                        <button
                          className="btn btn-danger w-100 rounded-pill"
                          onClick={() =>
                            handleDelete(daycare._id)
                          }
                        >
                          <FaTrash className="me-2" />
                          Delete
                        </button>
                      </>
                    )}

                </div>

              </div>

            </div>

          ))

        ) : (

          <div className="text-center">

            <h3>No Daycare Found 😔</h3>

          </div>

        )}

      </div>

    </div>
  );
}

export default Centers;