import { 
  Building2, 
  Home, 
  Key, 
  HardHat, 
  Ruler, 
  Wrench,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesProps {
  onRequestService: () => void;
}

const Services = ({ onRequestService }: ServicesProps) => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom-built private homes designed for comfort and durability. From bungalows to multi-story family residences across our service regions.",
    },
    {
      icon: Building2,
      title: "Commercial Units",
      description: "Purpose-built commercial spaces including shops, offices, and rental units designed to maximize your investment returns.",
    },
    {
      icon: Key,
      title: "Properties for Rent",
      description: "Quality residential and commercial units available for rent in Kitengela, Athi River, and other prime locations.",
    },
    {
      icon: HardHat,
      title: "Properties for Sale",
      description: "Ready-to-move-in homes and commercial spaces for sale. Own your property in growing areas of Kenya.",
    },
    {
      icon: Ruler,
      title: "Architectural Design",
      description: "Professional architectural designs tailored to your needs, budget, and the specific requirements of your plot.",
    },
    {
      icon: Wrench,
      title: "Renovation & Upgrades",
      description: "Transform your existing property with quality renovations, extensions, and modern upgrades.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Homes & Commercial Properties
          </h2>
          <p className="text-muted-foreground">
            We build, sell, and rent quality residential homes and commercial units 
            across Kitengela, Athi River, Great Wall Gardens, Western Province, and Coastal Province.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 card-shadow hover:card-hover-shadow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="accent" size="lg" onClick={onRequestService}>
            Request a Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
