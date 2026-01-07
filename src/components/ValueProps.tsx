import { Zap, CreditCard, MapPin } from "lucide-react";

const ValueProps = () => {
  const props = [
    {
      icon: Zap,
      title: "Express Delivery",
      description: "Fast and reliable delivery within Lagos and other major cities (1-2 business days).",
    },
    {
      icon: CreditCard,
      title: "Affordable Rates",
      description: (
        <>
          Prices starting from just <span className="font-bold text-primary">₦1,400</span>. Transparent pricing with no hidden fees.
        </>
      ),
    },
    {
      icon: MapPin,
      title: "Nationwide Reach",
      description: "Over 283 Pickup Points in 107+ cities. We deliver to all 36 states.",
    },
  ];

  return (
    <div className="bg-card py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {props.map((prop, index) => (
            <div key={index} className="p-6 bg-accent rounded-xl border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <prop.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{prop.title}</h3>
              <p className="mt-2 text-muted-foreground">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueProps;
