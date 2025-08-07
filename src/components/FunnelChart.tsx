
import { ResponsiveFunnel } from '@nivo/funnel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDownIcon } from "lucide-react";

const CustomTooltip = ({ datum }: any) => {
  if (!datum) return null;
  
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-lg">
      <div className="text-white font-medium">{datum.id}</div>
      <div className="text-purple-300 text-sm">
        Value: <span className="font-semibold">{datum.value?.toLocaleString()}</span>
      </div>
      <div className="text-purple-300 text-sm">
        Percentage: <span className="font-semibold">{datum.formattedValue}</span>
      </div>
    </div>
  );
};

const FunnelChart = () => {
  const funnelData = [
    { id: 'Impressions', value: 15420, label: 'Impressions' },
    { id: 'Clicks', value: 8750, label: 'Clicks' },
    { id: 'Conversions', value: 3200, label: 'Conversions' },
    { id: 'Sales', value: 1250, label: 'Sales' }
  ];

  return (
    <Card className="glass-effect metric-card-hover">
      <CardHeader className="pb-3">
        <CardTitle className="text-purple-100 flex items-center gap-2 text-lg">
          <TrendingDownIcon className="w-5 h-5 text-purple-400" />
          Conversion Funnel
        </CardTitle>
        <CardDescription className="text-purple-300 text-sm">
          Track funnel conversion rates
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-48 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg p-3 border border-purple-500/20">
          <ResponsiveFunnel
            data={funnelData}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            valueFormat=" >-.0f"
            colors={['#8B5CF6', '#A855F7', '#C084FC', '#DDD6FE']}
            borderWidth={1}
            labelColor={{ from: 'color', modifiers: [['darker', 3]] }}
            beforeSeparatorLength={60}
            beforeSeparatorOffset={10}
            afterSeparatorLength={60}
            afterSeparatorOffset={10}
            currentPartSizeExtension={5}
            currentBorderWidth={20}
            motionConfig="wobbly"
            tooltip={CustomTooltip}
            theme={{
              background: 'transparent',
              text: {
                fontSize: 10,
                fill: '#E5E7EB',
              },
              tooltip: {
                container: {
                  background: '#1F2937',
                  color: '#F3F4F6',
                  fontSize: '12px',
                  borderRadius: '6px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                },
              },
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelChart;
