import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, BarChart, Bar } from 'recharts';

const LearningProgress = () => {
  const progressData = [
    { week: 'Week 1', hours: 8, courses: 2 },
    { week: 'Week 2', hours: 12, courses: 3 },
    { week: 'Week 3', hours: 6, courses: 1 },
    { week: 'Week 4', hours: 15, courses: 4 },
    { week: 'Week 5', hours: 10, courses: 2 },
    { week: 'Week 6', hours: 18, courses: 5 },
  ];

  const skillData = [
    { skill: 'JavaScript', level: 85 },
    { skill: 'React', level: 75 },
    { skill: 'Python', level: 60 },
    { skill: 'UI/UX', level: 70 },
    { skill: 'Data Science', level: 45 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Weekly Learning Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="hours" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skill Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={skillData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="skill" type="category" width={80} />
              <Tooltip />
              <Bar dataKey="level" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default LearningProgress;