import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Progress } from "../../ui/progress";
import { Play, Clock, User } from "lucide-react";

const EnrolledCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Complete React Developer Course",
      instructor: "Ahmed Rahman",
      progress: 75,
      duration: "40 hours",
      nextLesson: "React Hooks Advanced",
      thumbnail: "/placeholder.svg",
      status: "In Progress"
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Dr. Sarah Khan",
      progress: 45,
      duration: "35 hours",
      nextLesson: "Pandas DataFrames",
      thumbnail: "/placeholder.svg",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      instructor: "Nadia Ahmed",
      progress: 100,
      duration: "25 hours",
      nextLesson: "Course Completed",
      thumbnail: "/placeholder.svg",
      status: "Completed"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Enrolled Courses</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">{course.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <User className="h-4 w-4 mr-1" />
                      <span>{course.instructor}</span>
                      <Clock className="h-4 w-4 ml-3 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <Badge variant={course.status === "Completed" ? "default" : "secondary"}>
                    {course.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Next: {course.nextLesson}
                    </span>
                    <Button size="sm" disabled={course.status === "Completed"}>
                      <Play className="h-4 w-4 mr-1" />
                      {course.status === "Completed" ? "Completed" : "Continue"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default EnrolledCourses;