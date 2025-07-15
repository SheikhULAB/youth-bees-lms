
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Navigation } from '../components/Navigation';
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Footer } from '../components/Footer';

const Events = () => {
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const events = [
    {
      title: "Web Development Workshop",
      description: "Learn modern web development with React and Node.js. Hands-on workshop with industry experts.",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Dhaka University, Computer Lab",
      type: "Workshop",
      status: "Upcoming",
      attendees: 45,
      maxAttendees: 50,
      price: "Free",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      featured: true
    },
    {
      title: "Career Fair 2024",
      description: "Connect with top tech companies and explore internship and job opportunities.",
      date: "March 22, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "International Convention City Bashundhara",
      type: "Career Fair",
      status: "Upcoming",
      attendees: 230,
      maxAttendees: 500,
      price: "৳200",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop",
      featured: true
    },
    {
      title: "AI & Machine Learning Seminar",
      description: "Discover the latest trends in AI and ML with industry leaders and researchers.",
      date: "March 28, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "BUET Auditorium",
      type: "Seminar",
      status: "Upcoming",
      attendees: 120,
      maxAttendees: 200,
      price: "৳500",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      featured: false
    },
    {
      title: "Mobile App Development Bootcamp",
      description: "3-day intensive bootcamp on React Native and Flutter development.",
      date: "April 5-7, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Daffodil International University",
      type: "Bootcamp",
      status: "Upcoming",
      attendees: 28,
      maxAttendees: 30,
      price: "৳2,500",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      featured: false
    },
    {
      title: "Startup Pitch Competition",
      description: "Present your startup ideas to investors and win exciting prizes.",
      date: "February 20, 2024",
      time: "10:00 AM - 8:00 PM",
      location: "American International University",
      type: "Competition",
      status: "Completed",
      attendees: 85,
      maxAttendees: 100,
      price: "Free",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
      featured: false
    },
    {
      title: "Digital Marketing Masterclass",
      description: "Learn advanced digital marketing strategies and tools from industry experts.",
      date: "April 12, 2024",
      time: "1:00 PM - 6:00 PM",
      location: "North South University",
      type: "Masterclass",
      status: "Upcoming",
      attendees: 67,
      maxAttendees: 80,
      price: "৳800",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      featured: false
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesType = typeFilter === "all" || event.type === typeFilter;
    const matchesStatus = statusFilter === "all" || event.status === statusFilter;
    return matchesType && matchesStatus;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === "Upcoming");
  const featuredEvents = upcomingEvents.filter(event => event.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Upcoming
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join workshops, seminars, and networking events to enhance your skills and connect with industry professionals.
          </p>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 ring-2 ring-blue-500">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded px-3 py-1 text-sm font-medium">
                        {event.price}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                        {event.type}
                      </span>
                      <span className="text-green-600 font-medium text-sm">{event.status}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{event.attendees}/{event.maxAttendees} registered</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter events:</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Workshop">Workshop</SelectItem>
                  <SelectItem value="Seminar">Seminar</SelectItem>
                  <SelectItem value="Bootcamp">Bootcamp</SelectItem>
                  <SelectItem value="Career Fair">Career Fair</SelectItem>
                  <SelectItem value="Competition">Competition</SelectItem>
                  <SelectItem value="Masterclass">Masterclass</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="Upcoming">Upcoming</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded px-2 py-1 text-sm font-medium">
                      {event.price}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {event.type}
                    </span>
                    <span className={`font-medium text-xs ${event.status === 'Upcoming' ? 'text-green-600' : 'text-gray-500'}`}>
                      {event.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.description}</p>
                  
                  <div className="space-y-1 mb-4">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <MapPin className="h-3 w-3 mr-2" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Users className="h-3 w-3 mr-2" />
                      <span>{event.attendees}/{event.maxAttendees}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full text-sm" 
                    variant={event.status === 'Completed' ? 'outline' : 'default'}
                    disabled={event.status === 'Completed'}
                  >
                    {event.status === 'Completed' ? 'Event Completed' : 'Register'}
                    {event.status !== 'Completed' && <ArrowRight className="ml-2 h-3 w-3" />}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
