
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Progress } from "../components/ui/progress";
import { Video, DollarSign, Clock, User, Calendar, Star, CheckCircle, XCircle, TrendingUp, Activity, Award, BookOpen, Users2, Target, MessageSquare } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("requests");

  const sessionRequests = [
    {
      id: 1,
      student: "Ahmed Rahman",
      topic: "React Advanced Concepts",
      preferredDate: "2024-01-25",
      preferredTime: "10:00 AM",
      ticketPrice: 500,
      message: "Need help with React hooks and state management"
    },
    {
      id: 2,
      student: "Fatima Khan",
      topic: "Career Counseling",
      preferredDate: "2024-01-26",
      preferredTime: "2:00 PM",
      ticketPrice: 300,
      message: "Looking for guidance on career path in tech"
    }
  ];

  const scheduledSessions = [
    {
      id: 1,
      student: "John Doe",
      topic: "JavaScript Fundamentals",
      date: "2024-01-22",
      time: "3:00 PM",
      status: "Confirmed",
      meetingLink: "https://meet.google.com/xyz-abc-def"
    },
    {
      id: 2,
      student: "Sarah Wilson",
      topic: "Python Basics",
      date: "2024-01-24",
      time: "11:00 AM",
      status: "Pending Payment",
      meetingLink: ""
    }
  ];

  const earnings = {
    totalEarnings: 15000,
    thisMonth: 3500,
    pendingPayouts: 2000,
    completedSessions: 45
  };

  const reviews = [
    {
      id: 1,
      student: "Ahmed Ali",
      rating: 5,
      comment: "Excellent teacher! Very patient and knowledgeable.",
      date: "2024-01-15"
    },
    {
      id: 2,
      student: "Nadia Ahmed",
      rating: 4,
      comment: "Great session on React. Learned a lot!",
      date: "2024-01-12"
    }
  ];

  const earningsData = [
    { month: 'Jan', earnings: 8000, sessions: 12 },
    { month: 'Feb', earnings: 12000, sessions: 18 },
    { month: 'Mar', earnings: 9500, sessions: 15 },
    { month: 'Apr', earnings: 15000, sessions: 22 },
    { month: 'May', earnings: 11000, sessions: 16 },
    { month: 'Jun', earnings: 18000, sessions: 25 },
  ];

  const subjectDistribution = [
    { subject: 'React', sessions: 45, color: '#8884d8' },
    { subject: 'JavaScript', sessions: 32, color: '#82ca9d' },
    { subject: 'Python', sessions: 28, color: '#ffc658' },
    { subject: 'Career Guidance', sessions: 15, color: '#ff7300' },
  ];

  const studentFeedback = [
    { category: 'Clarity', score: 4.8 },
    { category: 'Patience', score: 4.9 },
    { category: 'Knowledge', score: 4.7 },
    { category: 'Engagement', score: 4.6 },
  ];

  const weeklySchedule = [
    { day: 'Mon', sessions: 4 },
    { day: 'Tue', sessions: 3 },
    { day: 'Wed', sessions: 5 },
    { day: 'Thu', sessions: 2 },
    { day: 'Fri', sessions: 6 },
    { day: 'Sat', sessions: 3 },
    { day: 'Sun', sessions: 1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">Teacher Dashboard</h1>
          <p className="text-gray-600 text-lg">Manage your teaching sessions and track your earnings.</p>
          <div className="mt-4 flex items-center space-x-4">
            <Badge variant="secondary" className="text-sm">
              <Activity className="h-4 w-4 mr-1" />
              4.8 average rating
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Award className="h-4 w-4 mr-1" />
              Top 10% teacher
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="flex items-center p-6">
              <Video className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-blue-100">Pending Requests</p>
                <p className="text-2xl font-bold">{sessionRequests.length}</p>
                <p className="text-xs text-blue-200">+2 today</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="flex items-center p-6">
              <Calendar className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-purple-100">Scheduled Sessions</p>
                <p className="text-2xl font-bold">{scheduledSessions.length}</p>
                <p className="text-xs text-purple-200">Next: 2 hours</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="flex items-center p-6">
              <DollarSign className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-green-100">This Month</p>
                <p className="text-2xl font-bold">৳{earnings.thisMonth}</p>
                <p className="text-xs text-green-200">+25% vs last month</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="flex items-center p-6">
              <Star className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-orange-100">Avg Rating</p>
                <p className="text-2xl font-bold">4.8</p>
                <p className="text-xs text-orange-200">From 127 reviews</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
            <CardContent className="flex items-center p-6">
              <BookOpen className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-indigo-100">Total Students</p>
                <p className="text-2xl font-bold">234</p>
                <p className="text-xs text-indigo-200">Across all sessions</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Earnings & Sessions Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={earningsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="earnings" stroke="#10b981" strokeWidth={2} />
                  <Line type="monotone" dataKey="sessions" stroke="#8b5cf6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={weeklySchedule}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sessions" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Student Feedback Scores</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studentFeedback.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{item.category}</span>
                    <span className="text-sm text-gray-500">{item.score}/5.0</span>
                  </div>
                  <Progress value={item.score * 20} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Subject Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={subjectDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="sessions"
                  >
                    {subjectDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {subjectDistribution.map((item) => (
                  <div key={item.subject} className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                      <span>{item.subject}</span>
                    </div>
                    <span className="font-medium">{item.sessions} sessions</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="requests" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Session Requests</TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">My Schedule</TabsTrigger>
            <TabsTrigger value="earnings" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Earnings</TabsTrigger>
            <TabsTrigger value="reviews" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Student Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="requests" className="space-y-4">
            <div className="space-y-4">
              {sessionRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{request.topic}</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            <span>Student: {request.student}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>Preferred: {request.preferredDate} at {request.preferredTime}</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-2" />
                            <span>Ticket Price: ৳{request.ticketPrice}</span>
                          </div>
                          <p className="mt-2 text-gray-700">{request.message}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Accept
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                          <XCircle className="h-4 w-4 mr-1" />
                          Decline
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-4">
            <div className="space-y-4">
              {scheduledSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{session.topic}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {session.student}
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
                        {session.meetingLink && (
                          <div className="mt-2">
                            <Label className="text-sm font-medium">Meeting Link:</Label>
                            <p className="text-sm text-blue-600">{session.meetingLink}</p>
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <Badge variant={session.status === "Confirmed" ? "default" : "secondary"}>
                          {session.status}
                        </Badge>
                        {session.status === "Confirmed" && (
                          <Button size="sm" className="mt-2">Join Session</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Total Earnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-600">৳{earnings.totalEarnings}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pending Payouts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-orange-600">৳{earnings.pendingPayouts}</p>
                  <Button size="sm" className="mt-2">Request Payout</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Completed Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-600">{earnings.completedSessions}</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Session Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="topics">Topics You Teach</Label>
                    <Textarea 
                      id="topics"
                      placeholder="Enter the topics you can teach (one per line)"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Textarea 
                      id="availability"
                      placeholder="Describe your availability (days and times)"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ticketPrice">Default Ticket Price (৳)</Label>
                    <Input 
                      id="ticketPrice"
                      type="number"
                      placeholder="500"
                      className="mt-1"
                    />
                  </div>
                  <div className="flex items-end">
                    <Button>Update Settings</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="font-semibold">{review.student}</span>
                          <div className="flex items-center ml-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-2">{review.comment}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeacherDashboard;
