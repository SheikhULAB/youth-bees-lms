
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Star, Clock, Users, BookOpen, Filter } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { CourseMarketplace } from '../components/CourseMarketPlace';



  const Courses = () => {
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [levelFilter, setLevelFilter] = useState("all");
  
    const additionalCourses = [
      {
        title: "Advanced JavaScript Concepts",
        description: "Master closures, async/await, and modern ES6+ features",
        instructor: "Sarah Ahmed",
        duration: "6 weeks",
        students: "1,250",
        rating: 4.8,
        price: "৳3,500",
        category: "Programming",
        level: "Advanced",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
      },
      {
        title: "UI/UX Design Fundamentals",
        description: "Learn design principles and create stunning user interfaces",
        instructor: "Rafiq Hassan",
        duration: "8 weeks",
        students: "890",
        rating: 4.9,
        price: "৳2,800",
        category: "Design",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
      },
      {
        title: "Data Science with Python",
        description: "Analyze data and build machine learning models",
        instructor: "Dr. Fatima Khan",
        duration: "10 weeks",
        students: "2,100",
        rating: 4.7,
        price: "৳4,200",
        category: "Data Science",
        level: "Intermediate",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
      },
      {
        title: "Mobile App Development",
        description: "Build cross-platform apps with React Native",
        instructor: "Karim Rahman",
        duration: "12 weeks",
        students: "1,680",
        rating: 4.8,
        price: "৳5,000",
        category: "Mobile Development",
        level: "Intermediate",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
      }
    ];
  
    const filteredCourses = additionalCourses.filter(course => {
      const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
      const matchesLevel = levelFilter === "all" || course.level === levelFilter;
      return matchesCategory && matchesLevel;
    });
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Explore Our
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Course Collection
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover premium courses from top EdTech partners and industry experts. Learn at your own pace with lifetime access.
            </p>
          </div>
        </section>
  
        {/* Filters */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Filter by:</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Programming">Programming</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                    <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>
  
        {/* Partner Courses */}
        <CourseMarketplace />
  
        {/* Additional Courses */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                More Courses
              </h2>
              <p className="text-xl text-gray-600">
                Expand your skills with our additional course offerings
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCourses.map((course, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
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
                    <p className="text-gray-600 mb-3">{course.description}</p>
                    <p className="text-sm text-blue-600 mb-4">by {course.instructor}</p>
                    
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
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded">{course.level}</span>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
  
        <Footer />
      </div>
    );
  };
  
  export default Courses;