import { CheckCircle, Mail } from "lucide-react";

const About = () => {
  const highlights = [
    "Licensed & Certified Construction Professionals",
    "Private Residential Home Specialists",
    "Commercial Units for Rent & Sale",
    "On-Time Project Delivery",
    "Transparent Pricing & Communication",
    "Quality Materials & Workmanship",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-accent font-semibold tracking-widest uppercase mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building Quality Homes & Commercial Spaces
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              WAMBUKE Construction Limited is a trusted construction company 
              specializing in building private household residentials and commercial 
              units for rent and sale. Under the leadership of <strong className="text-foreground">Kennedy Mwau Wambua</strong>, 
              we proudly serve Kitengela and surrounding areas in Kajiado County.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're looking for your dream family home or a commercial space 
              for your business, we deliver quality construction that stands the test 
              of time. Our focus on affordability without compromising quality has made 
              us a preferred builder in the regions we serve.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Contact the Owner</p>
                <a 
                  href="mailto:kennedywambua@gmail.com" 
                  className="text-foreground font-medium hover:text-accent transition-colors"
                >
                  kennedywambua@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-card rounded-2xl card-shadow p-8 md:p-12">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              
              <div className="relative space-y-8">
                <div className="text-center pb-8 border-b border-border">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Kennedy Mwau Wambua
                  </h3>
                  <p className="text-accent font-medium">Founder & Lead Architect</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <p className="text-3xl font-bold text-foreground mb-1">150+</p>
                    <p className="text-sm text-muted-foreground">Homes</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <p className="text-3xl font-bold text-foreground mb-1">80+</p>
                    <p className="text-sm text-muted-foreground">Commercial Units</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <p className="text-3xl font-bold text-foreground mb-1">15+</p>
                    <p className="text-sm text-muted-foreground">Years</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <p className="text-3xl font-bold text-foreground mb-1">1</p>
                    <p className="text-sm text-muted-foreground">County</p>
                  </div>
                </div>

                <p className="text-center text-muted-foreground text-sm italic">
                  "Building quality homes for Kenyan families"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
