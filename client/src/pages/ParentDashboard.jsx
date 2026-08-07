import { Link } from "react-router-dom";

function ParentDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container py-5">
      <h2 className="mb-4">
        Welcome, {user?.name}
      </h2>

      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-4">
            <h3>📅</h3>
            <h5>My Bookings</h5>

            <Link
              to="/my-bookings"
              className="btn btn-primary mt-3"
            >
              View
            </Link>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-4">
            <h3>🏠</h3>
            <h5>Browse Daycares</h5>

            <Link
              to="/centers"
              className="btn btn-success mt-3"
            >
              Browse
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ParentDashboard;