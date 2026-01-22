import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Package, Truck, Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Zone-based rate data
const ratesData = [
  { departure: "Zone 1", arrival: "Zone 1", small: "₦1,400", medium: "₦3,600", large: "₦5,800", time: "1-2 Business Days" },
  { departure: "Zone 1", arrival: "Zone 2", small: "₦1,400", medium: "₦3,800", large: "₦6,000", time: "2-4 Business Days" },
  { departure: "Zone 1", arrival: "Zone 3", small: "₦1,700", medium: "₦5,000", large: "₦15,000", time: "3-7 Business Days" },
  { departure: "Zone 1", arrival: "Zone 4", small: "₦1,400", medium: "₦3,500", large: "₦15,000", time: "4-9 Business Days" },
  { departure: "Zone 1", arrival: "Zone 5", small: "₦1,600", medium: "₦7,000", large: "₦22,000", time: "3-9 Business Days" },
  { departure: "Zone 1", arrival: "Zone 6", small: "₦1,900", medium: "₦7,100", large: "₦26,000", time: "8-9 Business Days" },
  { departure: "Zone 1", arrival: "Zone 7", small: "₦1,800", medium: "₦7,800", large: "₦30,000", time: "4-9 Business Days" },
  { departure: "Zone 2", arrival: "Zone 2", small: "₦2,200", medium: "₦3,800", large: "₦6,000", time: "5-7 Business Days" },
  { departure: "Zone 2", arrival: "Zone 3", small: "₦2,600", medium: "₦5,700", large: "₦18,000", time: "7-10 Business Days" },
  { departure: "Zone 2", arrival: "Zone 4", small: "₦2,100", medium: "₦3,600", large: "₦18,000", time: "8-13 Business Days" },
  { departure: "Zone 2", arrival: "Zone 5", small: "₦2,500", medium: "₦7,000", large: "₦25,000", time: "7-13 Business Days" },
  { departure: "Zone 2", arrival: "Zone 6", small: "₦2,800", medium: "₦7,500", large: "₦26,000", time: "12-13 Business Days" },
  { departure: "Zone 2", arrival: "Zone 7", small: "₦2,900", medium: "₦8,500", large: "₦30,000", time: "8-13 Business Days" },
  { departure: "Zone 3", arrival: "Zone 3", small: "₦3,000", medium: "₦7,000", large: "₦20,000", time: "7-10 Business Days" },
  { departure: "Zone 3", arrival: "Zone 4", small: "₦2,500", medium: "₦5,500", large: "₦22,000", time: "12-17 Business Days" },
  { departure: "Zone 3", arrival: "Zone 5", small: "₦3,000", medium: "₦9,000", large: "₦25,000", time: "8-14 Business Days" },
  { departure: "Zone 3", arrival: "Zone 6", small: "₦3,500", medium: "₦9,000", large: "₦30,000", time: "16-17 Business Days" },
  { departure: "Zone 3", arrival: "Zone 7", small: "₦3,300", medium: "₦10,000", large: "₦30,000", time: "12-17 Business Days" },
  { departure: "Zone 4", arrival: "Zone 4", small: "₦2,100", medium: "₦4,000", large: "₦16,000", time: "10-12 Business Days" },
  { departure: "Zone 4", arrival: "Zone 5", small: "₦2,500", medium: "₦7,500", large: "₦23,000", time: "8-12 Business Days" },
  { departure: "Zone 4", arrival: "Zone 6", small: "₦2,900", medium: "₦7,500", large: "₦30,000", time: "16-17 Business Days" },
  { departure: "Zone 4", arrival: "Zone 7", small: "₦2,800", medium: "₦8,000", large: "₦30,000", time: "12-17 Business Days" },
  { departure: "Zone 5", arrival: "Zone 5", small: "₦2,900", medium: "₦10,000", large: "₦26,000", time: "12-14 Business Days" },
  { departure: "Zone 5", arrival: "Zone 6", small: "₦3,500", medium: "₦11,000", large: "₦30,000", time: "8-17 Business Days" },
  { departure: "Zone 5", arrival: "Zone 7", small: "₦3,500", medium: "₦11,000", large: "₦30,000", time: "16-17 Business Days" },
  { departure: "Zone 6", arrival: "Zone 6", small: "₦3,500", medium: "₦11,000", large: "₦30,000", time: "14-16 Business Days" },
  { departure: "Zone 6", arrival: "Zone 7", small: "₦3,500", medium: "₦11,000", large: "₦35,000", time: "12-17 Business Days" },
  { departure: "Zone 7", arrival: "Zone 7", small: "₦3,500", medium: "₦12,000", large: "₦35,000", time: "16-18 Business Days" },
];

// Zone localities data
const zonesData = [
  {
    zone: "Zone 1",
    localities: ["Lagos"],
    color: "bg-primary/10 text-primary",
  },
  {
    zone: "Zone 2",
    localities: ["Agbara", "Mowe Ibafo", "Ajah", "Akute", "Awoyaya", "Badagry", "Epe", "Ibeju-Lekki", "Ijanikin", "Ikorodu", "Ojo", "Ojokoro", "Okokomaiko", "Sagamu"],
    color: "bg-orange-100 text-orange-700",
  },
  {
    zone: "Zone 3",
    localities: ["Abeokuta", "Abuja", "Port Harcourt", "Akure", "Awka", "Ibadan", "Asaba", "Benin", "Eleme", "Gwagwalada", "Idu", "Nnewi", "Obantoko", "Onitsha", "Osogbo", "Owerri", "Oyigbo"],
    color: "bg-blue-100 text-blue-700",
  },
  {
    zone: "Zone 4",
    localities: ["Ado Ekiti", "Agbor", "Akoko", "Ede", "Ikire", "Ikirun", "Ile Ife", "Ilesha", "Iwo", "Masaka", "Nsukka", "Offa", "Ogbomosho", "Ondo Town", "Ore", "Owo", "Oyo Town", "Umuahia", "Ilorin"],
    color: "bg-green-100 text-green-700",
  },
  {
    zone: "Zone 5",
    localities: ["Aba", "Ago Iwoye", "Calabar", "Enugu", "Ijebu Igbo", "Ijebu Ode", "Ikot Ekpene", "Ilaro", "Ilishan Remo", "Iperu", "Jos", "Kaduna", "Maiduguri", "Minna", "Sango Otta", "Redeemed Camp", "Uyo", "Warri", "Yenagoa"],
    color: "bg-purple-100 text-purple-700",
  },
  {
    zone: "Zone 6",
    localities: ["Abakaliki", "Bauchi", "Kano", "Eket", "Gombe", "Lokoja", "Okene", "Suleja", "Udu", "Yola", "Zaria"],
    color: "bg-red-100 text-red-700",
  },
  {
    zone: "Zone 7",
    localities: ["Abraka", "Agbarho", "Bonny Island", "Egor", "Ekpoma", "Etsako", "Fupre", "Keffi", "Lafia", "Markurdi", "Obiaruku", "Oghara", "Ozoro", "Sapele", "Ughelli", "Uromi"],
    color: "bg-amber-100 text-amber-700",
  },
];

const packageSizes = [
  {
    name: "Small Package",
    dimensions: "60x40x20 cm",
    weight: "0-5kg",
    examples: "Phones, shirts, books, accessories",
    icon: "📦"
  },
  {
    name: "Medium Package",
    dimensions: "80x60x40 cm",
    weight: "5-15kg",
    examples: "Blenders, shoes, laptops, small electronics",
    icon: "📦"
  },
  {
    name: "Large Appliances",
    dimensions: "140x80x60 cm",
    weight: "15-35kg",
    examples: "Microwaves, TVs, bulk items, furniture",
    icon: "📦"
  },
];

const Rates = () => {
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");

  const filteredRates = ratesData.filter((rate) => {
    const matchFrom = rate.departure.toLowerCase().includes(searchFrom.toLowerCase());
    const matchTo = rate.arrival.toLowerCase().includes(searchTo.toLowerCase());
    return matchFrom && matchTo;
  });

  // Get unique departure zones
  const departureZones = [...new Set(ratesData.map((r) => r.departure))];

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-card shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Truck className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">Jumia Delivery</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Complete Rate Card
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Transparent pricing for all delivery routes across Nigeria. Find the exact cost for your shipment.
          </p>
        </div>
      </section>

      {/* Main Tabs for Rates and Zones */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="rates" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
              <TabsTrigger value="rates" className="text-base font-semibold">
                <Package className="h-4 w-4 mr-2" />
                Price List
              </TabsTrigger>
              <TabsTrigger value="zones" className="text-base font-semibold">
                <MapPin className="h-4 w-4 mr-2" />
                Delivery Zones
              </TabsTrigger>
            </TabsList>

            {/* Rates Tab Content */}
            <TabsContent value="rates">
              {/* Package Sizes */}
              <div className="bg-card rounded-xl p-6 mb-8 border border-border">
                <h2 className="text-xl font-bold text-foreground mb-6">Package Size Guide</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {packageSizes.map((pkg, index) => (
                    <div key={index} className="bg-secondary rounded-lg p-4 border border-border">
                      <div className="flex items-center mb-3">
                        <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3`}>
                          <Package className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground text-sm">{pkg.name}</h3>
                          <p className="text-xs text-muted-foreground">{pkg.weight}</p>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p><span className="font-medium text-foreground">Dimensions:</span> {pkg.dimensions}</p>
                        <p><span className="font-medium text-foreground">Examples:</span> {pkg.examples}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Search Filters */}
              <div className="bg-card rounded-xl p-6 mb-8 border border-border">
                <h3 className="font-semibold text-foreground mb-4">Search Routes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search departure zone..."
                      value={searchFrom}
                      onChange={(e) => setSearchFrom(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search arrival zone..."
                      value={searchTo}
                      onChange={(e) => setSearchTo(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Zone-based Tabs */}
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="flex flex-wrap gap-2 h-auto mb-6 bg-transparent justify-start">
                  <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">All Routes</TabsTrigger>
                  {departureZones.map((zone) => (
                    <TabsTrigger
                      key={zone}
                      value={zone}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {zone}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="all">
                  <RateTable rates={filteredRates} />
                </TabsContent>

                {departureZones.map((zone) => (
                  <TabsContent key={zone} value={zone}>
                    <RateTable
                      rates={filteredRates.filter((r) => r.departure === zone)}
                    />
                  </TabsContent>
                ))}
              </Tabs>
            </TabsContent>

            {/* Zones Tab Content */}
            <TabsContent value="zones">
              <div className="bg-card rounded-xl p-6 border border-border mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Delivery Zones</h2>
                <p className="text-muted-foreground mb-6">
                  Find your city or locality to know which zone you belong to. Pricing is based on the zone of the departure and arrival locations.
                </p>

                <div className="space-y-4">
                  {zonesData.map((zoneInfo) => (
                    <div key={zoneInfo.zone} className="border border-border rounded-lg overflow-hidden">
                      <div className={`px-4 py-3 ${zoneInfo.color} font-bold flex items-center`}>
                        <MapPin className="h-4 w-4 mr-2" />
                        {zoneInfo.zone}
                      </div>
                      <div className="p-4 bg-secondary/50">
                        <div className="flex flex-wrap gap-2">
                          {zoneInfo.localities.map((locality, index) => (
                            <span
                              key={index}
                              className="bg-card px-3 py-1 rounded-full text-sm text-foreground border border-border"
                            >
                              {locality}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="font-bold text-foreground mb-2">How Zone Pricing Works</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Find your departure city in the zones above</li>
                  <li>• Find your destination city in the zones above</li>
                  <li>• Check the Price List tab for rates between those zones</li>
                  <li>• Prices include VAT and are valid for standard deliveries</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Important Notes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• All prices include VAT</li>
                <li>• Delivery times are estimates in <strong>business/working days</strong></li>
                <li>• Oversized or overweight packages may incur additional charges</li>
                <li>• Cash on Delivery (COD) available for B2C customers on select routes</li>
                <li>• Insurance available</li>
              </ul>
            </div>
            <div className="bg-secondary rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Can't find your route or need a custom quote for bulk shipments?
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Phone:</span> 02018881106
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Email:</span> jumiadelivery.ng@jumia.com
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Hours:</span> Mon-Sat, 8AM - 6PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-card py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted">
            © 2025 Jumia Delivery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Rate Table Component
const RateTable = ({ rates }: { rates: typeof ratesData }) => {
  if (rates.length === 0) {
    return (
      <div className="bg-card rounded-xl p-12 text-center border border-border">
        <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">No routes found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary">
              <TableHead className="font-bold text-primary-foreground">Departure</TableHead>
              <TableHead className="font-bold text-primary-foreground">Arrival</TableHead>
              <TableHead className="font-bold text-primary-foreground text-center">
                <div>Small Package</div>
                <div className="text-xs font-normal opacity-80">60x40x20cm - 5kg</div>
              </TableHead>
              <TableHead className="font-bold text-primary-foreground text-center">
                <div>Medium Package</div>
                <div className="text-xs font-normal opacity-80">80x60x40cm - 15kg</div>
              </TableHead>
              <TableHead className="font-bold text-primary-foreground text-center">
                <div>Large Appliances</div>
                <div className="text-xs font-normal opacity-80">140x80x60cm - 35kg</div>
              </TableHead>
              <TableHead className="font-bold text-primary-foreground text-right">
                <div>Delivery Time</div>
                <div className="text-xs font-normal opacity-80">(business days)</div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rates.map((rate, index) => (
              <TableRow key={index} className="hover:bg-muted/30 transition">
                <TableCell className="font-medium text-foreground">{rate.departure}</TableCell>
                <TableCell className="font-medium text-muted-foreground">{rate.arrival}</TableCell>
                <TableCell className="text-center font-semibold text-foreground">{rate.small}</TableCell>
                <TableCell className="text-center font-semibold text-foreground">{rate.medium}</TableCell>
                <TableCell className="text-center font-semibold text-foreground">{rate.large}</TableCell>
                <TableCell className="text-right text-muted-foreground">{rate.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Rates;
