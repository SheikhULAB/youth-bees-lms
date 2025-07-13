
import { Video, BookOpen, BriefcaseIcon, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from "./ui/card";

export const ServicesSection = () => {
  const services = [
    {
      icon: Video,
      title: "1:1 Live Sessions",
      description: "Get personalized guidance from expert mentors in real-time video sessions",
      features: ["Expert Mentors", "Flexible Scheduling", "Interactive Learning", "Progress Tracking"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: BookOpen,
      title: "Premium Courses",
      description: "Access high-quality courses from top EdTech partners and industry experts",
      features: ["Partner Courses", "Certificates", "Lifetime Access", "Mobile Learning"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: BriefcaseIcon,
      title: "Job Placement",
      description: "Find internships and job opportunities tailored for students and freshers",
      features: ["CV Building", "Interview Prep", "Job Matching", "Career Guidance"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      title: "Affiliate Program",
      description: "Earn by referring courses and becoming a campus ambassador",
      features: ["Commission Earnings", "Ambassador Program", "Referral Bonuses", "Community Support"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive learning solutions designed to help students and professionals excel in their careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`${service.bgColor} border-0 hover:shadow-xl transition-shadow duration-300 group`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 group-hover:bg-white/50 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
