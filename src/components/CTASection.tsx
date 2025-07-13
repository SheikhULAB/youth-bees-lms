
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "../components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          <BookOpen className="h-10 w-10 text-white" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Career?
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of students who have already started their journey to success. 
          Get access to premium courses, expert mentors, and job opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
          >
            Explore Courses
          </Button>
        </div>
        
        <p className="text-blue-100 text-sm mt-4">
          No credit card required • 7-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};