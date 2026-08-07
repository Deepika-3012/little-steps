import { useEffect, useState } from "react";
import {
  getMyBookings,
  cancelBooking,
} from "../services/bookingService";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await getMyBookings(token);

      setBookings(res.data.bookings);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = async (id) => {
    const token = localStorage.getItem("token");

    try {
      await cancelBooking(id, token);

      alert("Booking Cancelled");

      fetchBookings();
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="container py-5">

      <h2 className="text-center mb-4">
        My Bookings
      </h2>

      <div className="row">

        {bookings.map((booking) => (

          <div
            className="col-md-4 mb-4"
            key={booking._id}
          >

            <div className="card shadow">

              <div className="card-body">

                <h4>
                  {booking.daycare.name}
                </h4>

                <p>
                  <strong>Location:</strong>{" "}
                  {booking.daycare.location}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {booking.status}
                </p>

                <button
                  className="btn btn-danger w-100"
                  onClick={() =>
                    handleCancel(booking._id)
                  }
                >
                  Cancel Booking
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MyBookings;