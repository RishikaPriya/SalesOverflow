import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { BarChart3, PieChart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPie, Pie, Cell, Legend } from 'recharts';

const performanceData = [
  { name: 'James M.', calls: 145, conversions: 49 },
  { name: 'Sarah H.', calls: 132, conversions: 42 },
  { name: 'Marcus K.', calls: 128, conversions: 38 },
  { name: 'Lisa P.', calls: 156, conversions: 65 },
  { name: 'Alex R.', calls: 98, conversions: 28 },
];

const leadStatusData = [
  { name: 'Qualified', value: 35, color: 'hsl(142, 71%, 45%)' },
  { name: 'Contacted', value: 28, color: 'hsl(38, 92%, 50%)' },
  { name: 'New', value: 22, color: 'hsl(217, 91%, 60%)' },
  { name: 'Proposal', value: 15, color: 'hsl(280, 65%, 60%)' },
];

const teamData = [
  { name: 'SDR Team', value: 45, color: 'hsl(217, 91%, 60%)' },
  { name: 'Sales Team', value: 55, color: 'hsl(142, 71%, 45%)' },
];

export default function TeamAnalytics() {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-slide-in">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-primary/10">
            <BarChart3 className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Team Analytics</h1>
            <p className="text-muted-foreground">Performance insights across your sales teams</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Performers Bar Chart */}
          <div className="stat-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">Top Performers</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 47%, 18%)" />
                  <XAxis type="number" stroke="hsl(215, 20%, 55%)" />
                  <YAxis dataKey="name" type="category" stroke="hsl(215, 20%, 55%)" width={80} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(222, 47%, 11%)',
                      border: '1px solid hsl(222, 47%, 18%)',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="calls" fill="hsl(217, 91%, 60%)" name="Calls" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="conversions" fill="hsl(142, 71%, 45%)" name="Conversions" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Lead Status Pie Chart */}
          <div className="stat-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">Lead Status Distribution</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPie>
                  <Pie
                    data={leadStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {leadStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(222, 47%, 11%)',
                      border: '1px solid hsl(222, 47%, 18%)',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                </RechartsPie>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Team Distribution Pie Chart */}
          <div className="stat-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">Team Performance Split</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPie>
                  <Pie
                    data={teamData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {teamData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(222, 47%, 11%)',
                      border: '1px solid hsl(222, 47%, 18%)',
                      borderRadius: '8px',
                    }}
                  />
                </RechartsPie>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Weekly Trends */}
          <div className="stat-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">Weekly Call Volume</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { day: 'Mon', sdr: 42, sales: 38 },
                  { day: 'Tue', sdr: 48, sales: 45 },
                  { day: 'Wed', sdr: 56, sales: 52 },
                  { day: 'Thu', sdr: 44, sales: 41 },
                  { day: 'Fri', sdr: 38, sales: 35 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 47%, 18%)" />
                  <XAxis dataKey="day" stroke="hsl(215, 20%, 55%)" />
                  <YAxis stroke="hsl(215, 20%, 55%)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(222, 47%, 11%)',
                      border: '1px solid hsl(222, 47%, 18%)',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="sdr" fill="hsl(217, 91%, 60%)" name="SDR Team" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="sales" fill="hsl(142, 71%, 45%)" name="Sales Team" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
