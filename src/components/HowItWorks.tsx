import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Walk In",
      description: "Visit your nearest Jumia Station. We have centers in Egbu, Ikeja, Benin, and more.",
    },
    {
      number: "2",
      title: "Register & Pay",
      description: "Hand over your item. Our agent will weigh it and accept payment for the shipping fee.",
    },
    {
      number: "3",
      title: "Instant Alerts",
      description: "Both you and the receiver get an SMS/Email with the tracking info immediately.",
    },
    {
      number: "4",
      title: "Pickup",
      description: "The receiver collects the package at their nearest station once it arrives.",
    },
  ];

  return (
    <div className="bg-[hsl(var(--jumia-dark))] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight">How to Ship a Package</h2>
          <p className="mt-4 text-gray-400">Sending love is as easy as 1-2-3-4</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="absolute top-0 left-0 -ml-4 -mt-4 text-6xl font-black text-gray-800 opacity-50">
                {step.number}
              </div>
              <h4 className="text-xl font-bold mb-2 text-primary relative z-10">{step.title}</h4>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button 
            asChild
            variant="secondary" 
            className="bg-white text-foreground hover:bg-gray-100 font-medium"
          >
            <a href="#stations">Find Nearest Station</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
