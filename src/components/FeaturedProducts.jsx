import { ArrowRight, Home, Shirt, Utensils, Zap } from "lucide-react";
import ecoProducts from "../assets/eco-products.jpg"; // Adjust the path as necessary
import sustainableHome from "../assets/sustainable-home.jpg";
import organicGarden from "../assets/organic-garden.jpg";

const categories = [
  {
    icon: Home,
    title: "Sustainable Home",
    description: "Eco-friendly furniture, decor, and household essentials for conscious living.",
    image: sustainableHome,
  },
  {
    icon: Shirt,
    title: "Eco Fashion",
    description: "Sustainable clothing made from organic materials and ethical practices.",
    image: ecoProducts,
  },
  {
    icon: Utensils,
    title: "Organic Food",
    description: "Fresh, organic produce and pantry staples for healthy, sustainable eating.",
    image: organicGarden,
  },
  {
    icon: Zap,
    title: "Green Energy",
    description: "Solar panels, energy-efficient appliances, and renewable energy solutions.",
    image: ecoProducts,
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated categories of sustainable products, 
            each designed to help you live more consciously without compromising on quality or style.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              className="group overflow-hidden border-0 rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t opacity-80 group-hover:opacity-70 transition-opacity`}></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                <button className="group/btn p-0 h-auto font-medium text-primary hover:text-primary-hover flex items-center">
                  Explore Collection
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default FeaturedProducts;