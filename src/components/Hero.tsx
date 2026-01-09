import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const { toast } = useToast();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      // Redirect to Jumia package tracker with the tracking number
      window.open(`https://packagetracker-services.jumia.com/#/${trackingNumber}`, '_blank');
    } else {
      toast({
        title: "Please enter a tracking number",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-card sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg 
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-card transform translate-x-1/2" 
            fill="currentColor" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none" 
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded bg-accent text-accent-foreground text-xs font-bold tracking-wider mb-4 uppercase">
                For You & Your Family
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Send packages securely</span>
                <span className="block text-primary">anywhere in Nigeria.</span>
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
                From Lagos to Kano, send parcels to your loved ones quickly and safely. No business account needed—just walk in and ship.
              </p>
              
              {/* Tracking Widget */}
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <form onSubmit={handleTrack} className="mt-3 sm:flex shadow-lg rounded-lg overflow-hidden border border-border">
                  <label htmlFor="tracking" className="sr-only">Tracking Number</label>
                  <Input 
                    type="text" 
                    name="tracking" 
                    id="tracking" 
                    className="block w-full py-4 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none border-0 rounded-none h-auto"
                    placeholder="Enter your tracking number (e.g. JB-123456)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                  />
                  <Button 
                    type="submit" 
                    className="mt-3 w-full px-6 py-3 h-auto border border-transparent text-base font-medium bg-foreground text-background shadow-sm hover:bg-foreground/90 focus:outline-none sm:mt-0 sm:w-auto sm:rounded-l-none rounded-none"
                  >
                    Track
                  </Button>
                </form>
                <p className="mt-2 text-xs text-muted-foreground">Track real-time location via our app or website.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-accent flex items-center justify-center">
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-full flex items-center justify-center text-primary/20">
          <svg className="w-1/2 h-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-card to-transparent lg:via-card/20"></div>
          <img 
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Person receiving package" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
