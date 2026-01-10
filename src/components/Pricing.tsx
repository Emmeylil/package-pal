import { Link } from "react-router-dom";

const Pricing = () => {
  const routes = [
    { from: "Lagos", to: "Lagos", time: "1-2 Days", price: "₦1,400" },
    { from: "Lagos", to: "Ibadan", time: "2-4 Days", price: "₦1,400" },
    { from: "Lagos", to: "Abuja", time: "3-7 Days", price: "₦1,700" },
    { from: "Lagos", to: "Port Harcourt", time: "4-7 Days", price: "₦1,800" },
    { from: "Lagos", to: "Kano", time: "8-9 Days", price: "₦1,900" },
    { from: "Abuja", to: "Port Harcourt", time: "7-10 Days", price: "₦3,000" },
  ];

  return (
    <div id="rates" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">Transparent Pricing</h2>
        
        <div className="max-w-4xl mx-auto bg-card shadow-xl rounded-2xl overflow-hidden border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-primary/5">
              <h3 className="text-xl font-bold text-foreground mb-4">Package Sizes</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-card rounded border border-border flex items-center justify-center font-bold text-muted-foreground text-xs">Small</div>
                  <div className="ml-4">
                    <p className="font-bold text-foreground">Small Package (0-5kg)</p>
                    <p className="text-sm text-muted-foreground">60x40x20 cm. Phones, shirts, books.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-card rounded border border-border flex items-center justify-center font-bold text-muted-foreground text-xs">Medium</div>
                  <div className="ml-4">
                    <p className="font-bold text-foreground">Medium Package (5-15kg)</p>
                    <p className="text-sm text-muted-foreground">80x60x40 cm. Blenders, shoes, laptops.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-card rounded border border-border flex items-center justify-center font-bold text-muted-foreground text-xs">Large</div>
                  <div className="ml-4">
                    <p className="font-bold text-foreground">Large Appliances (15-35kg)</p>
                    <p className="text-sm text-muted-foreground">140x80x60 cm. Microwaves, bulk items.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Popular Routes (Small Pkg)</h3>
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase border-b border-border">
                  <tr>
                    <th className="py-2">Route</th>
                    <th className="py-2">Time</th>
                    <th className="py-2 text-right">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {routes.map((route, index) => (
                    <tr key={index}>
                      <td className="py-3 font-medium text-foreground">
                        {route.from} <span className="text-muted-foreground">→</span> {route.to}
                      </td>
                      <td className="py-3 text-muted-foreground">{route.time}</td>
                      <td className="py-3 text-right font-bold text-primary">{route.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 pt-4 border-t border-border text-center">
                <Link to="/rates" className="text-primary font-bold text-sm hover:underline">
                  View Full Rate Card →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
