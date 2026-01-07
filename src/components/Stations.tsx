import { Map } from "lucide-react";

const Stations = () => {
  const cities = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Enugu", "+100 More Cities"];

  return (
    <div id="stations" className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">We Are Everywhere You Are</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          With 283+ Pickup Points, dropping off a package is as easy as walking down the street.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {cities.map((city, index) => (
            <span 
              key={index} 
              className="px-4 py-2 bg-card rounded-full border border-border text-muted-foreground text-sm"
            >
              {city}
            </span>
          ))}
        </div>

        <div className="bg-card p-2 rounded-xl shadow-sm inline-block w-full max-w-4xl h-64 md:h-96 relative overflow-hidden">
          <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
            <Map className="w-16 h-16 text-muted-foreground" />
            <span className="ml-2 text-muted-foreground font-medium">Interactive Map Integration</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stations;
