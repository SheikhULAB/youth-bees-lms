
import { TrendingUp, Award, Users, BookOpen } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "50K+",
      label: "Active Students",
      color: "logo-orange"
    },
    {
      icon: BookOpen,
      number: "500+",
      label: "Premium Courses",
      color: "logo-yellow"
    },
    {
      icon: Award,
      number: "1000+",
      label: "Expert Mentors",
      color: "logo-green"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      color: "logo-red"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-youthbees">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Students Worldwide
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of successful learners who have transformed their careers with YouthBees
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center text-white group">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group-hover:shadow-2xl">
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-105 transition-transform animate-fade-in">
                  <span className="inline-block animate-pulse hover:animate-none">
                    {stat.number}
                  </span>
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};