import { CallInsight } from '@/types/user';
import { Check } from 'lucide-react';

interface CallInsightsCardProps {
  insights: CallInsight[];
}

export function CallInsightsCard({ insights }: CallInsightsCardProps) {
  return (
    <div className="stat-card">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Call Insights</h3>
      <div className="space-y-4">
        {insights.map((insight) => (
          <div key={insight.id} className="p-4 rounded-lg bg-secondary/50 border border-border">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-medium text-foreground">{insight.company}</p>
                <p className="text-sm text-muted-foreground">{insight.contact}</p>
              </div>
              <span className="text-sm text-muted-foreground">{insight.duration}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {insight.keyMatches.map((match, index) => (
                <span key={index} className="key-match-tag">
                  🎯 Key Match: {match}
                </span>
              ))}
              {insight.qualified && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20">
                  <Check className="w-3 h-3" /> Qualified Lead
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
