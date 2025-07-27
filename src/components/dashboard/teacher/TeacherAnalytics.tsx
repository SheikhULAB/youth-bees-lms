import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { Progress } from '@radix-ui/react-progress';
// Adjust the relative path for your UI components
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';

const TeacherAnalytics = () => {
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
    <>
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
    </>
  );
};

export default TeacherAnalytics;
