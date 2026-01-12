import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  variant?: 'default' | 'success' | 'primary';
}

export function StatCard({ label, value, icon: Icon, trend, variant = 'default' }: StatCardProps) {
  const valueClass = variant === 'success' 
    ? 'text-gradient-success' 
    : variant === 'primary' 
      ? 'text-gradient-primary' 
      : '';

  return (
    <div className="stat-card">
      <div className="flex items-start justify-between mb-3">
        <span className="metric-label">{label}</span>
        <div className="p-2 rounded-lg bg-secondary">
          <Icon className="w-4 h-4 text-primary" />
        </div>
      </div>
      <p className={`metric-value ${valueClass}`}>{value}</p>
      {trend && (
        <p className={`text-sm mt-1 ${trend.positive ? 'metric-positive' : 'text-destructive'}`}>
          {trend.positive ? '+' : ''}{trend.value}
        </p>
      )}
    </div>
  );
}
