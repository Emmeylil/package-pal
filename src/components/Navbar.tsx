import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
            <span className="text-foreground font-bold border-b-2 border-primary">Personal (C2C)</span>
            <Link to="/business" className="text-muted-foreground hover:text-primary transition">Business (B2C)</Link>
            <a href="#rates" className="text-muted-foreground hover:text-primary transition">Rates</a>
            <a href="#stations" className="text-muted-foreground hover:text-primary transition">Pickup Stations</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow">
            Track Package
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
