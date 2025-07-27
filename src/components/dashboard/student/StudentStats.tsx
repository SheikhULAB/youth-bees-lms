import { Card, CardContent } from "../../ui/card";
import { BookOpen, Clock, Award, TrendingUp, DollarSign } from "lucide-react";

const StudentStats = () => {
  const stats = [
    {
      title: "Enrolled Courses",
      value: "12",
      subtitle: "+3 this month",
      icon: BookOpen,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Hours Learned",
      value: "145",
      subtitle: "+25 this week",
      icon: Clock,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Certificates",
      value: "8",
      subtitle: "2 pending",
      icon: Award,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Skill Level",
      value: "87%",
      subtitle: "+12% improvement",
      icon: TrendingUp,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Money Saved",
      value: "৳15,000",
      subtitle: "vs market price",
      icon: DollarSign,
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className={`bg-gradient-to-r ${stat.gradient} text-white`}>
            <CardContent className="flex items-center p-6">
              <Icon className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium opacity-90">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs opacity-80">{stat.subtitle}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StudentStats;