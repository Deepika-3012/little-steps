import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getDaycareById,
  updateDaycare,
} from "../services/daycareService";

function EditDaycare() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    capacity: "",
    pricePerDay: "",
  });

  useEffect(() => {
    loadDaycare();
  }, []);

  const loadDaycare = async () => {
    try {
      const res = await getDaycareById(id);

      setFormData({
        name: res.data.daycare.name,
        location: res.data.daycare.location,
        capacity: res.data.daycare.capacity,
        pricePerDay: res.data.daycare.pricePerDay,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
      await updateDaycare(id, formData, token);

      alert("Daycare Updated Successfully");
      navigate("/centers");
    } catch (error) {
      alert(error.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Edit Daycare</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            type="number"
            name="pricePerDay"
            value={formData.pricePerDay}
            onChange={handleChange}
          />

          <button className="btn btn-warning w-100">
            Update Daycare
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditDaycare;