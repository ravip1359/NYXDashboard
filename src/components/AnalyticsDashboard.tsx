
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DollarSignIcon, 
  UsersIcon, 
  TargetIcon, 
  TrendingUpIcon,
  TrendingDownIcon,
  RefreshCwIcon
} from "lucide-react";

interface AnalyticsDashboardProps {
  dateRange: {
    from: Date;
    to: Date;
  };
  viewMode: 'b2c' | 'b2b';
}

export default function AnalyticsDashboard({ dateRange, viewMode }: AnalyticsDashboardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const metrics = viewMode === 'b2b' ? [
    { label: 'Total Spend', value: '$125,000', change: 12.5, trend: 'up', icon: DollarSignIcon },
    { label: 'Marketing Qualified Leads', value: '1,250', change: 8.3, trend: 'up', icon: UsersIcon },
    { label: 'Cost per Lead', value: '$100', change: -3.2, trend: 'down', icon: TargetIcon },
    { label: 'ROI', value: '680%', change: 25.3, trend: 'up', icon: TrendingUpIcon }
  ] : [
    { label: 'Total Spend', value: '$89,500', change: 15.2, trend: 'up', icon: DollarSignIcon },
    { label: 'Conversions', value: '2,847', change: 12.8, trend: 'up', icon: UsersIcon },
    { label: 'CAC', value: '$31.45', change: -8.7, trend: 'down', icon: TargetIcon },
    { label: 'ROI', value: '425%', change: 18.5, trend: 'up', icon: TrendingUpIcon }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-purple-200">
            {viewMode === 'b2b' ? 'B2B Campaign Analytics' : 'B2C Campaign Analytics'}
          </h2>
          <p className="text-purple-300/80">
            Performance overview and key metrics
          </p>
        </div>
        <Button
          onClick={handleRefresh}
          disabled={isLoading}
          variant="outline"
          size="sm"
          className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
        >
          <RefreshCwIcon className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-[#1A0B2E]/80 border-[#6D28D9]/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300/80 text-sm">{metric.label}</p>
                  <p className="text-2xl font-bold text-purple-200">{metric.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {metric.trend === 'up' ? (
                      <TrendingUpIcon className="h-4 w-4 text-green-400" />
                    ) : (
                      <TrendingDownIcon className="h-4 w-4 text-red-400" />
                    )}
                    <span className={`text-sm ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                      {Math.abs(metric.change)}%
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-purple-500/20">
                  <metric.icon className="h-6 w-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1A0B2E]/80 border-[#6D28D9]/20">
          <CardHeader>
            <CardTitle className="text-purple-200">Platform Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Google Ads', 'Meta Ads', 'LinkedIn', 'Email Marketing'].map((platform, index) => (
                <div key={platform} className="flex items-center justify-between p-3 rounded-lg bg-purple-500/10">
                  <span className="text-purple-300">{platform}</span>
                  <Badge variant="outline" className="border-purple-500/30 text-purple-200">
                    {Math.floor(Math.random() * 500 + 100)} {viewMode === 'b2b' ? 'leads' : 'conversions'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1A0B2E]/80 border-[#6D28D9]/20">
          <CardHeader>
            <CardTitle className="text-purple-200">Campaign Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Q4 Holiday Campaign', 'Brand Awareness', 'Lead Generation', 'Retargeting'].map((campaign, index) => (
                <div key={campaign} className="flex items-center justify-between p-3 rounded-lg bg-purple-500/10">
                  <span className="text-purple-300">{campaign}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-200">${Math.floor(Math.random() * 50000 + 10000)}</span>
                    <TrendingUpIcon className="h-4 w-4 text-green-400" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
