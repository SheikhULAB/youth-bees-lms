
import { Card, CardContent } from "../../ui/card";
import { Video, Calendar, DollarSign, Star, BookOpen } from "lucide-react";

const TeacherStats = () => {
  const stats = [
    {
      title: "Pending Requests",
      value: "2",
      subtitle: "+2 today",
      icon: Video,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Scheduled Sessions",
      value: "2",
      subtitle: "Next: 2 hours",
      icon: Calendar,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "This Month",
      value: "৳3,500",
      subtitle: "+25% vs last month",
      icon: DollarSign,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Avg Rating",
      value: "4.8",
      subtitle: "From 127 reviews",
      icon: Star,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Total Students",
      value: "234",
      subtitle: "Across all sessions",
      icon: BookOpen,
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

export default TeacherStats;