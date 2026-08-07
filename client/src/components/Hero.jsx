function Hero() {
  return (
    <section className="bg-primary text-white py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6">

            <h1 className="display-4 fw-bold">
              Trusted 24×7 Childcare for Working Parents
            </h1>

            <p className="lead mt-3">
              Find verified daycare centers, experienced caregivers,
              and flexible childcare plans anytime, anywhere.
            </p>

            <button className="btn btn-light btn-lg mt-3 me-3">
              Book Now
            </button>

            <button className="btn btn-outline-light btn-lg mt-3">
              Explore Centers
            </button>

          </div>

          <div className="col-lg-6 text-center">

            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600"
              alt="Childcare"
              className="img-fluid rounded"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;