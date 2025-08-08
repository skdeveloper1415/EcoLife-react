import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";

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

    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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

            <Slider {...settings} className="testimonial-slider">
      {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide px-4">
            <div className="testimonial-card p-8 border-0 hover:shadow-medium transition-all duration-300 transform hover:scale-105 animate-scale-in bg-card/80 backdrop-blur-sm h-full bg-white rounded-2xl">
            <div className="testimonial-content">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p>"{testimonial.content}"</p>
                
              </div>
              <div className="testimonial-header">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="user-info">
                  <h3>{testimonial.name}</h3>
                  <p className="role">{testimonial.role}</p>
                  <p className="location">{testimonial.location}</p>
                </div>
              </div>
              
            </div>
          </div>
        ))}
    </Slider>
        
        </div>
        
        <div className="text-center mt-12 animate-fade-up">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto shadow-soft">
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