import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import jumiaLogo from "@/assets/jumia-delivery-logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-card shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <img src={jumiaLogo} alt="Jumia Delivery" className="h-10 object-contain" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <span className="text-foreground font-bold border-b-2 border-primary">Personal (C2C)</span>
            <Link to="/business" className="text-muted-foreground hover:text-primary transition">Business (B2C)</Link>
            <Link to="/rates" className="text-muted-foreground hover:text-primary transition">Rates</Link>
            <a href="#stations" className="text-muted-foreground hover:text-primary transition">Pickup Stations</a>
          </div>
          
          <div className="flex items-center gap-2">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow hidden sm:flex">
              Track Package
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <div className="flex flex-col space-y-3">
              <span className="text-foreground font-bold border-l-4 border-primary pl-3 py-2">
                Personal (C2C)
              </span>
              <Link 
                to="/business" 
                className="text-muted-foreground hover:text-primary transition pl-3 py-2"
                onClick={closeMenu}
              >
                Business (B2C)
              </Link>
              <Link 
                to="/rates" 
                className="text-muted-foreground hover:text-primary transition pl-3 py-2"
                onClick={closeMenu}
              >
                Rates
              </Link>
              <a 
                href="#stations" 
                className="text-muted-foreground hover:text-primary transition pl-3 py-2"
                onClick={closeMenu}
              >
                Pickup Stations
              </a>
            </div>
            <div className="pt-3 border-t border-border">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow">
                Track Package
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;