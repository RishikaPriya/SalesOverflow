import { useAuth } from '@/contexts/AuthContext';
import { StatCard } from '@/components/dashboard/StatCard';
import { AgentStatusCard } from '@/components/dashboard/AgentStatusCard';
import { CallInsightsCard } from '@/components/dashboard/CallInsightsCard';
import { mockAgents, mockCallInsights, managerStats } from '@/data/mockData';
import { Users, Phone, Clock, Target, DollarSign, TrendingUp, Percent } from 'lucide-react';

export default function ManagerDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8 animate-slide-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Welcome back, <span className="text-gradient-primary">{user?.name.split(' ')[0]}</span>
        </h1>
        <p className="text-muted-foreground mt-1">Here's what's happening with your sales today.</p>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Agents"
          value={managerStats.totalAgents}
          icon={Users}
        />
        <StatCard
          label="Calls Today"
          value={managerStats.callsToday}
          icon={Phone}
        />
        <StatCard
          label="Avg. Duration"
          value={managerStats.avgDuration}
          icon={Clock}
        />
        <StatCard
          label="Key Matches"
          value={managerStats.keyMatches}
          icon={Target}
        />
      </div>

      {/* Second Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          label="Total Revenue"
          value={`$${(managerStats.totalRevenue / 1000).toFixed(0)},000`}
          icon={DollarSign}
          trend={{ value: `${managerStats.revenueGrowth}%`, positive: true }}
          variant="success"
        />
        <StatCard
          label="Deals in Pipeline"
          value={managerStats.dealsInPipeline}
          icon={TrendingUp}
        />
        <StatCard
          label="Conversion Rate"
          value={`${managerStats.conversionRate}%`}
          icon={Percent}
          trend={{ value: `${managerStats.conversionGrowth}%`, positive: true }}
          variant="success"
        />
      </div>

      {/* Bottom Row - Agent Status and Call Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AgentStatusCard agents={mockAgents} />
        <CallInsightsCard insights={mockCallInsights} />
      </div>
    </div>
  );
}
