import { useState, useMemo } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PickupStation {
  name: string;
  address: string;
  state: string;
  latitude: number;
  longitude: number;
}

const pickupStations: PickupStation[] = [
  { name: "Ikeja City Mall", address: "Obafemi Awolowo Way, Ikeja", state: "Lagos", latitude: 6.6018, longitude: 3.3515 },
  { name: "Lekki Phase 1", address: "Admiralty Way, Lekki", state: "Lagos", latitude: 6.4474, longitude: 3.4726 },
  { name: "Surulere Hub", address: "Adeniran Ogunsanya St, Surulere", state: "Lagos", latitude: 6.4969, longitude: 3.3573 },
  { name: "Yaba Tech Gate", address: "Herbert Macaulay Way, Yaba", state: "Lagos", latitude: 6.5158, longitude: 3.3800 },
  { name: "Victoria Island", address: "Adeola Odeku St, VI", state: "Lagos", latitude: 6.4281, longitude: 3.4219 },
  { name: "Festac Town", address: "22 Road, Festac", state: "Lagos", latitude: 6.4698, longitude: 3.2837 },
  { name: "Wuse Zone 5", address: "Wuse Zone 5, Abuja", state: "Abuja", latitude: 9.0765, longitude: 7.4859 },
  { name: "Garki Area 11", address: "Area 11, Garki", state: "Abuja", latitude: 9.0227, longitude: 7.4891 },
  { name: "Maitama Hub", address: "Aguiyi Ironsi St, Maitama", state: "Abuja", latitude: 9.0934, longitude: 7.5021 },
  { name: "Gwarinpa Station", address: "1st Avenue, Gwarinpa", state: "Abuja", latitude: 9.1084, longitude: 7.4023 },
  { name: "Port Harcourt GRA", address: "Aba Road, GRA", state: "Port Harcourt", latitude: 4.8156, longitude: 7.0498 },
  { name: "Ibadan Bodija", address: "Bodija Market, Ibadan", state: "Ibadan", latitude: 7.4174, longitude: 3.9054 },
  { name: "Kano Central", address: "Murtala Mohammed Way, Kano", state: "Kano", latitude: 12.0022, longitude: 8.5920 },
  { name: "Enugu Main", address: "Ogui Road, Enugu", state: "Enugu", latitude: 6.4584, longitude: 7.5464 },
  { name: "Benin Ring Road", address: "Ring Road, Benin", state: "Benin", latitude: 6.3350, longitude: 5.6037 },
  { name: "Owerri Hub", address: "Wetheral Road, Owerri", state: "Owerri", latitude: 5.4836, longitude: 7.0332 },
];

const Stations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStation, setSelectedStation] = useState<PickupStation>(pickupStations[0]);

  const filteredStations = useMemo(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return pickupStations.filter(
      (station) =>
        station.name.toLowerCase().includes(lowercasedTerm) ||
        station.address.toLowerCase().includes(lowercasedTerm) ||
        station.state.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm]);

  const handleStationClick = (station: PickupStation) => {
    setSelectedStation(station);
  };

  return (
    <section id="stations" className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Explore our network and pickup points
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With 283+ Pickup Points, dropping off a package is as easy as walking down the street.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Station List */}
          <div className="lg:col-span-1 bg-card rounded-xl border border-border p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search stations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <ScrollArea className="h-[400px]">
              <div className="grid gap-2 pr-4">
                {filteredStations.map((station, index) => (
                  <Button
                    key={index}
                    variant={selectedStation.name === station.name ? "default" : "outline"}
                    className="w-full justify-between text-left h-auto py-3"
                    onClick={() => handleStationClick(station)}
                  >
                    <span className="truncate">{station.name}</span>
                    <MapPin className="w-4 h-4 flex-shrink-0 ml-2" />
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 bg-card rounded-xl border border-border overflow-hidden">
            <iframe
              title="Pickup Station Map"
              width="100%"
              height="500"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${selectedStation.longitude - 0.02}%2C${selectedStation.latitude - 0.015}%2C${selectedStation.longitude + 0.02}%2C${selectedStation.latitude + 0.015}&layer=mapnik&marker=${selectedStation.latitude}%2C${selectedStation.longitude}`}
              allowFullScreen
            />
            <div className="p-4 border-t border-border">
              <h3 className="font-semibold text-foreground">{selectedStation.name}</h3>
              <p className="text-sm text-muted-foreground">{selectedStation.address}, {selectedStation.state}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stations;
