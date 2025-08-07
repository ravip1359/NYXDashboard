
/**
 * @author Healium Digital
 * Main dashboard page component - Executive Dashboard only
 */

import { useState } from 'react';
import ExecutiveMetrics from '@/components/ExecutiveMetrics';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const [dateRange, setDateRange] = useState({
    from: new Date(2024, 0, 1),
    to: new Date(2024, 11, 31),
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0B14] via-[#1A0B2E] to-[#0A0B14]">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-gradient-to-br from-[#1A0B2E]/90 to-[#2D1B69]/80 backdrop-blur-md border-b border-purple-500/20">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 bg-clip-text text-transparent">
                    Analytics Command Center
                  </h1>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-2 text-sm text-purple-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span>Executive Dashboard</span>
                    </div>
                    <span className="text-purple-400">•</span>
                    <span className="text-sm text-purple-300">
                      {dateRange.from.toLocaleDateString()} - {dateRange.to.toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-[#2D1B69]/40 rounded-lg border border-[#6D28D9]/30">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-200 text-sm font-medium">Live Monitoring</span>
                </div>
                
                <Badge className="bg-gradient-to-r from-emerald-600/20 to-emerald-500/20 text-emerald-400 border-emerald-500/30">
                  Performance: Excellent
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Dashboard Content */}
        <div className="p-6">
          <ExecutiveMetrics dateRange={dateRange} />
        </div>
      </div>
    </div>
  );
}
