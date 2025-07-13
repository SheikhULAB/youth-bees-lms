
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { BookOpen, Video, BriefcaseIcon, DollarSign, Bell, Calendar, Clock, Star, User, MapPin } from "lucide-react";

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
    pendingPayouts: 800
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Dashboard</h1>
          <p className="text-gray-600">Welcome back! Track your learning progress and manage your activities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Enrolled Courses</p>
                <p className="text-2xl font-bold text-gray-900">{myCourses.length}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <Video className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">1:1 Sessions</p>
                <p className="text-2xl font-bold text-gray-900">{mySessions.length}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <BriefcaseIcon className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Job Applications</p>
                <p className="text-2xl font-bold text-gray-900">{appliedJobs.length}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <DollarSign className="h-8 w-8 text-orange-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Affiliate Earnings</p>
                <p className="text-2xl font-bold text-gray-900">৳{affiliateStats.totalEarnings}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="sessions">1:1 Sessions</TabsTrigger>
            <TabsTrigger value="jobs">Applied Jobs</TabsTrigger>
            <TabsTrigger value="affiliate">Affiliate Panel</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="aspect-video">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{course.provider}</p>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant={course.status === "Completed" ? "default" : "secondary"}>
                        {course.status}
                      </Badge>
                      <span className="text-sm font-medium">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <Button className="w-full">Continue Learning</Button>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Total Earnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-600">৳{affiliateStats.totalEarnings}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Successful Referrals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-600">{affiliateStats.referrals}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pending Payouts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-orange-600">৳{affiliateStats.pendingPayouts}</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Your Affiliate Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium mb-2">Web Development Course</p>
                  <p className="text-sm text-gray-600 mb-2">https://youthbees.com/course/web-dev?ref=student123</p>
                  <Button size="sm">Copy Link</Button>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium mb-2">IELTS Preparation Course</p>
                  <p className="text-sm text-gray-600 mb-2">https://youthbees.com/course/ielts?ref=student123</p>
                  <Button size="sm">Copy Link</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;
