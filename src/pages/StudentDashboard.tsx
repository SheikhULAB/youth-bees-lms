
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import { BookOpen, Video, BriefcaseIcon, DollarSign, Bell, Calendar, Clock, Star, User, MapPin, Trophy, Target, TrendingUp, Activity, Award, Clock4, BookOpenCheck, Users2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, AreaChart, Area } from 'recharts';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");

  const myCourses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      provider: "Programming Hero",
      progress: 75,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      status: "In Progress"
    },
    {
      id: 2,
      title: "IELTS Complete Preparation",
      provider: "10 Minute School",
      progress: 100,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
      status: "Completed"
    }
  ];

  const mySessions = [
    {
      id: 1,
      topic: "React Advanced Concepts",
      mentor: "John Doe",
      date: "2024-01-20",
      time: "10:00 AM",
      status: "Scheduled",
      price: "৳500"
    },
    {
      id: 2,
      topic: "Career Counseling",
      mentor: "Jane Smith",
      date: "2024-01-18",
      time: "2:00 PM",
      status: "Completed",
      price: "৳300"
    }
  ];

  const appliedJobs = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Tech Solutions BD",
      location: "Dhaka",
      appliedDate: "2024-01-15",
      status: "Under Review"
    },
    {
      id: 2,
      title: "Junior React Developer",
      company: "Digital Agency",
      location: "Chittagong",
      appliedDate: "2024-01-10",
      status: "Interview Scheduled"
    }
  ];

  const affiliateStats = {
    totalEarnings: 2500,
    referrals: 12,
    pendingPayouts: 800,
    clickThroughRate: 12.5,
    conversionRate: 8.3
  };

  const learningData = [
    { month: 'Jan', hours: 45, courses: 2 },
    { month: 'Feb', hours: 52, courses: 2 },
    { month: 'Mar', hours: 38, courses: 3 },
    { month: 'Apr', hours: 60, courses: 3 },
    { month: 'May', hours: 55, courses: 2 },
    { month: 'Jun', hours: 70, courses: 4 },
  ];

  const skillProgress = [
    { skill: 'JavaScript', progress: 85, color: '#8884d8' },
    { skill: 'React', progress: 70, color: '#82ca9d' },
    { skill: 'Node.js', progress: 45, color: '#ffc658' },
    { skill: 'Python', progress: 30, color: '#ff7300' },
  ];

  const achievements = [
    { id: 1, title: 'First Course Completed', icon: BookOpenCheck, earned: true, date: '2024-01-15' },
    { id: 2, title: 'Study Streak (7 days)', icon: Trophy, earned: true, date: '2024-01-20' },
    { id: 3, title: 'Perfect Quiz Score', icon: Target, earned: true, date: '2024-01-18' },
    { id: 4, title: 'Community Helper', icon: Users2, earned: false, date: null },
  ];

  const studyStreakData = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 1.8 },
    { day: 'Wed', hours: 3.2 },
    { day: 'Thu', hours: 2.1 },
    { day: 'Fri', hours: 4.0 },
    { day: 'Sat', hours: 2.8 },
    { day: 'Sun', hours: 1.5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Student Dashboard</h1>
          <p className="text-gray-600 text-lg">Welcome back! Track your learning progress and manage your activities.</p>
          <div className="mt-4 flex items-center space-x-4">
            <Badge variant="secondary" className="text-sm">
              <Activity className="h-4 w-4 mr-1" />
              7-day study streak
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Award className="h-4 w-4 mr-1" />
              3 achievements unlocked
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="flex items-center p-6">
              <BookOpen className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-blue-100">Enrolled Courses</p>
                <p className="text-2xl font-bold">{myCourses.length}</p>
                <p className="text-xs text-blue-200">+1 this month</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="flex items-center p-6">
              <Video className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-purple-100">1:1 Sessions</p>
                <p className="text-2xl font-bold">{mySessions.length}</p>
                <p className="text-xs text-purple-200">Next: Tomorrow</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="flex items-center p-6">
              <BriefcaseIcon className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-green-100">Job Applications</p>
                <p className="text-2xl font-bold">{appliedJobs.length}</p>
                <p className="text-xs text-green-200">1 interview scheduled</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="flex items-center p-6">
              <DollarSign className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-orange-100">Affiliate Earnings</p>
                <p className="text-2xl font-bold">৳{affiliateStats.totalEarnings}</p>
                <p className="text-xs text-orange-200">+৳500 this week</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
            <CardContent className="flex items-center p-6">
              <Clock4 className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-indigo-100">Study Hours</p>
                <p className="text-2xl font-bold">187</p>
                <p className="text-xs text-indigo-200">Total this month</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={learningData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="hours" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Study Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={studyStreakData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#8884d8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Skills & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Skill Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skillProgress.map((skill) => (
                <div key={skill.skill}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.skill}</span>
                    <span className="text-sm text-gray-500">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`flex items-center p-3 rounded-lg ${achievement.earned ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}`}>
                  <achievement.icon className={`h-6 w-6 mr-3 ${achievement.earned ? 'text-green-600' : 'text-gray-400'}`} />
                  <div className="flex-1">
                    <p className={`font-medium ${achievement.earned ? 'text-green-800' : 'text-gray-500'}`}>
                      {achievement.title}
                    </p>
                    {achievement.earned && (
                      <p className="text-sm text-green-600">Earned on {achievement.date}</p>
                    )}
                  </div>
                  {achievement.earned && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      ✓
                    </Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="courses" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">My Courses</TabsTrigger>
            <TabsTrigger value="sessions" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">1:1 Sessions</TabsTrigger>
            <TabsTrigger value="jobs" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Applied Jobs</TabsTrigger>
            <TabsTrigger value="affiliate" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Affiliate Panel</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <div className="aspect-video relative">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3">
                      <Badge variant={course.status === "Completed" ? "default" : "secondary"} className="bg-white/90 text-gray-700">
                        {course.status}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{course.provider}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm font-bold text-blue-600">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      
                      <div className="pt-2">
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                          {course.status === "Completed" ? "Review Course" : "Continue Learning"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-4">
            <div className="space-y-4">
              {mySessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{session.topic}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {session.mentor}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {session.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {session.time}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={session.status === "Completed" ? "default" : "secondary"}>
                          {session.status}
                        </Badge>
                        <p className="text-lg font-semibold mt-2">{session.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-4">
            <div className="space-y-4">
              {appliedJobs.map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{job.company}</span>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <span>Applied: {job.appliedDate}</span>
                        </div>
                      </div>
                      <Badge variant={job.status === "Interview Scheduled" ? "default" : "secondary"}>
                        {job.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="affiliate" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
              <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Total Earnings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">৳{affiliateStats.totalEarnings}</p>
                  <p className="text-sm text-green-100 mt-1">+৳500 this week</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Users2 className="h-5 w-5 mr-2" />
                    Referrals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{affiliateStats.referrals}</p>
                  <p className="text-sm text-blue-100 mt-1">+3 this month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">৳{affiliateStats.pendingPayouts}</p>
                  <p className="text-sm text-orange-100 mt-1">Available soon</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Click Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{affiliateStats.clickThroughRate}%</p>
                  <p className="text-sm text-purple-100 mt-1">+2.1% this week</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-indigo-500 to-blue-700 text-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Conversion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{affiliateStats.conversionRate}%</p>
                  <p className="text-sm text-indigo-100 mt-1">Above average</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Affiliate Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={learningData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="courses" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Affiliate Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium">Web Development Course</p>
                      <Badge variant="secondary">156 clicks</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 font-mono bg-white p-2 rounded border">
                      https://youthbees.com/course/web-dev?ref=student123
                    </p>
                    <Button size="sm" className="w-full">Copy Link</Button>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium">IELTS Preparation Course</p>
                      <Badge variant="secondary">89 clicks</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 font-mono bg-white p-2 rounded border">
                      https://youthbees.com/course/ielts?ref=student123
                    </p>
                    <Button size="sm" className="w-full">Copy Link</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;