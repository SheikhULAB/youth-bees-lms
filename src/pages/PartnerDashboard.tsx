
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { BookOpen, DollarSign, Users, TrendingUp, Plus, Edit, Trash2, Eye, Activity, Award, BarChart3, PieChart, Globe, Star } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPie, Cell, AreaChart, Area } from 'recharts';

const PartnerDashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const [showAddCourse, setShowAddCourse] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Course",
      description: "Learn HTML, CSS, JavaScript, React from scratch",
      price: 4999,
      category: "Programming",
      instructor: "John Smith",
      enrollments: 156,
      rating: 4.8,
      status: "Active",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      description: "Complete guide to digital marketing and social media",
      price: 2999,
      category: "Marketing",
      instructor: "Sarah Johnson",
      enrollments: 89,
      rating: 4.6,
      status: "Active",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
    }
  ];

  const stats = {
    totalCourses: courses.length,
    totalEnrollments: courses.reduce((sum, course) => sum + course.enrollments, 0),
    totalRevenue: 125000,
    pendingPayouts: 15000,
    conversionRate: 3.2,
    averageRating: 4.6
  };

  const revenueData = [
    { month: 'Jan', revenue: 18000, enrollments: 45 },
    { month: 'Feb', revenue: 22000, enrollments: 58 },
    { month: 'Mar', revenue: 19000, enrollments: 52 },
    { month: 'Apr', revenue: 28000, enrollments: 72 },
    { month: 'May', revenue: 25000, enrollments: 65 },
    { month: 'Jun', revenue: 32000, enrollments: 89 },
  ];

  const categoryPerformance = [
    { category: 'Programming', revenue: 45000, courses: 12, color: '#8884d8' },
    { category: 'Design', revenue: 28000, courses: 8, color: '#82ca9d' },
    { category: 'Marketing', revenue: 35000, courses: 6, color: '#ffc658' },
    { category: 'Business', revenue: 17000, courses: 4, color: '#ff7300' },
  ];

  const studentProgress = [
    { course: 'Web Development', completion: 78, students: 156 },
    { course: 'Digital Marketing', completion: 85, students: 89 },
    { course: 'UI/UX Design', completion: 72, students: 124 },
    { course: 'Python Basics', completion: 91, students: 67 },
  ];

  const trafficSources = [
    { source: 'Direct', percentage: 35 },
    { source: 'Social Media', percentage: 28 },
    { source: 'Search Engine', percentage: 22 },
    { source: 'Referrals', percentage: 15 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">Partner Dashboard</h1>
          <p className="text-gray-600 text-lg">Manage your courses and track your performance on YouthBees.</p>
          <div className="mt-4 flex items-center space-x-4">
            <Badge variant="secondary" className="text-sm">
              <Activity className="h-4 w-4 mr-1" />
              Premium Partner
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Award className="h-4 w-4 mr-1" />
              4.6★ Average Rating
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="flex items-center p-6">
              <BookOpen className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-blue-100">Total Courses</p>
                <p className="text-2xl font-bold">{stats.totalCourses}</p>
                <p className="text-xs text-blue-200">Active</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="flex items-center p-6">
              <Users className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-purple-100">Total Enrollments</p>
                <p className="text-2xl font-bold">{stats.totalEnrollments}</p>
                <p className="text-xs text-purple-200">+23 this week</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="flex items-center p-6">
              <DollarSign className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-green-100">Total Revenue</p>
                <p className="text-2xl font-bold">৳{stats.totalRevenue}</p>
                <p className="text-xs text-green-200">+12% this month</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="flex items-center p-6">
              <TrendingUp className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-orange-100">Pending Payouts</p>
                <p className="text-2xl font-bold">৳{stats.pendingPayouts}</p>
                <p className="text-xs text-orange-200">Available soon</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
            <CardContent className="flex items-center p-6">
              <BarChart3 className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-indigo-100">Conversion Rate</p>
                <p className="text-2xl font-bold">{stats.conversionRate}%</p>
                <p className="text-xs text-indigo-200">Above average</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
            <CardContent className="flex items-center p-6">
              <Star className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium text-pink-100">Avg Rating</p>
                <p className="text-2xl font-bold">{stats.averageRating}</p>
                <p className="text-xs text-pink-200">From 245 reviews</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Revenue & Enrollment Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="enrollments" stackId="2" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Category Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <RechartsPie>
                  <RechartsPie
                    data={categoryPerformance}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="revenue"
                  >
                    {categoryPerformance.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </RechartsPie>
                  <Tooltip />
                </RechartsPie>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {categoryPerformance.map((item) => (
                  <div key={item.category} className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                      <span>{item.category}</span>
                    </div>
                    <span className="font-medium">৳{item.revenue}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Student Progress & Traffic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Student Course Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studentProgress.map((course) => (
                <div key={course.course}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{course.course}</span>
                    <span className="text-sm text-gray-500">{course.completion}% • {course.students} students</span>
                  </div>
                  <Progress value={course.completion} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{source.source}</span>
                    <span className="text-sm text-gray-500">{source.percentage}%</span>
                  </div>
                  <Progress value={source.percentage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="courses" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">My Courses</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Analytics</TabsTrigger>
            <TabsTrigger value="payouts" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Payouts</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Course Management</h2>
              <Button onClick={() => setShowAddCourse(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add New Course
              </Button>
            </div>

            {showAddCourse && (
              <Card>
                <CardHeader>
                  <CardTitle>Add New Course</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="courseTitle">Course Title</Label>
                      <Input id="courseTitle" placeholder="Enter course title" />
                    </div>
                    <div>
                      <Label htmlFor="instructor">Instructor Name</Label>
                      <Input id="instructor" placeholder="Enter instructor name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Enter course description" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="price">Price (৳)</Label>
                      <Input id="price" type="number" placeholder="2999" />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="programming">Programming</SelectItem>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="languages">Languages</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="courseLink">Course Link</Label>
                      <Input id="courseLink" placeholder="https://your-platform.com/course" />
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button>Save Course</Button>
                    <Button variant="outline" onClick={() => setShowAddCourse(false)}>Cancel</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <div className="aspect-video relative">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3">
                      <Badge variant="default" className="bg-white/90 text-gray-700">
                        {course.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        {course.enrollments} students
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Instructor:</span>
                        <span className="text-sm font-medium">{course.instructor}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Price:</span>
                        <span className="text-lg font-bold text-green-600">৳{course.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Rating:</span>
                        <div className="flex items-center">
                          <span className="text-sm font-medium mr-1">{course.rating}</span>
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-6">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white flex-1">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">৳25,000</div>
                  <p className="text-sm text-gray-600">+15% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Course Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {courses.map((course) => (
                      <div key={course.id} className="flex justify-between items-center">
                        <span className="text-sm">{course.title}</span>
                        <span className="text-sm font-semibold">{course.enrollments} enrollments</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Enrollment Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  Chart placeholder - Integration with analytics service needed
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payouts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payout Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">৳125,000</div>
                    <div className="text-sm text-gray-600">Total Earnings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">৳110,000</div>
                    <div className="text-sm text-gray-600">Paid Out</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">৳15,000</div>
                    <div className="text-sm text-gray-600">Pending</div>
                  </div>
                </div>
                
                <Button className="w-full md:w-auto">Request Payout</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payout History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold">December 2023</div>
                      <div className="text-sm text-gray-600">Paid on Jan 5, 2024</div>
                    </div>
                    <div className="text-lg font-semibold text-green-600">৳45,000</div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold">November 2023</div>
                      <div className="text-sm text-gray-600">Paid on Dec 5, 2023</div>
                    </div>
                    <div className="text-lg font-semibold text-green-600">৳35,000</div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold">October 2023</div>
                      <div className="text-sm text-gray-600">Paid on Nov 5, 2023</div>
                    </div>
                    <div className="text-lg font-semibold text-green-600">৳30,000</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PartnerDashboard;
