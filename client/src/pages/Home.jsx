import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        minHeight: "90vh",
        background:
          "linear-gradient(to right, #6dd5ed, #2193b0)",
      }}
    >
      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-6">

            <h1
              className="display-3 fw-bold text-white"
            >
              👶 Little Steps
            </h1>

            <h3 className="text-light mt-3">
              Trusted Childcare Platform
            </h3>

            <p
              className="text-white mt-4"
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
              }}
            >
              Find trusted daycare centers near you.
              Safe environment, experienced caregivers,
              affordable pricing, and easy online
              booking—all in one place.
            </p>

            <div className="mt-4">

              <Link
                to="/centers"
                className="btn btn-light btn-lg rounded-pill me-3 px-4"
              >
                Explore Centers
              </Link>

              <Link
                to="/register"
                className="btn btn-outline-light btn-lg rounded-pill px-4"
              >
                Get Started
              </Link>

            </div>

          </div>

          <div className="col-md-6 text-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png"
              alt="Daycare"
              className="img-fluid"
              style={{
                maxHeight: "420px",
              }}
            />

          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;