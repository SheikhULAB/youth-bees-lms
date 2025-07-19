import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { MapPin, Clock, DollarSign, Building, Search, Filter } from "lucide-react";
import { Navigation } from "../components/Navigation";

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Tech Solutions BD",
      location: "Dhaka",
      type: "Internship",
      salary: "৳15,000 - ৳20,000",
      description: "We are looking for a passionate frontend developer intern to join our team. You will work on React-based projects and learn from experienced developers.",
      requirements: ["Basic knowledge of HTML, CSS, JavaScript", "Familiarity with React", "Good communication skills"],
      postedDate: "2024-01-20",
      deadline: "2024-02-15"
    },
    {
      id: 2,
      title: "Junior Backend Developer",
      company: "Digital Agency",
      location: "Chittagong",
      type: "Full-time",
      salary: "৳25,000 - ৳35,000",
      description: "Join our backend team to develop scalable web applications using Node.js and MongoDB. Fresh graduates are encouraged to apply.",
      requirements: ["Knowledge of Node.js", "Database experience (MongoDB/MySQL)", "Understanding of REST APIs"],
      postedDate: "2024-01-18",
      deadline: "2024-02-10"
    },
    {
      id: 3,
      title: "UI/UX Designer Intern",
      company: "Creative Studio",
      location: "Dhaka",
      type: "Internship",
      salary: "৳12,000 - ৳18,000",
      description: "We're seeking a creative UI/UX designer intern to help create beautiful and user-friendly interfaces for our clients' projects.",
      requirements: ["Knowledge of Figma/Adobe XD", "Basic understanding of design principles", "Portfolio required"],
      postedDate: "2024-01-19",
      deadline: "2024-02-20"
    },
    {
      id: 4,
      title: "Digital Marketing Specialist",
      company: "E-commerce Company",
      location: "Sylhet",
      type: "Full-time",
      salary: "৳22,000 - ৳30,000",
      description: "Manage our social media presence, create content, and run digital marketing campaigns to grow our online business.",
      requirements: ["Social media marketing experience", "Content creation skills", "Google Ads knowledge preferred"],
      postedDate: "2024-01-17",
      deadline: "2024-02-08"
    },
    {
      id: 5,
      title: "Content Writer Intern",
      company: "EdTech Startup",
      location: "Remote",
      type: "Internship",
      salary: "৳10,000 - ৳15,000",
      description: "Create engaging content for our educational platform, including blog posts, course descriptions, and marketing materials.",
      requirements: ["Excellent English writing skills", "Research abilities", "Interest in education technology"],
      postedDate: "2024-01-16",
      deadline: "2024-02-12"
    },
    {
      id: 6,
      title: "Mobile App Developer",
      company: "App Development Agency",
      location: "Dhaka",
      type: "Part-time",
      salary: "৳18,000 - ৳25,000",
      description: "Develop mobile applications using React Native or Flutter. Perfect opportunity for students to gain real-world experience.",
      requirements: ["React Native or Flutter experience", "Mobile app development basics", "Portfolio of projects"],
      postedDate: "2024-01-15",
      deadline: "2024-02-05"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === "all" || job.location === locationFilter;
    const matchesType = typeFilter === "all" || job.type === typeFilter;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
            <p className="text-xl mb-8">Discover internships and job opportunities perfect for students and freshers</p>
            
            <div className="max-w-4xl mx-auto bg-white rounded-lg p-4 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="Dhaka">Dhaka</SelectItem>
                    <SelectItem value="Chittagong">Chittagong</SelectItem>
                    <SelectItem value="Sylhet">Sylhet</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Filter className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Positions</h2>
          <p className="text-gray-600">{filteredJobs.length} jobs found</p>
        </div>

        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                        <div className="flex items-center text-gray-600 space-x-4">
                          <div className="flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant={job.type === "Internship" ? "secondary" : "default"}>
                        {job.type}
                      </Badge>
                    </div>

                    <p className="text-gray-700 mb-4">{job.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Posted: {job.postedDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Deadline: {job.deadline}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Button className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="mb-4">
                <Search className="h-16 w-16 text-gray-400 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or check back later for new opportunities.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobBoard;
