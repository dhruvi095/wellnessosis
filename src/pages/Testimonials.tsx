import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    avatar: "S",
    content: "Wellness Oasis completely changed my approach to health. I've lost 20 pounds and feel more energetic than ever! The app is intuitive and the insights are incredibly helpful.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    avatar: "M",
    content: "The sleep tracking feature is incredible. I finally understand my sleep patterns and wake up feeling refreshed. It's like having a personal sleep coach in my pocket.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Yoga Instructor",
    avatar: "E",
    content: "I recommend Wellness Oasis to all my students. It's the perfect companion for a holistic wellness journey. The meditation and breathing exercises are a great addition.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Marathon Runner",
    avatar: "D",
    content: "Training for marathons requires careful tracking of nutrition and recovery. Wellness Oasis helps me optimize every aspect of my training routine.",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    role: "Busy Mom",
    avatar: "A",
    content: "As a mom of three, I struggled to find time for myself. This app helped me incorporate small wellness habits that make a big difference in my energy levels.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Corporate Executive",
    avatar: "J",
    content: "Managing stress was my biggest challenge. The wellness score and daily insights helped me understand how my habits affect my overall well-being.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Loved by <span className="text-gradient">Thousands</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our community has to say about their wellness transformation with Wellness Oasis.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="font-display font-bold text-primary-foreground">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">Ready to start your own transformation?</p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/">Get Started Today</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
