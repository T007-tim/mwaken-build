import { 
  Building2, 
  Home, 
  Ruler, 
  HardHat, 
  PenTool, 
  TreePine,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesProps {
  onRequestService: () => void;
}

const Services = ({ onRequestService }: ServicesProps) => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial complexes built to the highest standards with modern amenities and sustainable practices.",
    },
    {
      icon: Home,
      title: "Residential Building",
      description: "Custom homes, apartments, and housing developments designed for comfort, functionality, and aesthetic appeal.",
    },
    {
      icon: Ruler,
      title: "Architectural Design",
      description: "Innovative architectural solutions that blend creativity with practicality, from concept to detailed construction drawings.",
    },
    {
      icon: HardHat,
      title: "Project Management",
      description: "End-to-end project oversight ensuring timely delivery, budget adherence, and quality control at every phase.",
    },
    {
      icon: PenTool,
      title: "Interior Design",
      description: "Thoughtful interior spaces that maximize functionality while creating inspiring environments for living and working.",
    },
    {
      icon: TreePine,
      title: "Landscape Architecture",
      description: "Sustainable outdoor spaces that complement your building with beautiful gardens, walkways, and recreational areas.",
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
            Comprehensive Construction Solutions
          </h2>
          <p className="text-muted-foreground">
            From initial design concepts to final construction, we offer a complete range 
            of services to bring your vision to life with excellence and precision.
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
