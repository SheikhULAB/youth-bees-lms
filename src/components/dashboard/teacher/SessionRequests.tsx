import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { User, Calendar, DollarSign, CheckCircle, XCircle } from 'lucide-react';

const SessionRequests = () => {
  const sessionRequests = [
    {
      id: 1,
      student: 'Ahmed Rahman',
      topic: 'React Advanced Concepts',
      preferredDate: '2024-01-25',
      preferredTime: '10:00 AM',
      ticketPrice: 500,
      message: 'Need help with React hooks and state management'
    },
    {
      id: 2,
      student: 'Fatima Khan',
      topic: 'Career Counseling',
      preferredDate: '2024-01-26',
      preferredTime: '2:00 PM',
      ticketPrice: 300,
      message: 'Looking for guidance on career path in tech'
    }
  ];

  return (
    <div className="space-y-4">
      {sessionRequests.map((request) => (
        <Card key={request.id}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{request.topic}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>Student: {request.student}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Preferred: {request.preferredDate} at {request.preferredTime}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>Ticket Price: ৳{request.ticketPrice}</span>
                  </div>
                  <p className="mt-2 text-gray-700">{request.message}</p>
                </div>
              </div>
              <div className="flex space-x-2 ml-4">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Accept
                </Button>
                <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                  <XCircle className="h-4 w-4 mr-1" />
                  Decline
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SessionRequests;