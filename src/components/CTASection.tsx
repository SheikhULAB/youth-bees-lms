
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "../components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-youthbees">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
          <BookOpen className="h-10 w-10 text-white" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Career?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of students who have already started their journey to success. 
          Get access to premium courses, expert mentors, and job opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 hover:scale-105 transition-all duration-300 font-bold shadow-xl"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3 hover:scale-105 transition-all duration-300 font-bold shadow-xl"
          >
            Explore Courses
          </Button>
        </div>
        
        <p className="text-white/80 text-sm mt-4 font-medium">
          No credit card required • 7-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};