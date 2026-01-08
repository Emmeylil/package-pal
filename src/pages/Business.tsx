import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Check, Banknote, Layers, Clock, ExternalLink, Shield, Palette } from "lucide-react";

const Business = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "Our business team will contact you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Navigation */}
      <nav className="bg-card shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Link to="/" className="text-2xl font-black tracking-tighter flex items-center">
                <span className="text-foreground">JUMIA</span>
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center ml-1 text-sm">★</span>
              </Link>
              <span className="text-muted-foreground font-medium text-lg border-l border-border pl-2 ml-2">Delivery</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-muted-foreground hover:text-primary transition">Personal (C2C)</Link>
              <span className="text-foreground font-bold border-b-2 border-primary">Business (B2C)</span>
              <a href="#features" className="text-muted-foreground hover:text-primary transition">Features</a>
              <a href="#integration" className="text-muted-foreground hover:text-primary transition">API & Integration</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Login</a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow">
                Start Shipping
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Form */}
      <div className="relative bg-[#1a1a2e] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Warehouse logistics"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#1a1a2e]/95 to-[#1a1a2e]/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            
            {/* Hero Copy */}
            <div className="md:max-w-2xl lg:col-span-7 lg:text-left flex flex-col justify-center">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 border border-primary text-primary text-xs font-bold tracking-wider uppercase mb-6 w-max">
                For Online Sellers & Businesses
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl leading-tight">
                <span className="block">Scale your business</span>
                <span className="block">with reliable logistics.</span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Stop worrying about delivery and focus on sales. From <strong className="text-white">Cash on Delivery</strong> to <strong className="text-white">Bulk Shipping</strong>, we provide the infrastructure trusted by thousands of Nigerian businesses.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Nationwide Coverage</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Next-Day Remittance</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Real-Time Tracking</span>
                </div>
              </div>
            </div>

            {/* Lead Gen Form */}
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <div className="bg-card sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden shadow-2xl">
                <div className="px-4 py-8 sm:px-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground">Get a Business Account</h3>
                    <p className="text-sm text-muted-foreground">Sign up to view special business rates.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input 
                      type="text" 
                      placeholder="Business / Store Name" 
                      className="w-full px-4 py-3"
                    />
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-4 py-3"
                    />
                    <Input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3"
                    />
                    <select 
                      className="block w-full px-4 py-3 border border-input rounded-md text-muted-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="" disabled selected>Monthly Packages (Estimate)</option>
                      <option value="0-50">0 - 50 packages</option>
                      <option value="51-200">51 - 200 packages</option>
                      <option value="201-1000">201 - 1,000 packages</option>
                      <option value="1000+">1,000+ packages</option>
                    </select>
                    <div className="pt-2">
                      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3">
                        Request Account
                      </Button>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-2">
                      By clicking Request Account, you agree to our Terms of Service.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Grid */}
      <div id="features" className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Why Jumia Delivery?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
              Built for Modern Commerce
            </p>
            <p className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto">
              Whether you sell on Instagram, have your own website, or run a large enterprise, our tools are designed to help you grow.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="relative p-6 border border-border rounded-2xl bg-secondary hover:shadow-lg transition">
                <div className="absolute top-6 right-6 text-muted-foreground/20">
                  <Banknote className="w-16 h-16" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Cash on Delivery (COD)</h3>
                <p className="text-muted-foreground text-sm">Boost your sales by offering COD. We collect payments from your customers upon delivery and remit the funds directly to your bank account securely.</p>
              </div>

              {/* Feature 2 */}
              <div className="relative p-6 border border-border rounded-2xl bg-secondary hover:shadow-lg transition">
                <div className="absolute top-6 right-6 text-muted-foreground/20">
                  <Layers className="w-16 h-16" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Bulk Shipments</h3>
                <p className="text-muted-foreground text-sm">Got 100 orders today? Don't type them one by one. Upload a simple CSV file to create hundreds of shipments and print labels instantly.</p>
              </div>

              {/* Feature 3 */}
              <div className="relative p-6 border border-border rounded-2xl bg-secondary hover:shadow-lg transition">
                <div className="absolute top-6 right-6 text-muted-foreground/20">
                  <Clock className="w-16 h-16" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Live Business Dashboard</h3>
                <p className="text-muted-foreground text-sm">Track all your shipments, monitor delivery success rates, and manage your financial reports from a single, intuitive control panel.</p>
              </div>

              {/* Feature 4 */}
              <div className="relative p-6 border border-border rounded-2xl bg-secondary hover:shadow-lg transition">
                <div className="absolute top-6 right-6 text-muted-foreground/20">
                  <ExternalLink className="w-16 h-16" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Return Management</h3>
                <p className="text-muted-foreground text-sm">Returns happen. We make them painless. Failed deliveries are returned to you efficiently, with clear status updates at every step.</p>
              </div>

              {/* Feature 5 */}
              <div className="relative p-6 border border-border rounded-2xl bg-secondary hover:shadow-lg transition">
                <div className="absolute top-6 right-6 text-muted-foreground/20">
                  <Shield className="w-16 h-16" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Premium Insurance</h3>
                <p className="text-muted-foreground text-sm">Protect your high-value goods. Optional premium insurance covers up to ₦500,000 against loss or damage during transit.</p>
              </div>

              {/* Feature 6 */}
              <div className="relative p-6 border border-border rounded-2xl bg-secondary hover:shadow-lg transition">
                <div className="absolute top-6 right-6 text-muted-foreground/20">
                  <Palette className="w-16 h-16" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Dedicated Support</h3>
                <p className="text-muted-foreground text-sm">High-volume sellers get access to dedicated account managers to help resolve issues quickly and optimize your logistics.</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div id="integration" className="bg-jumia-dark py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="text-primary font-bold uppercase tracking-wide text-sm">For Developers & Tech Teams</span>
            <h2 className="text-3xl font-extrabold mt-2 mb-4">Seamless API Integration</h2>
            <p className="text-gray-300 text-lg mb-6">
              Connect your e-commerce store directly to Jumia Delivery. Automate order creation, retrieve shipping rates, and fetch tracking updates without leaving your system.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>RESTful API Architecture</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>Webhooks for Delivery Status</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>Sandbox Environment for Testing</span>
              </li>
            </ul>
            <a href="#" className="text-white border border-gray-600 px-6 py-3 rounded hover:bg-gray-800 transition inline-block">
              View API Documentation
            </a>
          </div>
          <div className="md:w-1/2 bg-gray-800 rounded-lg p-6 font-mono text-sm text-green-400 shadow-2xl border border-gray-700 w-full overflow-hidden">
            <div className="flex gap-2 mb-4 border-b border-gray-700 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-gray-500"># Create a shipment via API</p>
            <p><span className="text-purple-400">POST</span> /api/v1/shipments</p>
            <p>{"{"}</p>
            <p className="pl-4">"recipient": {"{"}</p>
            <p className="pl-8">"name": "Ibrahim Musa",</p>
            <p className="pl-8">"phone": "+23480...",</p>
            <p className="pl-8">"city": "Lagos"</p>
            <p className="pl-4">{"}"},</p>
            <p className="pl-4">"package": {"{"}</p>
            <p className="pl-8">"weight": 2.5,</p>
            <p className="pl-8">"cod_amount": 15000</p>
            <p className="pl-4">{"}"}</p>
            <p>{"}"}</p>
            <p className="mt-4 text-white">Status: <span className="text-green-400">201 Created</span></p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Trusted by 10,000+ Nigerian Businesses</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black text-primary mb-2">283+</div>
              <div className="text-muted-foreground font-medium">Pickup Stations</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">107</div>
              <div className="text-muted-foreground font-medium">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">1M+</div>
              <div className="text-muted-foreground font-medium">Packages Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">99.5%</div>
              <div className="text-muted-foreground font-medium">Payment Reliability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-jumia-dark text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">About Jumia Delivery</h3>
            <p className="text-sm leading-relaxed">Helping businesses grow through reliable logistics infrastructure across Africa.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Business Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Rate Card</a></li>
              <li><a href="#" className="hover:text-white">API Docs</a></li>
              <li><a href="#" className="hover:text-white">Bulk Shipping Tool</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Sales</a></li>
              <li><a href="#" className="hover:text-white">Report Issue</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Connect</h3>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            </div>
            <p className="text-xs mt-4">© 2025 Jumia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Business;
