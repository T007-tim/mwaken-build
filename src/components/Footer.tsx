import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-xl">W</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">WAMBUKE</h3>
                <p className="text-primary-foreground/60 text-xs tracking-widest">
                  CONSTRUCTION LIMITED
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md leading-relaxed">
              Specializing in private residential homes and commercial units for 
              rent and sale in Kitengela, Kajiado County.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Mail className="w-4 h-4" />
              <a href="mailto:kennedywambua@gmail.com" className="hover:text-accent transition-colors">
                kennedywambua@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+254705822854" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  0705 822 854
                </a>
              </li>
              <li>
                <span className="text-primary-foreground/70 text-sm">
                  Kitengela, Kajiado County
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              Copyright © 2026 WAMBUKE Construction Limited. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              Owner: Kennedy Mwau Wambua
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
