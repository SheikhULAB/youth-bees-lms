
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { BookOpen, DollarSign, Users, TrendingUp, Plus, Edit, Trash2, Eye } from "lucide-react";

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
    pendingPayouts: 15000
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Partner Dashboard</h1>
          <p className="text-gray-600">Manage your courses and track your performance on YouthBees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Total Courses</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalCourses}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <Users className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Total Enrollments</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalEnrollments}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <DollarSign className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">৳{stats.totalRevenue}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <TrendingUp className="h-8 w-8 text-orange-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Payouts</p>
                <p className="text-2xl font-bold text-gray-900">৳{stats.pendingPayouts}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="payouts">Payouts</TabsTrigger>
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
                <Card key={course.id} className="overflow-hidden">
                  <div className="aspect-video">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{course.title}</h3>
                      <Badge variant="default">{course.status}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Instructor:</span>
                        <span>{course.instructor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <span className="font-semibold">৳{course.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Enrollments:</span>
                        <span>{course.enrollments}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rating:</span>
                        <span>{course.rating} ⭐</span>
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
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