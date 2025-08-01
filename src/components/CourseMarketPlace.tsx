
import { ArrowRight, Star, Clock, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Button } from "./ui/button";

export const CourseMarketplace = () => {
  const partners = [
    {
      name: "10 Minute School",
      logo: "🎓",
      courses: [
        {
          title: "IELTS Complete Preparation",
          description: "Master IELTS with expert guidance and practice tests",
          duration: "8 weeks",
          students: "2,150",
          rating: 4.8,
          price: "৳2,500",
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
        },
        {
          title: "Web Development Bootcamp",
          description: "Full-stack development from basics to advanced",
          duration: "12 weeks",
          students: "1,890",
          rating: 4.9,
          price: "৳4,999",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
        },
        {
          title: "Digital Marketing Mastery",
          description: "Complete digital marketing strategy and execution",
          duration: "6 weeks",
          students: "980",
          rating: 4.7,
          price: "৳1,899",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
        }
      ]
    },
    {
      name: "Programming Hero",
      logo: "💻",
      courses: [
        {
          title: "Python for Beginners",
          description: "Start your programming journey with Python",
          duration: "10 weeks",
          students: "3,240",
          rating: 4.9,
          price: "৳3,200",
          image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop"
        },
        {
          title: "React Native Development",
          description: "Build mobile apps with React Native",
          duration: "14 weeks",
          students: "1,560",
          rating: 4.8,
          price: "৳5,500",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
        }
      ]
    }
  ];

  return (
    <section id="courses" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover premium courses from trusted EdTech partners and accelerate your learning journey
          </p>
        </div>

        <div className="space-y-12">
          {partners.map((partner, partnerIndex) => (
            <div key={partnerIndex} className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{partner.logo}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{partner.name}</h3>
                  <p className="text-gray-600">Trusted EdTech Partner</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partner.courses.map((course, courseIndex) => (
                  <Card key={courseIndex} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h4>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{course.students}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Enroll Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
