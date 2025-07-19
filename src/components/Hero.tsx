
import { ArrowRight, Play, BookOpen, Users, TrendingUp, Star } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Unlock Your</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Potential
                </span>
                <br />
                <span className="text-gray-900">Today</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with expert mentors, access premium courses from top EdTech partners, 
                and accelerate your career with personalized 1:1 sessions and job opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-3 border-2"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-3">
                  <BookOpen className="h-10 w-10 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Premium Courses</div>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-3 w-16 h-16 mx-auto mb-3">
                  <Users className="h-10 w-10 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Expert Mentors</div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-3">
                  <TrendingUp className="h-10 w-10 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Live Session</h3>
                    <p className="text-sm text-gray-500">Web Development Bootcamp</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-bold text-blue-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
                    Join Now
                  </Button>
                  <Button size="sm" variant="outline">
                    Schedule
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-bounce">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-3 shadow-lg animate-pulse">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};