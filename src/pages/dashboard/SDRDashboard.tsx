import { useAuth } from '@/contexts/AuthContext';
import { StatCard } from '@/components/dashboard/StatCard';
import { weeklySDRData } from '@/data/mockData';
import { Phone, Clock, Target, TrendingUp, Calendar, FileText } from 'lucide-react';

export default function SDRDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8 animate-slide-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Welcome back, <span className="text-gradient-primary">{user?.name.split(' ')[0]}</span>
        </h1>
        <p className="text-muted-foreground mt-1">Here's your weekly performance summary.</p>
      </div>

      {/* Weekly Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Calls Made This Week"
          value={weeklySDRData.callsMade}
          icon={Phone}
        />
        <StatCard
          label="Avg. Call Duration"
          value={weeklySDRData.avgDuration}
          icon={Clock}
        />
        <StatCard
          label="Qualified Leads"
          value={weeklySDRData.qualifiedLeads}
          icon={Target}
          variant="success"
        />
        <StatCard
          label="Conversion Rate"
          value={`${weeklySDRData.conversionRate}%`}
          icon={TrendingUp}
          variant="primary"
        />
      </div>

      {/* Best Day Card */}
      <div className="stat-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-success/10">
            <Calendar className="w-5 h-5 text-success" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Top Performing Day</h3>
            <p className="text-muted-foreground text-sm">This week's best performance</p>
          </div>
        </div>
        <p className="text-2xl font-bold text-gradient-success">{weeklySDRData.topPerformingDay}</p>
      </div>

      {/* Manager Notes */}
      <div className="stat-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">Manager Notes</h3>
        </div>
        <div className="space-y-4">
          {weeklySDRData.notes.map((note, index) => (
            <div key={index} className="p-4 rounded-lg bg-secondary/50 border border-border">
              <p className="text-xs text-muted-foreground mb-2">{note.date}</p>
              <p className="text-foreground">{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
