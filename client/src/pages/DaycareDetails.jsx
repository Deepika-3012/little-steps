import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDaycareById } from "../services/daycareService";
import { bookDaycare } from "../services/bookingService";
function DaycareDetails() {
  const { id } = useParams();

  const [daycare, setDaycare] = useState(null);

  useEffect(() => {
    fetchDaycare();
  }, []);

  const fetchDaycare = async () => {
    try {
      const res = await getDaycareById(id);
      setDaycare(res.data.daycare);
    } catch (error) {
      console.log(error);
    }
  };

  if (!daycare) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }
const handleBooking = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await bookDaycare(id, token);

    alert(res.data.message);
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Booking Failed"
    );
  }
};

  return (
    <div className="container py-5">
      <div className="card shadow p-4">

        <h2>{daycare.name}</h2>

        <hr />

        <p>
          <strong>Location:</strong> {daycare.location}
        </p>

        <p>
          <strong>Capacity:</strong> {daycare.capacity}
        </p>

        <p>
          <strong>Price:</strong> ₹{daycare.pricePerDay}
        </p>

        <p>
          <strong>Verified:</strong>{" "}
          {daycare.isVerified ? "Yes" : "No"}
        </p>
<hr />

<button
  className="btn btn-success w-100"
  onClick={handleBooking}
>
  Book Now
</button>
      </div>
    </div>
  );
}

export default DaycareDetails;