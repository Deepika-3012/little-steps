function CenterCard({ center }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow">

        <img
          src={center.image}
          className="card-img-top"
          alt={center.name}
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="card-body">

          <h5>{center.name}</h5>

          <p className="text-muted">
            📍 {center.location}
          </p>

          <p>
            ⭐ {center.rating}
          </p>

          <p>
            ₹ {center.price}/Hour
          </p>

          <button className="btn btn-primary w-100">
            View Details
          </button>

        </div>

      </div>
    </div>
  );
}

export default CenterCard;