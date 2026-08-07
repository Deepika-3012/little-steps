import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBuilding,
  FaPlusCircle,
  FaClipboardList,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">

        <Link className="navbar-brand fw-bold fs-3" to="/">
          👶 Little Steps
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-center">

            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                <FaHome className="me-1" />
                Home
              </Link>
            </li>

            {/* Dashboard */}
            {token && (
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/dashboard"
                >
                  <FaTachometerAlt className="me-1" />
                  Dashboard
                </Link>
              </li>
            )}

            {/* Centers */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/centers">
                <FaBuilding className="me-1" />
                Centers
              </Link>
            </li>

            {/* Provider Only */}
            {token && user?.role === "provider" && (
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/add-daycare"
                >
                  <FaPlusCircle className="me-1" />
                  Add Daycare
                </Link>
              </li>
            )}

            {/* Logged-in Users */}
            {token && (
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/my-bookings"
                >
                  <FaClipboardList className="me-1" />
                  My Bookings
                </Link>
              </li>
            )}

            {/* Guest */}
            {!token ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to="/login"
                  >
                    <FaSignInAlt className="me-1" />
                    Login
                  </Link>
                </li>

                <li className="nav-item ms-2">
                  <Link
                    className="btn btn-light text-primary fw-bold rounded-pill px-3"
                    to="/register"
                  >
                    <FaUserPlus className="me-1" />
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item ms-2">
                <button
                  className="btn btn-danger rounded-pill px-3"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="me-1" />
                  Logout
                </button>
              </li>
            )}

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;