import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDaycare } from "../services/daycareService";

function AddDaycare() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    capacity: "",
    pricePerDay: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const res = await createDaycare(formData, token);

      alert(res.data.message);

      navigate("/centers");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add daycare");
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Add Daycare</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Daycare Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Capacity</label>
            <input
              type="number"
              className="form-control"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price Per Day</label>
            <input
              type="number"
              className="form-control"
              name="pricePerDay"
              value={formData.pricePerDay}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Add Daycare
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddDaycare;