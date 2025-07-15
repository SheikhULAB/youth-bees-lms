
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ServicesSection } from "../components/ServicesSection";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle, ArrowRight, Users, Award, Clock, Star } from "lucide-react";

const Services = () => {
  const serviceDetails = [
    {
      title: "1:1 Live Sessions",
      description: "Get personalized guidance from expert mentors in real-time video sessions",
      features: [
        "Expert Mentors from Industry",
        "Flexible Scheduling",
        "Interactive Learning Environment",
        "Progress Tracking & Analytics",
        "Screen Sharing & Code Review",
        "Doubt Resolution Sessions"
      ],
      pricing: "Starting from ৳500/hour",
      popular: true
    },
    {
      title: "Premium Courses",
      description: "Access high-quality courses from top EdTech partners and industry experts",
      features: [
        "Partner Course Library",
        "Industry Recognized Certificates",
        "Lifetime Access to Content",
        "Mobile Learning App",
        "Community Discussion Forums",
        "Project-Based Learning"
      ],
      pricing: "Starting from ৳1,500/course",
      popular: false
    },
    {
      title: "Job Placement Support",
      description: "Find internships and job opportunities tailored for students and freshers",
      features: [
        "Professional CV Building",
        "Mock Interview Sessions",
        "Job Matching Algorithm",
        "Career Guidance Counseling",
        "Company Connect Program",
        "Salary Negotiation Tips"
      ],
      pricing: "₹2,000 one-time fee",
      popular: false
    },
    {
      title: "Affiliate Program",
      description: "Earn by referring courses and becoming a campus ambassador",
      features: [
        "Up to 30% Commission Earnings",
        "Campus Ambassador Program",
        "Referral Bonus System",
        "Community Support & Training",
        "Marketing Material Provided",
        "Performance Analytics Dashboard"
      ],
      pricing: "Free to join",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rashida Begum",
      role: "Computer Science Student",
      content: "The 1:1 sessions helped me understand complex algorithms. My mentor was patient and explained everything clearly.",
      rating: 5
    },
    {
      name: "Arif Rahman",
      role: "Recent Graduate",
      content: "Thanks to the job placement support, I landed my dream job at a tech company. The interview prep was invaluable.",
      rating: 5
    },
    {
      name: "Fatima Ahmed",
      role: "Campus Ambassador",
      content: "The affiliate program has been amazing. I've earned over ৳15,000 while helping my classmates find great courses.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive learning solutions designed to help students and professionals excel in their careers
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesSection />

      {/* Detailed Service Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Details
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our offerings
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {serviceDetails.map((service, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-shadow duration-300 ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-600 mt-2">{service.pricing}</div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
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

export default Services;