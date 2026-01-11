import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Service Area",
      details: ["Kitengela", "Kajiado County, Kenya"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["0705 822 854"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["kennedywambua@gmail.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Ready to build your dream home or find the perfect commercial space? 
            Contact us for properties in Kitengela, Kajiado County.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-6 card-shadow text-center"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif font-bold text-foreground mb-3">
                {item.title}
              </h3>
              {item.details.map((detail, index) => (
                <p key={index} className="text-sm text-muted-foreground">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
