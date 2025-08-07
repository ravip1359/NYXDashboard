
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  AlertTriangleIcon, 
  TrendingDownIcon,
  ClockIcon,
  DollarSignIcon,
  CheckCircleIcon,
  XCircleIcon,
  AlertCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "lucide-react";
import { B2BRiskAlert } from "@/types/analytics";

interface B2BRiskAlertsProps {
  data: B2BRiskAlert[];
  title: string;
}

export default function B2BRiskAlerts({ data, title }: B2BRiskAlertsProps) {
  const [filterSeverity, setFilterSeverity] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'resolved'>('all');
  const [expandedAlert, setExpandedAlert] = useState<number | null>(null);

  const filteredData = data.filter(alert => {
    const severityMatch = filterSeverity === 'all' || alert.severity === filterSeverity;
    const statusMatch = filterStatus === 'all' || alert.status === filterStatus;
    return severityMatch && statusMatch;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'resolved':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return <XCircleIcon className="h-4 w-4 text-red-400" />;
      case 'medium':
        return <AlertCircleIcon className="h-4 w-4 text-yellow-400" />;
      case 'low':
        return <AlertTriangleIcon className="h-4 w-4 text-blue-400" />;
      default:
        return <AlertTriangleIcon className="h-4 w-4 text-purple-400" />;
    }
  };

  const activeAlerts = data.filter(alert => alert.status === 'active').length;
  const resolvedAlerts = data.filter(alert => alert.status === 'resolved').length;
  const totalImpact = data.reduce((sum, alert) => sum + alert.impact, 0);
  const avgResponseTime = data.reduce((sum, alert) => sum + alert.responseTime, 0) / data.length;

  return (
    <Card className="bg-[#1A0B2E]/80 border-[#6D28D9]/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-purple-200 flex items-center gap-2">
            <AlertTriangleIcon className="h-5 w-5" />
            {title}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Select value={filterSeverity} onValueChange={(value: any) => setFilterSeverity(value)}>
              <SelectTrigger className="w-[120px] bg-purple-500/10 border-purple-500/20 text-purple-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1A0B2E] border-purple-500/20">
                <SelectItem value="all" className="text-purple-300 focus:bg-purple-500/10">All Severity</SelectItem>
                <SelectItem value="high" className="text-purple-300 focus:bg-purple-500/10">High</SelectItem>
                <SelectItem value="medium" className="text-purple-300 focus:bg-purple-500/10">Medium</SelectItem>
                <SelectItem value="low" className="text-purple-300 focus:bg-purple-500/10">Low</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={(value: any) => setFilterStatus(value)}>
              <SelectTrigger className="w-[120px] bg-purple-500/10 border-purple-500/20 text-purple-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1A0B2E] border-purple-500/20">
                <SelectItem value="all" className="text-purple-300 focus:bg-purple-500/10">All Status</SelectItem>
                <SelectItem value="active" className="text-purple-300 focus:bg-purple-500/10">Active</SelectItem>
                <SelectItem value="resolved" className="text-purple-300 focus:bg-purple-500/10">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <div className="flex items-center gap-2 mb-2">
              <XCircleIcon className="h-4 w-4 text-red-400" />
              <span className="text-sm text-purple-300">Active Alerts</span>
            </div>
            <div className="text-xl font-bold text-red-400">{activeAlerts}</div>
          </div>
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircleIcon className="h-4 w-4 text-green-400" />
              <span className="text-sm text-purple-300">Resolved</span>
            </div>
            <div className="text-xl font-bold text-green-400">{resolvedAlerts}</div>
          </div>
          <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-2">
              <DollarSignIcon className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-purple-300">Total Impact</span>
            </div>
            <div className="text-xl font-bold text-purple-200">${totalImpact.toLocaleString()}</div>
          </div>
          <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-2">
              <ClockIcon className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-purple-300">Avg Response</span>
            </div>
            <div className="text-xl font-bold text-purple-200">{avgResponseTime.toFixed(1)}h</div>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {filteredData.map((alert, index) => (
            <div 
              key={index} 
              className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  {getSeverityIcon(alert.severity)}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-purple-200">{alert.title}</h3>
                      <Badge className={getSeverityColor(alert.severity)}>
                        {alert.severity}
                      </Badge>
                      <Badge className={getStatusColor(alert.status)}>
                        {alert.status}
                      </Badge>
                    </div>
                    <p className="text-purple-300/80 mb-3">{alert.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                      <div>
                        <span className="text-xs text-purple-300/60">Impact</span>
                        <div className="text-sm font-medium text-purple-200">${alert.impact.toLocaleString()}</div>
                      </div>
                      <div>
                        <span className="text-xs text-purple-300/60">Response Time</span>
                        <div className="text-sm font-medium text-purple-200">{alert.responseTime}h</div>
                      </div>
                      <div>
                        <span className="text-xs text-purple-300/60">Detected</span>
                        <div className="text-sm font-medium text-purple-200">{alert.detectedAt}</div>
                      </div>
                      <div>
                        <span className="text-xs text-purple-300/60">Trend</span>
                        <div className="flex items-center gap-1">
                          <TrendingDownIcon className="h-3 w-3 text-red-400" />
                          <span className="text-sm font-medium text-red-400">{Math.abs(alert.trend)}%</span>
                        </div>
                      </div>
                    </div>

                    {expandedAlert === index && (
                      <div className="mt-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                        <h4 className="font-medium text-purple-200 mb-2">Recommendations:</h4>
                        <ul className="space-y-1">
                          {alert.recommendations.map((rec, recIndex) => (
                            <li key={recIndex} className="text-sm text-purple-300/80 flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-purple-400" />
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedAlert(expandedAlert === index ? null : index)}
                    className="text-purple-300 hover:text-purple-200 hover:bg-purple-500/10"
                  >
                    {expandedAlert === index ? (
                      <ChevronUpIcon className="h-4 w-4" />
                    ) : (
                      <ChevronDownIcon className="h-4 w-4" />
                    )}
                  </Button>
                  {alert.status === 'active' && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                    >
                      Resolve
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-8">
            <AlertTriangleIcon className="h-12 w-12 text-purple-400/50 mx-auto mb-4" />
            <p className="text-purple-300/60">No alerts match the current filters</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
