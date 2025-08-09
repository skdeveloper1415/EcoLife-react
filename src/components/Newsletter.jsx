import { Mail, CheckCircle, Leaf } from "lucide-react";

const Newsletter = () => {

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto p-12 bg-white rounded-2xl text-center border-0 shadow-medium animate-fade-up">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#F2F7EE] rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Join Our <span className="text-primary">Eco Community</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get weekly sustainable living tips, early access to new products, 
              and exclusive member discounts delivered to your inbox.
            </p>
          </div>

          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-12 rounded-xl border-2 border-[#D9D9D9] text-center sm:text-left placeholder:text-[12px] placeholder:text-[#737373] p-4"
              />
              <button 
                type="submit" 
                size="lg" 
                className="min-w-fit bg-gradient-hero"
              >Subscribe
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-primary" />
              <span>Weekly eco tips</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>Exclusive offers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>No spam, ever</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            By subscribing, you agree to our Privacy Policy and Terms of Service. 
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;