
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Activity, Award } from "lucide-react";
import DashboardLayout from '../components/dashboard/DashboardLayout';
import StudentStats from '../components/dashboard/student/StudentStats';
import LearningProgress from '../components/dashboard/student/LearningProgress';
import EnrolledCourses from '../components/dashboard/student/EnrolledCourses';


const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");

  const badges = [
    { icon: <Activity className="h-4 w-4 mr-1" />, text: "7-day study streak" },
    { icon: <Award className="h-4 w-4 mr-1" />, text: "3 achievements unlocked" }
  ];

  return (
    <DashboardLayout
      title="Student Dashboard"
      subtitle="Welcome back! Track your learning progress and manage your activities."
      userType="student"
      badges={badges}
    >
      <StudentStats />
      <LearningProgress />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-white/50 backdrop-blur-sm">
          <TabsTrigger value="courses" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">My Courses</TabsTrigger>
          <TabsTrigger value="sessions" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">1:1 Sessions</TabsTrigger>
          <TabsTrigger value="jobs" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Applied Jobs</TabsTrigger>
          <TabsTrigger value="affiliate" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Affiliate Panel</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <EnrolledCourses />
        </TabsContent>

        <TabsContent value="sessions" className="space-y-4">
          <div className="text-center py-8">
            <p className="text-muted-foreground">Sessions content will be loaded here</p>
          </div>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-4">
          <div className="text-center py-8">
            <p className="text-muted-foreground">Job applications content will be loaded here</p>
          </div>
        </TabsContent>

        <TabsContent value="affiliate" className="space-y-4">
          <div className="text-center py-8">
            <p className="text-muted-foreground">Affiliate panel content will be loaded here</p>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default StudentDashboard;