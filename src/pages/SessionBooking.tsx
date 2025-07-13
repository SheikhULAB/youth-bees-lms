import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { Star, Clock, DollarSign, User, CalendarIcon, Search } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../lib/utils";

const SessionBooking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const teachers = [
    {
      id: 1,
      name: "Dr. Ahmed Hassan",
      expertise: ["Web Development", "JavaScript", "React", "Node.js"],
      rating: 4.9,
      reviewCount: 125,
      hourlyRate: 800,
      bio: "Senior software engineer with 8+ years of experience. Specialized in full-stack web development and mentoring junior developers.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      availability: ["Monday", "Tuesday", "Wednesday", "Friday"],
      totalSessions: 450
    },
    {
      id: 2,
      name: "Sarah Rahman",
      expertise: ["Digital Marketing", "Social Media", "Content Strategy"],
      rating: 4.8,
      reviewCount: 89,
      hourlyRate: 600,
      bio: "Digital marketing specialist helping businesses grow their online presence. 5+ years of industry experience.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      availability: ["Tuesday", "Thursday", "Saturday", "Sunday"],
      totalSessions: 320
    },
    {
      id: 3,
      name: "Prof. Mohammad Ali",
      expertise: ["Career Counseling", "Interview Preparation", "Resume Building"],
      rating: 4.9,
      reviewCount: 203,
      hourlyRate: 500,
      bio: "Career counselor and HR expert with 10+ years of experience helping students and professionals achieve their career goals.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      availability: ["Monday", "Wednesday", "Thursday", "Friday"],
      totalSessions: 680
    },
    {
      id: 4,
      name: "Fatima Khan",
      expertise: ["Data Science", "Python", "Machine Learning", "Statistics"],
      rating: 4.7,
      reviewCount: 67,
      hourlyRate: 900,
      bio: "Data scientist and ML engineer. PhD in Computer Science with expertise in AI and machine learning applications.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      availability: ["Tuesday", "Wednesday", "Friday", "Saturday"],
      totalSessions: 234
    },
    {
      id: 5,
      name: "Rafiq Ahmed",
      expertise: ["IELTS Preparation", "English Language", "Academic Writing"],
      rating: 4.8,
      reviewCount: 156,
      hourlyRate: 400,
      bio: "IELTS instructor with 7+ years of experience. Helped 500+ students achieve their target IELTS scores.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      availability: ["Monday", "Tuesday", "Thursday", "Sunday"],
      totalSessions: 590
    }
  ];

  const categories = ["Web Development", "Digital Marketing", "Career Counseling", "Data Science", "IELTS Preparation", "Programming", "Design"];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || selectedCategory === "all" || teacher.expertise.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  const [selectedTeacher, setSelectedTeacher] = useState<typeof teachers[0] | null>(null);
  const [bookingForm, setBookingForm] = useState({
    topic: "",
    message: "",
    preferredTime: "",
    sessionDuration: "60"
  });

  const handleBookSession = () => {
    if (!selectedTeacher || !selectedDate) return;
    
    console.log("Booking session:", {
      teacher: selectedTeacher.name,
      date: selectedDate,
      ...bookingForm
    });
    
    // TODO: Implement booking logic
    alert("Session request sent! The teacher will review and confirm your booking.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Book 1:1 Learning Sessions</h1>
            <p className="text-xl mb-8">Connect with expert mentors for personalized guidance and skill development</p>
            
            <div className="max-w-3xl mx-auto bg-white rounded-lg p-4 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search mentors or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Find Mentors
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Teachers List */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Mentors</h2>
              <p className="text-gray-600">{filteredTeachers.length} mentors found</p>
            </div>

            <div className="space-y-6">
              {filteredTeachers.map((teacher) => (
                <Card key={teacher.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{teacher.name}</h3>
                            <div className="flex items-center mb-2">
                              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                              <span className="font-medium">{teacher.rating}</span>
                              <span className="text-gray-600 ml-1">({teacher.reviewCount} reviews)</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600">৳{teacher.hourlyRate}</div>
                            <div className="text-sm text-gray-600">per hour</div>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-3">{teacher.bio}</p>

                        <div className="mb-3">
                          <div className="flex flex-wrap gap-2">
                            {teacher.expertise.map((skill, index) => (
                              <Badge key={index} variant="secondary">{skill}</Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{teacher.totalSessions} sessions completed</span>
                            </div>
                            <div>
                              Available: {teacher.availability.join(", ")}
                            </div>
                          </div>
                          
                          <Button 
                            onClick={() => setSelectedTeacher(teacher)}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          >
                            Book Session
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Book Your Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedTeacher ? (
                  <>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <img
                          src={selectedTeacher.image}
                          alt={selectedTeacher.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">{selectedTeacher.name}</h4>
                          <p className="text-sm text-gray-600">৳{selectedTeacher.hourlyRate}/hour</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="topic">Session Topic</Label>
                      <Input
                        id="topic"
                        placeholder="What do you want to learn?"
                        value={bookingForm.topic}
                        onChange={(e) => setBookingForm({...bookingForm, topic: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label>Preferred Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !selectedDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select value={bookingForm.preferredTime} onValueChange={(value) => setBookingForm({...bookingForm, preferredTime: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="19:00">7:00 PM</SelectItem>
                          <SelectItem value="20:00">8:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="duration">Session Duration</Label>
                      <Select value={bookingForm.sessionDuration} onValueChange={(value) => setBookingForm({...bookingForm, sessionDuration: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="60">1 hour</SelectItem>
                          <SelectItem value="90">1.5 hours</SelectItem>
                          <SelectItem value="120">2 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell the mentor what you'd like to focus on..."
                        value={bookingForm.message}
                        onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                      />
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span>Session Cost:</span>
                        <span className="text-xl font-bold">
                          ৳{selectedTeacher.hourlyRate * (parseInt(bookingForm.sessionDuration) / 60)}
                        </span>
                      </div>
                    </div>

                    <Button 
                      onClick={handleBookSession}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={!selectedDate || !bookingForm.topic || !bookingForm.preferredTime}
                    >
                      Send Booking Request
                    </Button>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a Mentor</h3>
                    <p className="text-gray-600">Choose a mentor from the list to book your session</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionBooking;
