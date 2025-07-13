
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Video, DollarSign, Clock, User, Calendar, Star, CheckCircle, XCircle } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Teacher Dashboard</h1>
          <p className="text-gray-600">Manage your teaching sessions and track your earnings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <Video className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Requests</p>
                <p className="text-2xl font-bold text-gray-900">{sessionRequests.length}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <Calendar className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Scheduled Sessions</p>
                <p className="text-2xl font-bold text-gray-900">{scheduledSessions.length}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <DollarSign className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">৳{earnings.thisMonth}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <Star className="h-8 w-8 text-orange-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.8</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="requests">Session Requests</TabsTrigger>
            <TabsTrigger value="schedule">My Schedule</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="reviews">Student Reviews</TabsTrigger>
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