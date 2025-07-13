
import { TrendingUp, Award, Users, BookOpen } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "50K+",
      label: "Active Students",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BookOpen,
      number: "500+",
      label: "Premium Courses",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      number: "1000+",
      label: "Expert Mentors",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="h-10 w-10" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
