import React from 'react'
import { ArrowRight, Leaf } from "lucide-react";
import heroImage from '../assets/hero-bg.jpg'; // Adjust the path as necessary

const MainHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="flex items-center gap-2 text-primary">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium uppercase tracking-wider">Sustainable Living</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-[#212c21]">
              Live
              <span className="text-primary"> Sustainably</span>,
              <br />
              Love
              <span className="text-primary"> Naturally</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Discover premium eco-friendly products that don't compromise on quality. 
              Join thousands making the switch to sustainable living with our carefully 
              curated collection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button variant="hero" size="xl" className="bg-gradient-hero flex items-center justify-center">
                Shop Eco Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button variant="outline" size="xl" className='btn-outline'>
                Learn More
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Eco-Friendly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2-Day</div>
                <div className="text-sm text-muted-foreground">Fast Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default MainHero