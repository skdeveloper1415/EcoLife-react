import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Environmental Advocate",
    content: "EcoLife has completely transformed how I shop. The quality is outstanding, and I love knowing every purchase supports sustainable practices. The packaging is beautiful and completely plastic-free!",
    rating: 5,
    avatar: "SC",
    location: "San Francisco, CA"
  },
  {
    name: "Marcus Rodriguez",
    role: "Sustainable Business Owner",
    content: "As someone who runs an eco-friendly cafe, I trust EcoLife for all our supplies. Their organic products are consistently fresh, and their customer service is exceptional. Highly recommend!",
    rating: 5,
    avatar: "MR",
    location: "Austin, TX"
  },
  {
    name: "Emily Watson",
    role: "Mother of Three",
    content: "Finding truly sustainable products for my family used to be such a challenge. EcoLife makes it easy with their curated collections. My kids love the natural toys, and I love the peace of mind.",
    rating: 5,
    avatar: "EW",
    location: "Portland, OR"
  },
  {
    name: "David Kim",
    role: "Sustainability Consultant",
    content: "I've recommended EcoLife to all my clients. Their commitment to transparency and genuine sustainability is rare in this industry. Every product comes with detailed information about its environmental impact.",
    rating: 5,
    avatar: "DK",
    location: "Seattle, WA"
  }
];

const Testimonials = () => {

    
  return (
    <section className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-primary">Community</span> Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who've made the switch to sustainable living 
            with EcoLife. Here's what they have to say about their experience.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          
           <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
        
      >
        {testimonials.map((testimonial, index) => (
          <>
        <SwiperSlide key={index}><div className="testimonial-card px-10 border-0 hover:shadow-medium transition-all duration-300 transform hover:scale-105 animate-scale-in  md:h-full bg-white rounded-2xl md:min-h-[350px] md:flex md:flex-col justify-center">
            <div className="testimonial-content space-y-[25px] text-[#000000] text-base font-medium w-full">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star text-[#FBBF24] text-2xl">★</span>
                  ))}
                </div>
                <p>"{testimonial.content}"</p>
                
              </div>
              <div className="testimonial-header mt-6 flex items-center gap-3.5">
                <div className="avatar bg-[#239023] w-[45px] h-[45px] rounded-full flex items-center justify-center text-white">{testimonial.avatar}</div>
                <div className="user-info text-[#000000] font-normal text-[13px]">
                  <h3 className="font-medium text-base">{testimonial.name}</h3>
                  <p className="role">{testimonial.role}</p>
                  <p className="location">{testimonial.location}</p>
                </div>
              </div>
              
            </div>
          </SwiperSlide>
          
            </>          
        ))}
      </Swiper>
        </div>
        
        <div className="text-center mt-12 animate-fade-up">
          <div className="bg-[#F2F7EE] backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto shadow-soft">
            <h3 className="text-2xl font-bold mb-4">
              Trusted by 50,000+ Eco-Conscious Customers
            </h3>
            <div className="flex justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Support Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;