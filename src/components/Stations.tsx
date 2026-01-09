import { useState, useMemo, useEffect } from "react";
import { MapPin, Search, Clock, Phone, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PickupStation {
  name: string;
  week: string;
  weekend: string;
  number: string;
  address: string;
  state: string;
  landmark: string;
  latitude: number;
  longitude: number;
}

const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/19_ER7XMk2DSo_iTFL7RY1Hk_KRwkbuMEh6AEd5TypqM/export?format=csv";

const parseCSV = (csv: string): PickupStation[] => {
  const lines = csv.split('\n');
  const stations: PickupStation[] = [];
  
  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    
    // Parse CSV properly handling commas in quoted fields
    const values: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    
    const [name, week, weekend, number, address, state, , landmark, , lat, lng] = values;
    
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);
    
    if (name && address && !isNaN(latitude) && !isNaN(longitude)) {
      stations.push({
        name: name.replace(/"/g, ''),
        week: week || 'Mon-Fri 8am-6pm',
        weekend: weekend || 'Sat 9am-5pm',
        number: number || '',
        address: address.replace(/"/g, ''),
        state: state || '',
        landmark: landmark || '',
        latitude,
        longitude
      });
    }
  }
  
  return stations;
};

const Stations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [stations, setStations] = useState<PickupStation[]>([]);
  const [selectedStation, setSelectedStation] = useState<PickupStation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await fetch(SHEET_CSV_URL);
        if (!response.ok) throw new Error('Failed to fetch stations');
        const csv = await response.text();
        const parsedStations = parseCSV(csv);
        setStations(parsedStations);
        if (parsedStations.length > 0) {
          setSelectedStation(parsedStations[0]);
        }
      } catch (err) {
        setError('Unable to load pickup stations');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStations();
  }, []);

  const filteredStations = useMemo(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return stations.filter(
      (station) =>
        station.name.toLowerCase().includes(lowercasedTerm) ||
        station.address.toLowerCase().includes(lowercasedTerm) ||
        station.state.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm, stations]);

  const handleStationClick = (station: PickupStation) => {
    setSelectedStation(station);
  };

  if (loading) {
    return (
      <section id="stations" className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="stations" className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-destructive">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="stations" className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Explore our network and pickup points
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With {stations.length}+ Pickup Points, dropping off a package is as easy as walking down the street.
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
                    variant={selectedStation?.name === station.name ? "default" : "outline"}
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
            {selectedStation && (
              <>
                <iframe
                  title="Pickup Station Map"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${selectedStation.longitude - 0.02}%2C${selectedStation.latitude - 0.015}%2C${selectedStation.longitude + 0.02}%2C${selectedStation.latitude + 0.015}&layer=mapnik&marker=${selectedStation.latitude}%2C${selectedStation.longitude}`}
                  allowFullScreen
                />
                <div className="p-4 border-t border-border">
                  <h3 className="font-semibold text-foreground text-lg">{selectedStation.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{selectedStation.address}, {selectedStation.state}</p>
                  {selectedStation.landmark && (
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Landmark:</span> {selectedStation.landmark}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-4 mt-3 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{selectedStation.week}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{selectedStation.weekend}</span>
                    </div>
                    {selectedStation.number && (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <span>{selectedStation.number}</span>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stations;
