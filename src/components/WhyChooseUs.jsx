import { 
  Leaf, 
  Truck, 
  Shield, 
  Recycle, 
  Heart, 
  Award 
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Eco-Friendly",
    description: "Every product is sustainably sourced and environmentally responsible.",
    color: "text-green-600"
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Carbon-neutral delivery within 2-3 business days worldwide.",
    color: "text-blue-600"
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Premium materials and craftsmanship with lifetime support.",
    color: "text-purple-600"
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description: "We take back products at end-of-life for proper recycling.",
    color: "text-teal-600"
  },
  {
    icon: Heart,
    title: "Ethically Made",
    description: "Fair trade practices ensuring workers are treated with respect.",
    color: "text-red-500"
  },
  {
    icon: Award,
    title: "Certified Organic",
    description: "All products meet or exceed international organic standards.",
    color: "text-amber-600"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">EcoLife?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're committed to making sustainable living accessible, affordable, and beautiful. 
            Here's what sets us apart from the rest.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="p-8 text-center border-0 bg-white shadow-md rounded-2xl  hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-nature flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-up">
          <div className="bg-gradient-accent rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join the Movement
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Be part of a community that's making a real difference. Every purchase 
              helps fund environmental initiatives and supports sustainable practices.
            </p>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Trees Planted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500K</div>
                <div className="text-sm text-muted-foreground">Carbon Offset (tons)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Partner Farms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;