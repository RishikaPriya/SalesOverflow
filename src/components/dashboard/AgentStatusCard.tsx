import { Agent } from '@/types/user';

interface AgentStatusCardProps {
  agents: Agent[];
}

export function AgentStatusCard({ agents }: AgentStatusCardProps) {
  return (
    <div className="stat-card">
      <h3 className="text-lg font-semibold text-foreground mb-4">Agent Status</h3>
      <div className="space-y-4">
        {agents.map((agent) => (
          <div key={agent.id} className="flex items-center gap-3">
            <div className="avatar-circle bg-primary text-primary-foreground">
              {agent.initials}
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">{agent.name}</p>
              <p className="text-sm text-muted-foreground">
                {agent.callsToday} calls today • Conversion: {agent.conversion}%
              </p>
            </div>
            <span className={`status-badge status-${agent.status}`}>
              {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
