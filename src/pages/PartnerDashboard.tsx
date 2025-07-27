
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Activity, Award } from "lucide-react";
import DashboardLayout from '../components/dashboard/DashboardLayout';
import PartnerStats from '../components/dashboard/partner/PartnerStats';

const PartnerDashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");

  const badges = [
    { icon: <Activity className="h-4 w-4 mr-1" />, text: "Premium Partner" },
    { icon: <Award className="h-4 w-4 mr-1" />, text: "4.6★ Average Rating" }
  ];

  return (
    <DashboardLayout
      title="Partner Dashboard"
      subtitle="Manage your courses and track your performance on YouthBees."
      userType="partner"
      badges={badges}
    >
      <PartnerStats />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 bg-white/50 backdrop-blur-sm">
          <TabsTrigger value="courses" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">My Courses</TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Analytics</TabsTrigger>
          <TabsTrigger value="payouts" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Payouts</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <div className="text-center py-8">
            <p className="text-muted-foreground">Course management content will be loaded here</p>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="text-center py-8">
            <p className="text-muted-foreground">Analytics content will be loaded here</p>
          </div>
        </TabsContent>

        <TabsContent value="payouts" className="space-y-4">
          <div className="text-center py-8">
            <p className="text-muted-foreground">Payouts content will be loaded here</p>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default PartnerDashboard;