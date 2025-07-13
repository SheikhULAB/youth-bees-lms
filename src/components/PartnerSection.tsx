
import { Shield, Award, TrendingUp, Users } from "lucide-react";

export const PartnerSection = () => {
  const partners = [
    { name: "10 Minute School", logo: "🎓" },
    { name: "Programming Hero", logo: "💻" },
    { name: "Bohubrihi", logo: "📚" },
    { name: "Learn with Sumit", logo: "🚀" },
    { name: "Creative IT", logo: "💡" },
    { name: "LEDP", logo: "🎯" }
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Partners",
      description: "All our EdTech partners are carefully vetted for quality"
    },
    {
      icon: Award,
      title: "Premium Content",
      description: "Access to high-quality, industry-relevant courses"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Courses designed to accelerate your professional journey"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a thriving community of learners and mentors"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted EdTech Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with Bangladesh's leading educational technology companies to bring you the best learning experiences
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <h3 className="text-sm font-medium text-gray-900">{partner.name}</h3>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
