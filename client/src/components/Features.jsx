function Features() {
  const features = [
    {
      title: "Verified Caregivers",
      description: "Background-verified and experienced caregivers for your child's safety.",
    },
    {
      title: "24×7 Availability",
      description: "Book childcare services anytime, including night shifts and emergencies.",
    },
    {
      title: "Flexible Plans",
      description: "Choose hourly, daily, or monthly plans based on your needs.",
    },
    {
      title: "Safe Environment",
      description: "Clean, secure, and child-friendly daycare centers with safety measures.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">

        <h2 className="text-center mb-5">
          Why Choose Little Steps?
        </h2>

        <div className="row">

          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>

              <div className="card h-100 shadow-sm">

                <div className="card-body text-center">

                  <h5 className="card-title">
                    {feature.title}
                  </h5>

                  <p className="card-text">
                    {feature.description}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;