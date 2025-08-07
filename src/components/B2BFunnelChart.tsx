
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FunnelChart, Funnel, LabelList, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { TrendingUpIcon, TrendingDownIcon, MinusIcon } from "lucide-react";
import { B2BFunnelData } from "@/types/analytics";

interface B2BFunnelChartProps {
  data: B2BFunnelData[];
  title: string;
}

const COLORS = ['#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE'];

export default function B2BFunnelChart({ data, title }: B2BFunnelChartProps) {
  const [selectedCampaign, setSelectedCampaign] = useState(data[0]?.campaign || '');

  const selectedData = data.find(d => d.campaign === selectedCampaign) || data[0];

  const funnelData = selectedData ? [
    { name: 'MQL', value: selectedData.stages.mql.count, fill: COLORS[0] },
    { name: 'SQL', value: selectedData.stages.sql.count, fill: COLORS[1] },
    { name: 'Opportunity', value: selectedData.stages.opportunity.count, fill: COLORS[2] },
    { name: 'Closed Won', value: selectedData.stages.closedWon.count, fill: COLORS[3] }
  ] : [];

  const renderTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      const data = props.payload[0];
      return (
        <div className="bg-[#1A0B2E] border border-purple-500/20 rounded-lg p-3 shadow-lg">
          <p className="text-purple-200 font-medium">{data.payload.name}</p>
          <p className="text-purple-300">Count: {data.value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="bg-[#1A0B2E]/80 border-[#6D28D9]/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-purple-200">{title}</CardTitle>
          <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
            <SelectTrigger className="w-[200px] bg-purple-500/10 border-purple-500/20 text-purple-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1A0B2E] border-purple-500/20">
              {data.map((campaign) => (
                <SelectItem 
                  key={campaign.campaign} 
                  value={campaign.campaign}
                  className="text-purple-300 focus:bg-purple-500/10"
                >
                  {campaign.campaign}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <FunnelChart>
                <Tooltip content={renderTooltip} />
                <Funnel
                  dataKey="value"
                  data={funnelData}
                  isAnimationActive
                >
                  <LabelList position="center" fill="#C4B5FD" fontSize={12} />
                  {funnelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Funnel>
              </FunnelChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-purple-200 mb-2">Conversion Rates</h3>
              <div className="text-2xl font-bold text-purple-200">
                {selectedData?.overallConversionRate}%
              </div>
              <p className="text-sm text-purple-300/80">Overall Conversion</p>
            </div>

            <div className="space-y-3">
              {selectedData && Object.entries(selectedData.stages).map(([stage, stageData], index) => (
                <div key={stage} className="flex items-center justify-between p-3 rounded-lg bg-purple-500/10">
                  <div>
                    <span className="text-purple-300 capitalize">{stage.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <div className="text-sm text-purple-300/60">{stageData.count} leads</div>
                  </div>
                  <div className="text-right">
                    <div className="text-purple-200 font-semibold">{stageData.conversionRate}%</div>
                    <div className="text-sm text-purple-300/60">${stageData.value.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-purple-500/20">
              <div className="flex items-center justify-between">
                <span className="text-purple-300 font-medium">Total Pipeline Value</span>
                <span className="text-xl font-bold text-purple-200">
                  ${selectedData?.totalValue.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
