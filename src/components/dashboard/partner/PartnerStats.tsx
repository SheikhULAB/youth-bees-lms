import { Card, CardContent } from "../../ui/card";
import { Users, TrendingUp, DollarSign, Award, Target } from "lucide-react";

const PartnerStats = () => {
  const stats = [
    {
      title: "Active Students",
      value: "1,234",
      subtitle: "+15% this month",
      icon: Users,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Course Enrollments",
      value: "856",
      subtitle: "+23% vs last month",
      icon: TrendingUp,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Revenue Share",
      value: "৳45,000",
      subtitle: "This month",
      icon: DollarSign,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Partner Rating",
      value: "4.9",
      subtitle: "From 245 reviews",
      icon: Award,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Conversion Rate",
      value: "68%",
      subtitle: "+5% improvement",
      icon: Target,
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

export default PartnerStats;