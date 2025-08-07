
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
        

        {/* Executive Dashboard Content */}
        <div className="p-6">
          <ExecutiveMetrics dateRange={dateRange} />
        </div>
      </div>
    </div>
  );
}
