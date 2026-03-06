import { motion } from "framer-motion";
import { UserPlus, Target, TrendingUp, CheckCircle, BarChart3, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Profile",
    description: "Sign up and tell us about your health goals, current habits, and preferences. Our onboarding process takes less than 5 minutes.",
  },
  {
    icon: Target,
    step: "02",
    title: "Set Your Goals",
    description: "Define personalized targets for sleep, nutrition, exercise, and hydration. We'll help you set realistic and achievable goals.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Track Daily",
    description: "Log your daily activities with our intuitive interface. Track meals, workouts, water intake, and sleep with just a few taps.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Analyze Progress",
    description: "View detailed analytics and insights about your health journey. Understand patterns and identify areas for improvement.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Get Recommendations",
    description: "Receive personalized tips and recommendations based on your data. Our AI learns from your habits to provide better guidance.",
  },
  {
    icon: Award,
    step: "06",
    title: "Achieve Results",
    description: "Celebrate your milestones and achievements. Watch as your wellness score improves and you reach your health goals.",
  },
];

const HowItWorks = () => {
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
            How <span className="text-gradient">It Works</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting started with Wellness Oasis is easy. Follow these simple steps to begin your transformation journey.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 relative"
            >
              {/* Step Number with Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{item.step}</span>
                </div>
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
          <Button variant="hero" size="xl" asChild>
            <Link to="/features">Explore Features</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
