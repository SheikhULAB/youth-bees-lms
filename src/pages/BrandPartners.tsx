import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Building2, Users, Award, TrendingUp } from "lucide-react";

const BrandPartners = () => {
  const partners = [
    { name: "Tech Corp", logo: "TC", category: "Technology" },
    { name: "EduLearn", logo: "EL", category: "Education" },
    { name: "Future Skills", logo: "FS", category: "Skills Development" },
    { name: "Career Boost", logo: "CB", category: "Career Services" },
    { name: "Digital Academy", logo: "DA", category: "Digital Learning" },
    { name: "Pro Mentors", logo: "PM", category: "Mentorship" },
  ];

  const benefits = [
    {
      icon: Building2,
      title: "Brand Visibility",
      description: "Showcase your brand to thousands of active students and professionals"
    },
    {
      icon: Users,
      title: "Talent Pipeline",
      description: "Access to skilled candidates and fresh talent from our platform"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Position your company as a leader in professional development"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Drive growth through strategic partnerships and collaborations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Brand <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We collaborate with industry leaders to provide the best learning experiences and career opportunities for our community.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Leading Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our growing network of partners and unlock new opportunities for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-youthbees">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's work together to create amazing learning experiences and drive mutual growth.
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 rounded-lg font-bold shadow-xl hover:scale-105 transition-all duration-300">
            Become a Partner
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandPartners;