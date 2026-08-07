import CenterCard from "./CenterCard";

function PopularCenters() {

  const centers = [
    {
      id: 1,
      name: "Happy Kids Daycare",
      location: "Trichy",
      rating: 4.8,
      price: 250,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600"
    },

    {
      id: 2,
      name: "Tiny Stars",
      location: "Chennai",
      rating: 4.9,
      price: 300,
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600"
    },

    {
      id: 3,
      name: "Little Angels",
      location: "Coimbatore",
      rating: 4.7,
      price: 220,
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600"
    }
  ];

  return (
    <section className="py-5 bg-light">

      <div className="container">

        <h2 className="text-center mb-5">
          Popular Daycare Centers
        </h2>

        <div className="row">

          {centers.map((center) => (
            <CenterCard
              key={center.id}
              center={center}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default PopularCenters;