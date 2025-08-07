
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUpIcon, TrendingDownIcon, MinusIcon, TargetIcon } from "lucide-react";
import { B2BLeadQualityData } from "@/types/analytics";

interface B2BLeadQualityChartProps {
  data: B2BLeadQualityData[];
  title: string;
}

const COLORS = ['#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE'];

export default function B2BLeadQualityChart({ data, title }: B2BLeadQualityChartProps) {
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

  const totalVolume = data.reduce((sum, item) => sum + item.volume, 0);

  const pieData = data.map((item, index) => ({
    name: item.scoreRange,
    value: item.volume,
    percentage: ((item.volume / totalVolume) * 100).toFixed(1),
    fill: COLORS[index % COLORS.length]
  }));

  const renderTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      const data = props.payload[0];
      return (
        <div className="bg-[#1A0B2E] border border-purple-500/20 rounded-lg p-3 shadow-lg">
          <p className="text-purple-200 font-medium">Score Range: {data.payload.scoreRange}</p>
          <p className="text-purple-300">Volume: {data.payload.volume}</p>
          <p className="text-purple-300">Conversion Rate: {data.payload.conversionRate}%</p>
          <p className="text-purple-300">Avg Score: {data.payload.avgScore}</p>
        </div>
      );
    }
    return null;
  };

  const renderPieTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      const data = props.payload[0];
      return (
        <div className="bg-[#1A0B2E] border border-purple-500/20 rounded-lg p-3 shadow-lg">
          <p className="text-purple-200 font-medium">{data.payload.name}</p>
          <p className="text-purple-300">Volume: {data.value}</p>
          <p className="text-purple-300">Percentage: {data.payload.percentage}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="bg-[#1A0B2E]/80 border-[#6D28D9]/20">
      <CardHeader>
        <CardTitle className="text-purple-200 flex items-center gap-2">
          <TargetIcon className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Volume Distribution Chart */}
          <div>
            <h3 className="text-lg font-semibold text-purple-200 mb-4">Volume Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={renderPieTooltip} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {pieData.map((entry, index) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: entry.fill }}
                  />
                  <span className="text-sm text-purple-300">{entry.name}</span>
                  <span className="text-sm text-purple-300/60">({entry.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conversion Rate Chart */}
          <div>
            <h3 className="text-lg font-semibold text-purple-200 mb-4">Conversion Rates</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#6D28D9" opacity={0.3} />
                  <XAxis 
                    dataKey="scoreRange" 
                    tick={{ fill: '#C4B5FD', fontSize: 12 }}
                    axisLine={{ stroke: '#6D28D9' }}
                  />
                  <YAxis 
                    tick={{ fill: '#C4B5FD', fontSize: 12 }}
                    axisLine={{ stroke: '#6D28D9' }}
                  />
                  <Tooltip content={renderTooltip} />
                  <Bar dataKey="conversionRate" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {data.map((item, index) => (
            <div key={item.scoreRange} className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-300 font-medium">{item.scoreRange}</span>
                <Badge 
                  variant="outline" 
                  className="border-purple-500/30 text-purple-200"
                >
                  {item.volume}
                </Badge>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-300/80">Avg Score</span>
                  <span className="text-sm text-purple-200">{item.avgScore}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-300/80">Conv Rate</span>
                  <span className="text-sm text-purple-200">{item.conversionRate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-300/80">Trend</span>
                  <div className="flex items-center gap-1">
                    {getTrendIcon(item.trend)}
                    <span className={`text-xs ${getTrendColor(item.trend)}`}>
                      {Math.abs(item.trend)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
