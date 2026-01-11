import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Building2, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

interface HeroProps {
  onRequestService: () => void;
}

const Hero = ({ onRequestService }: HeroProps) => {
  const stats = [
    { icon: Home, value: "150+", label: "Homes Built" },
    { icon: Building2, value: "80+", label: "Commercial Units" },
    { icon: MapPin, value: "5", label: "Regions Covered" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Construction site at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl">
          <p className="text-accent font-semibold tracking-widest uppercase mb-4 animate-fade-up">
            Residential & Commercial Properties
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Quality Homes &
            <span className="block text-gradient">Commercial Units</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            MWAKEN Construction Limited specializes in building private residential homes 
            and commercial units for rent and sale across Kitengela, Athi River, Great Wall Gardens, 
            Western Province, and Coastal Province.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={onRequestService}>
              Request Service
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#projects">View Our Properties</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <stat.icon className="w-8 h-8 text-accent mb-2 mx-auto sm:mx-0" />
                <p className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
