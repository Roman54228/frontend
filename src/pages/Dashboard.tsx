import { Button } from '@/components/ui/button';
import {
    Calendar,
    CheckCircle2,
    ChevronRight,
    Clock,
    FileText,
    MessageSquare,
    Monitor,
    TrendingUp,
    Trophy,
    User
} from 'lucide-react';

export function Dashboard() {
  const stats = [
    { 
      label: 'Interviews Completed', 
      value: '12', 
      change: '+3 this week',
      icon: Trophy,
      color: 'text-green-600'
    },
    { 
      label: 'Success Rate', 
      value: '85%', 
      change: '+5% this month',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    { 
      label: 'Practice Hours', 
      value: '32h', 
      change: '+8h this week',
      icon: Clock,
      color: 'text-purple-600'
    },
    { 
      label: 'Resume Improvements', 
      value: '7', 
      change: '+2 this week',
      icon: FileText,
      color: 'text-orange-600'
    }
  ];

  const recentActivity = [
    {
      title: 'Completed Mock Interview - Software Developer Position',
      description: 'Scored 8.5/10 on technical questions.',
      time: '2 hours ago',
      status: 'completed'
    },
    {
      title: 'AI Resume Optimization',
      description: 'Enhanced ATS compatibility by 23%',
      time: '5 hours ago',
      status: 'completed'
    },
    {
      title: 'Interview Preparation Session',
      description: 'Reviewed behavioral questions for Amazon interview',
      time: '1 day ago',
      status: 'completed'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Mock Interview Session',
      date: 'Tomorrow at 2:00 PM',
      type: 'mock'
    },
    {
      title: 'Resume Review Meeting',
      date: 'Friday at 10:00 AM', 
      type: 'review'
    },
    {
      title: 'AI Interview Coach Session',
      date: 'Monday at 3:00 PM',
      type: 'coach'
    }
  ];

  const quickActions = [
    {
      title: 'Start Mock Interview',
      description: 'Practice with AI interviewer',
      icon: MessageSquare,
      href: '/mock-interview'
    },
    {
      title: 'Optimize Resume',
      description: 'AI-powered resume builder',
      icon: FileText,
      href: '/dashboard'
    },
    {
      title: 'Interview Copilot',
      description: 'Real-time interview assistance',
      icon: Monitor,
      href: '/dashboard'
    },
    {
      title: 'Schedule Practice',
      description: 'Book interview prep session',
      icon: Calendar,
      href: '/dashboard'
    },
    {
      title: '🏠 Главная страница',
      description: 'Вернуться на главную',
      icon: User,
      href: '/'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg bg-gray-50 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-green-600">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              <Button variant="ghost" className="text-orange-600 hover:text-orange-700">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
              <Button variant="ghost" className="text-orange-600 hover:text-orange-700">
                View Calendar
              </Button>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{event.title}</p>
                    <p className="text-xs text-gray-600">{event.date}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((action, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                onClick={() => window.location.href = action.href}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-100 transition-colors">
                    <action.icon className="h-6 w-6" />
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">{action.title}</h4>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Chart Placeholder */}
        <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Interview Progress</h3>
          <div className="h-64 flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p>Progress chart will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
