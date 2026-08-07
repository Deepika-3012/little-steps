import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-5 pb-3">
      <div className="container">

        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-4">

            <h3 className="fw-bold">
              👶 Little Steps
            </h3>

            <p>
              Trusted Childcare Platform that helps
              parents find safe and reliable daycare
              centers with ease.
            </p>

          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">

            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li>
                <Link
                  className="text-white text-decoration-none"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-white text-decoration-none"
                  to="/centers"
                >
                  Centers
                </Link>
              </li>

              <li>
                <Link
                  className="text-white text-decoration-none"
                  to="/my-bookings"
                >
                  My Bookings
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">

            <h5>Contact</h5>

            <p>
              <FaEnvelope className="me-2" />
              support@littlesteps.com
            </p>

            <p>
              <FaPhone className="me-2" />
              +91 98765 43210
            </p>

            <div className="fs-4">

              <FaFacebook className="me-3" />

              <FaInstagram className="me-3" />

              <FaLinkedin />

            </div>

          </div>

        </div>

        <hr />

        <p className="text-center mb-0">
          © 2026 Little Steps. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;