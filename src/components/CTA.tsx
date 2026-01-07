import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
          <span className="block">Ready to send a package?</span>
          <span className="block text-primary-foreground/70 text-2xl mt-2">Find a station near you today.</span>
        </h2>
        <Button 
          asChild
          className="mt-8 bg-white text-primary hover:bg-gray-50 font-medium"
        >
          <a href="#stations">Locate Station</a>
        </Button>
      </div>
    </div>
  );
};

export default CTA;
