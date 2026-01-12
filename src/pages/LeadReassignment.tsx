import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { LeadTable } from '@/components/dashboard/LeadTable';
import { mockLeads, mockAgents } from '@/data/mockData';
import { Users } from 'lucide-react';
import { toast } from 'sonner';

export default function LeadReassignment() {
  const [leads, setLeads] = useState(mockLeads);

  const handleReassign = (leadId: string, agentId: string) => {
    const agent = mockAgents.find(a => a.id === agentId);
    if (!agent) return;

    setLeads(prev => 
      prev.map(lead => 
        lead.id === leadId 
          ? { ...lead, assignedTo: agent.name, assignedToId: agentId }
          : lead
      )
    );

    toast.success(`Lead reassigned to ${agent.name}`);
  };

  const handleViewDetails = (leadId: string) => {
    toast.info('Opening lead details...');
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-slide-in">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-primary/10">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Lead Reassignment</h1>
            <p className="text-muted-foreground">Manage and reassign leads to team members</p>
          </div>
        </div>

        {/* Lead Table */}
        <LeadTable 
          leads={leads} 
          agents={mockAgents}
          onReassign={handleReassign}
          onViewDetails={handleViewDetails}
        />
      </div>
    </DashboardLayout>
  );
}
