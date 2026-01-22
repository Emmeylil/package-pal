import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Package, Truck, Search } from "lucide-react";
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

// Rate data for all routes
const ratesData = [
  { from: "Lagos", to: "Lagos", time: "1-2 Days", small: "₦1,400", medium: "₦2,200", large: "₦3,500" },
  { from: "Lagos", to: "Ibadan", time: "2-4 Days", small: "₦1,400", medium: "₦2,200", large: "₦3,500" },
  { from: "Lagos", to: "Abeokuta", time: "2-4 Days", small: "₦1,400", medium: "₦2,200", large: "₦3,500" },
  { from: "Lagos", to: "Ilorin", time: "3-5 Days", small: "₦1,600", medium: "₦2,500", large: "₦4,000" },
  { from: "Lagos", to: "Abuja", time: "3-7 Days", small: "₦1,700", medium: "₦2,700", large: "₦4,500" },
  { from: "Lagos", to: "Benin City", time: "3-5 Days", small: "₦1,500", medium: "₦2,400", large: "₦3,800" },
  { from: "Lagos", to: "Port Harcourt", time: "4-7 Days", small: "₦1,800", medium: "₦2,800", large: "₦4,500" },
  { from: "Lagos", to: "Warri", time: "3-5 Days", small: "₦1,600", medium: "₦2,500", large: "₦4,000" },
  { from: "Lagos", to: "Enugu", time: "4-7 Days", small: "₦1,700", medium: "₦2,700", large: "₦4,300" },
  { from: "Lagos", to: "Owerri", time: "4-7 Days", small: "₦1,700", medium: "₦2,700", large: "₦4,300" },
  { from: "Lagos", to: "Calabar", time: "5-8 Days", small: "₦2,000", medium: "₦3,000", large: "₦5,000" },
  { from: "Lagos", to: "Uyo", time: "5-8 Days", small: "₦2,000", medium: "₦3,000", large: "₦5,000" },
  { from: "Lagos", to: "Kano", time: "8-9 Days", small: "₦1,900", medium: "₦3,000", large: "₦5,000" },
  { from: "Lagos", to: "Kaduna", time: "6-8 Days", small: "₦1,800", medium: "₦2,900", large: "₦4,800" },
  { from: "Lagos", to: "Jos", time: "6-8 Days", small: "₦1,900", medium: "₦3,000", large: "₦4,900" },
  { from: "Abuja", to: "Abuja", time: "1-2 Days", small: "₦1,400", medium: "₦2,200", large: "₦3,500" },
  { from: "Abuja", to: "Lagos", time: "3-7 Days", small: "₦1,700", medium: "₦2,700", large: "₦4,500" },
  { from: "Abuja", to: "Kano", time: "3-5 Days", small: "₦1,600", medium: "₦2,500", large: "₦4,000" },
  { from: "Abuja", to: "Kaduna", time: "2-3 Days", small: "₦1,400", medium: "₦2,200", large: "₦3,500" },
  { from: "Abuja", to: "Jos", time: "2-4 Days", small: "₦1,500", medium: "₦2,400", large: "₦3,800" },
  { from: "Abuja", to: "Port Harcourt", time: "7-10 Days", small: "₦3,000", medium: "₦4,500", large: "₦7,000" },
  { from: "Abuja", to: "Enugu", time: "4-6 Days", small: "₦1,800", medium: "₦2,800", large: "₦4,500" },
  { from: "Abuja", to: "Ibadan", time: "4-6 Days", small: "₦1,700", medium: "₦2,700", large: "₦4,300" },
  { from: "Port Harcourt", to: "Port Harcourt", time: "1-2 Days", small: "₦1,400", medium: "₦2,200", large: "₦3,500" },
  { from: "Port Harcourt", to: "Lagos", time: "4-7 Days", small: "₦1,800", medium: "₦2,800", large: "₦4,500" },
  { from: "Port Harcourt", to: "Calabar", time: "2-4 Days", small: "₦1,500", medium: "₦2,400", large: "₦3,800" },
  { from: "Port Harcourt", to: "Uyo", time: "2-4 Days", small: "₦1,500", medium: "₦2,400", large: "₦3,800" },
  { from: "Port Harcourt", to: "Owerri", time: "2-3 Days", small: "₦1,400", medium: "₦2,200", large: "₦3,500" },
  { from: "Port Harcourt", to: "Abuja", time: "7-10 Days", small: "₦3,000", medium: "₦4,500", large: "₦7,000" },
  { from: "Kano", to: "Kano", time: "1-2 Days", small: "₦1,400", medium: "₦2,200", large: "₦3,500" },
  { from: "Kano", to: "Lagos", time: "8-9 Days", small: "₦1,900", medium: "₦3,000", large: "₦5,000" },
  { from: "Kano", to: "Abuja", time: "3-5 Days", small: "₦1,600", medium: "₦2,500", large: "₦4,000" },
  { from: "Kano", to: "Kaduna", time: "2-3 Days", small: "₦1,400", medium: "₦2,200", large: "₦3,500" },
  { from: "Ibadan", to: "Ibadan", time: "1-2 Days", small: "₦1,400", medium: "₦2,200", large: "₦3,500" },
  { from: "Ibadan", to: "Lagos", time: "2-4 Days", small: "₦1,400", medium: "₦2,200", large: "₦3,500" },
  { from: "Ibadan", to: "Abuja", time: "4-6 Days", small: "₦1,700", medium: "₦2,700", large: "₦4,300" },
  { from: "Enugu", to: "Enugu", time: "1-2 Days", small: "₦1,400", medium: "₦2,200", large: "₦3,500" },
  { from: "Enugu", to: "Lagos", time: "4-7 Days", small: "₦1,700", medium: "₦2,700", large: "₦4,300" },
  { from: "Enugu", to: "Abuja", time: "4-6 Days", small: "₦1,800", medium: "₦2,800", large: "₦4,500" },
  { from: "Enugu", to: "Port Harcourt", time: "2-4 Days", small: "₦1,500", medium: "₦2,400", large: "₦3,800" },
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
    const matchFrom = rate.from.toLowerCase().includes(searchFrom.toLowerCase());
    const matchTo = rate.to.toLowerCase().includes(searchTo.toLowerCase());
    return matchFrom && matchTo;
  });

  // Get unique origin cities
  const originCities = [...new Set(ratesData.map((r) => r.from))];

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

      {/* Package Sizes */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Package Size Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packageSizes.map((pkg, index) => (
              <div key={index} className="bg-secondary rounded-xl p-6 border border-border">
                <div className="flex items-center mb-4">
                  <div className={`w-${12 + index * 4} h-${12 + index * 4} bg-primary/10 rounded-lg flex items-center justify-center mr-4`}>
                    <Package className={`h-${6 + index * 2} w-${6 + index * 2} text-primary`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">{pkg.weight}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Dimensions:</span> {pkg.dimensions}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Examples:</span> {pkg.examples}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Tables */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Delivery Rates by Route</h2>

          {/* Search Filters */}
          <div className="bg-card rounded-xl p-6 mb-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search origin city..."
                  value={searchFrom}
                  onChange={(e) => setSearchFrom(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search destination city..."
                  value={searchTo}
                  onChange={(e) => setSearchTo(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-6">
              <TabsTrigger value="all">All Routes</TabsTrigger>
              {originCities.slice(0, 5).map((city) => (
                <TabsTrigger key={city} value={city}>{city}</TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <RateTable rates={filteredRates} />
            </TabsContent>

            {originCities.map((city) => (
              <TabsContent key={city} value={city}>
                <RateTable
                  rates={filteredRates.filter((r) => r.from === city)}
                />
              </TabsContent>
            ))}
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
                <li>• Prices are subject to change based on fuel costs and route conditions</li>
                <li>• Delivery times are estimates and may vary during peak seasons</li>
                <li>• Oversized or overweight packages may incur additional charges</li>
                <li>• Cash on Delivery (COD) available for select routes</li>
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
                  <span className="font-medium text-foreground">Phone:</span> 01 888 1234
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Email:</span> support@jumiadelivery.com
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
            <TableRow className="bg-muted/50">
              <TableHead className="font-bold">Route</TableHead>
              <TableHead className="font-bold">Delivery Time</TableHead>
              <TableHead className="font-bold text-right">Small (0-5kg)</TableHead>
              <TableHead className="font-bold text-right">Medium (5-15kg)</TableHead>
              <TableHead className="font-bold text-right">Large (15-35kg)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rates.map((rate, index) => (
              <TableRow key={index} className="hover:bg-muted/30 transition">
                <TableCell className="font-medium">
                  {rate.from} <span className="text-muted-foreground">→</span> {rate.to}
                </TableCell>
                <TableCell className="text-muted-foreground">{rate.time}</TableCell>
                <TableCell className="text-right font-semibold text-primary">{rate.small}</TableCell>
                <TableCell className="text-right font-semibold text-primary">{rate.medium}</TableCell>
                <TableCell className="text-right font-semibold text-primary">{rate.large}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Rates;
