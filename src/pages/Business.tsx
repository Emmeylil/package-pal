import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Check, Banknote, Layers, Clock, ExternalLink, Shield, Palette, Loader2 } from "lucide-react";
import jumiaLogo from "@/assets/jumia-delivery-logo.jpg";
import { submitBusinessLead } from "@/lib/firebase";

const Business = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    monthlyPackages: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.businessName || !formData.email || !formData.phone || !formData.monthlyPackages) {
      toast({
        title: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await submitBusinessLead(formData);
      toast({
        title: "Request Submitted!",
        description: "Our business team will contact you within 24 hours.",
      });
      setFormData({ businessName: "", email: "", phone: "", monthlyPackages: "" });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Navigation */}
      <nav className="bg-card shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/">
                <img src={jumiaLogo} alt="Jumia Delivery" className="h-10" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-muted-foreground hover:text-primary transition">Personal (C2C)</Link>
              <span className="text-foreground font-bold border-b-2 border-primary">Business (B2C)</span>
              <a href="#features" className="text-muted-foreground hover:text-primary transition">Features</a>
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
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      disabled={isSubmitting}
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSubmitting}
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={isSubmitting}
                    />
                    <select
                      className="block w-full px-4 py-3 border border-input rounded-md text-muted-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.monthlyPackages}
                      onChange={(e) => setFormData({ ...formData, monthlyPackages: e.target.value })}
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>Monthly Packages (Estimate)</option>
                      <option value="0-50">0 - 50 packages</option>
                      <option value="51-200">51 - 200 packages</option>
                      <option value="201-1000">201 - 1,000 packages</option>
                      <option value="1000+">1,000+ packages</option>
                    </select>
                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Request Account"
                        )}
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

    </div>
  );
};

export default Business;
