import { 
  Leaf, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold color_white">EcoLife</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 color_white">
              Making sustainable living accessible, affordable, and beautiful for everyone. 
              Join us in creating a better world, one conscious choice at a time.
            </p>
            <div className="flex gap-3">
              <button size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
              </button>
              <button size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </button>
              <button  size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
              </button>
              <button size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 color_white">Products</h3>
            <ul className="space-y-4 footer_nav">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Sustainable Home</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Eco Fashion</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Organic Food</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Green Energy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Personal Care</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Garden & Outdoor</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 color_white">Company</h3>
            <ul className="space-y-4 footer_nav">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Press</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 color_white">Contact</h3>
            <ul className="space-y-4 color_white">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">hello@ecolife.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">1-800-ECO-LIFE</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-foreground/60 mt-1" />
                <span className="text-primary-foreground/80">
                  123 Green Street<br />
                  Eco City, EC 12345
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="font-medium mb-3 color_white">Customer Support</h4>
              <ul className="space-y-2 text-sm footer_nav">
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Returns</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Size Guide</a></li>
              </ul>
            </div>
          </div>
        </div>

  

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/80 footer_nav">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Accessibility</a>
          </div>
          
          <div className="text-sm text-primary-foreground/80 color_white">
            © 2024 EcoLife. All rights reserved.
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60 color_white">
            Certified B-Corp • Carbon Neutral Shipping • 1% of profits donated to environmental causes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;