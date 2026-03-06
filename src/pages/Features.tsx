import { motion } from "framer-motion";
import { Moon, Apple, Dumbbell, Droplets, Calculator, Pill, Activity, Heart } from "lucide-react";

const features = [
  {
    icon: Moon,
    title: "Sleep Tracking",
    description: "Monitor your sleep patterns and get personalized recommendations for better rest. Track your sleep cycles, set bedtime reminders, and wake up feeling refreshed.",
  },
  {
    icon: Apple,
    title: "Nutrition",
    description: "Track your meals, calories, and macros with our intelligent food logging system. Get personalized meal suggestions based on your goals.",
  },
  {
    icon: Dumbbell,
    title: "Exercise",
    description: "Access 500+ workout routines and track your fitness progress over time. From HIIT to yoga, find the perfect workout for your lifestyle.",
  },
  {
    icon: Droplets,
    title: "Hydration",
    description: "Stay hydrated with smart reminders and track your daily water intake. Set personalized goals based on your activity level and climate.",
  },
  {
    icon: Calculator,
    title: "BMI Calculator",
    description: "Calculate and monitor your BMI with personalized health insights. Track your progress and get recommendations for a healthier weight.",
  },
  {
    icon: Pill,
    title: "Supplements",
    description: "Keep track of your vitamins and supplements with timely reminders. Never miss a dose and optimize your supplement routine.",
  },
  {
    icon: Activity,
    title: "Activity Tracking",
    description: "Monitor your daily steps, calories burned, and active minutes. Set daily goals and compete with friends to stay motivated.",
  },
  {
    icon: Heart,
    title: "Wellness Score",
    description: "Get a comprehensive wellness score based on all your health metrics. See how your habits impact your overall well-being.",
  },
];

const Features = () => {
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
            Everything You Need for{" "}
            <span className="text-gradient">Complete Wellness</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our comprehensive suite of tools helps you track, analyze, and improve every aspect of your health.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
