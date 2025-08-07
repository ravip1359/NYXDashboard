
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  BuildingIcon, 
  TrendingUpIcon, 
  TrendingDownIcon, 
  MinusIcon,
  UserIcon,
  ActivityIcon,
  DollarSignIcon,
  ClockIcon
} from "lucide-react";
import { B2BAccountEngagementData } from "@/types/analytics";

interface B2BAccountEngagementProps {
  data: B2BAccountEngagementData[];
  title: string;
}

export default function B2BAccountEngagement({ data, title }: B2BAccountEngagementProps) {
  const [sortBy, setSortBy] = useState<'engagementScore' | 'revenue' | 'lastActivity'>('engagementScore');
  const [filterStatus, setFilterStatus] = useState<'all' | 'Active' | 'At Risk'>('all');

  const filteredData = data.filter(account => 
    filterStatus === 'all' ? true : account.status === filterStatus
  );

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case 'engagementScore':
        return b.engagementScore - a.engagementScore;
      case 'revenue':
        return b.revenue - a.revenue;
      case 'lastActivity':
        return a.lastActivity.localeCompare(b.lastActivity);
      default:
        return 0;
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'At Risk':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    }
  };

  const getEngagementColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getTrendIcon = (trend: number) => {
    if (trend > 0) return <TrendingUpIcon className="h-4 w-4 text-green-400" />;
    if (trend < 0) return <TrendingDownIcon className="h-4 w-4 text-red-400" />;
    return <MinusIcon className="h-4 w-4 text-purple-400" />;
  };

  const getTrendColor = (trend: number) => {
    if (trend > 0) return 'text-green-400';
    if (trend < 0) return 'text-red-400';
    return 'text-purple-400';
  };

  const avgEngagement = data.reduce((sum, account) => sum + account.engagementScore, 0) / data.length;
  const totalRevenue = data.reduce((sum, account) => sum + account.revenue, 0);
  const activeAccounts = data.filter(account => account.status === 'Active').length;
  const atRiskAccounts = data.filter(account => account.status === 'At Risk').length;

  return (
    <Card className="bg-[#1A0B2E]/80 border-[#6D28D9]/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-purple-200 flex items-center gap-2">
            <BuildingIcon className="h-5 w-5" />
            {title}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
              <SelectTrigger className="w-[160px] bg-purple-500/10 border-purple-500/20 text-purple-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1A0B2E] border-purple-500/20">
                <SelectItem value="engagementScore" className="text-purple-300 focus:bg-purple-500/10">
                  Engagement Score
                </SelectItem>
                <SelectItem value="revenue" className="text-purple-300 focus:bg-purple-500/10">
                  Revenue
                </SelectItem>
                <SelectItem value="lastActivity" className="text-purple-300 focus:bg-purple-500/10">
                  Last Activity
                </SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={(value: any) => setFilterStatus(value)}>
              <SelectTrigger className="w-[120px] bg-purple-500/10 border-purple-500/20 text-purple-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1A0B2E] border-purple-500/20">
                <SelectItem value="all" className="text-purple-300 focus:bg-purple-500/10">All</SelectItem>
                <SelectItem value="Active" className="text-purple-300 focus:bg-purple-500/10">Active</SelectItem>
                <SelectItem value="At Risk" className="text-purple-300 focus:bg-purple-500/10">At Risk</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-2">
              <ActivityIcon className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-purple-300">Avg Engagement</span>
            </div>
            <div className="text-xl font-bold text-purple-200">{avgEngagement.toFixed(1)}/10</div>
          </div>
          <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-2">
              <DollarSignIcon className="h-4 w-4 text-green-400" />
              <span className="text-sm text-purple-300">Total Revenue</span>
            </div>
            <div className="text-xl font-bold text-purple-200">${totalRevenue.toLocaleString()}</div>
          </div>
          <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-2">
              <BuildingIcon className="h-4 w-4 text-green-400" />
              <span className="text-sm text-purple-300">Active Accounts</span>
            </div>
            <div className="text-xl font-bold text-purple-200">{activeAccounts}</div>
          </div>
          <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-2">
              <BuildingIcon className="h-4 w-4 text-red-400" />
              <span className="text-sm text-purple-300">At Risk</span>
            </div>
            <div className="text-xl font-bold text-purple-200">{atRiskAccounts}</div>
          </div>
        </div>

        {/* Accounts Table */}
        <div className="rounded-lg border border-purple-500/20 bg-purple-500/5">
          <Table>
            <TableHeader>
              <TableRow className="border-purple-500/20 hover:bg-purple-500/5">
                <TableHead className="text-purple-300">Account</TableHead>
                <TableHead className="text-purple-300">Industry</TableHead>
                <TableHead className="text-purple-300">Engagement</TableHead>
                <TableHead className="text-purple-300">Revenue</TableHead>
                <TableHead className="text-purple-300">Touchpoints</TableHead>
                <TableHead className="text-purple-300">Last Activity</TableHead>
                <TableHead className="text-purple-300">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((account, index) => (
                <TableRow key={index} className="border-purple-500/20 hover:bg-purple-500/5">
                  <TableCell>
                    <div>
                      <div className="font-medium text-purple-200">{account.accountName}</div>
                      <div className="text-sm text-purple-300/60 flex items-center gap-1">
                        <UserIcon className="h-3 w-3" />
                        {account.contactPerson}
                      </div>
                      <div className="text-xs text-purple-300/60">{account.companySize}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-purple-300">{account.industry}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold ${getEngagementColor(account.engagementScore)}`}>
                        {account.engagementScore}/10
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-purple-200">${account.revenue.toLocaleString()}</div>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(account.revenueTrend)}
                        <span className={`text-xs ${getTrendColor(account.revenueTrend)}`}>
                          {Math.abs(account.revenueTrend)}%
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-purple-300">{account.touchpoints}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-purple-300">
                      <ClockIcon className="h-3 w-3" />
                      {account.lastActivity}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(account.status)}>
                      {account.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
