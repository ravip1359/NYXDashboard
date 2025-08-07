/**
 * @author Healium Digital
 * Region Table Component
 * Displays detailed regional performance metrics in a tabular format
 */

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FilterIcon } from "lucide-react";
import { useState } from "react";

interface RegionData {
  region: string;
  impressions: number;
  clicks: number;
  conversions: number;
  distribution: number;
  change: number;
  roi: number; // Added for sorting
  spend: number; // Added for sorting
  customers: number; // Added for sorting
}

const regionData: RegionData[] = [
  {
    region: "North America",
    impressions: 450000,
    clicks: 85000,
    conversions: 12500,
    distribution: 0.4,
    change: 15.3,
    roi: 25,
    spend: 100000,
    customers: 5000
  },
  {
    region: "Europe",
    impressions: 320000,
    clicks: 62000,
    conversions: 8750,
    distribution: 0.3,
    change: 12.7,
    roi: 22,
    spend: 80000,
    customers: 3500
  },
  {
    region: "Asia Pacific",
    impressions: 280000,
    clicks: 55000,
    conversions: 7200,
    distribution: 0.2,
    change: 10.5,
    roi: 18,
    spend: 60000,
    customers: 3000
  },
  {
    region: "Latin America",
    impressions: 180000,
    clicks: 35000,
    conversions: 4500,
    distribution: 0.1,
    change: 8.2,
    roi: 15,
    spend: 40000,
    customers: 2000
  },
  {
    region: "Middle East",
    impressions: 25000,
    clicks: 4000,
    conversions: 800,
    distribution: 0.06,
    change: 5.1,
    roi: 10,
    spend: 10000,
    customers: 500
  },
  {
    region: "Middle East",
    impressions: 120000,
    clicks: 22000,
    conversions: 3200,
    distribution: 0.05,
    change: 5.1,
    roi: 12,
    spend: 30000,
    customers: 1500
  },
];

const formatNumber = (num: number) => {
  return num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num.toString();
};

const formatDistribution = (dist: number) => {
  return `${(dist * 100).toFixed(1)}%`;
};

interface RegionTableProps {
  data: RegionData[];
  title: string;
}

export function RegionTable({ data, title }: RegionTableProps) {
  const [sortBy, setSortBy] = useState<'roi' | 'spend' | 'conversions' | 'customers'>('roi');

  const sortedData = [...data].sort((a, b) => {
    switch (sortBy) {
      case 'roi':
        return b.roi - a.roi;
      case 'spend':
        return b.spend - a.spend;
      case 'conversions':
        return b.conversions - a.conversions;
      case 'customers':
        return b.customers - a.customers;
      default:
        return b.roi - a.roi;
    }
  });

  return (
    <div className="w-full h-[400px] overflow-y-auto rounded-lg border border-[#4A148C] bg-[#2D1B4B]">
        <Table>
          <TableHeader className="sticky top-0 bg-[#2D1B4B] z-10">
            <TableRow className="hover:bg-[#4A148C]/50 border-[#4A148C]">
              <TableHead className="text-gray-300 w-[150px]">Region</TableHead>
              <TableHead className="text-gray-300 text-right w-[100px]">Impressions</TableHead>
              <TableHead className="text-gray-300 text-right w-[100px]">Clicks</TableHead>
              <TableHead className="text-gray-300 text-right w-[100px]">Conversions</TableHead>
              <TableHead className="text-gray-300 text-right w-[120px]">Distribution</TableHead>
              <TableHead className="text-gray-300 text-right w-[80px]">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.slice(0, 6).map((region, index) => (
              <TableRow key={index} className="hover:bg-[#4A148C]/50 border-[#4A148C]">
                <TableCell className="font-medium text-white py-2">
                  {region.region}
                </TableCell>
                <TableCell className="text-right text-white py-2">
                  {formatNumber(region.impressions)}
                </TableCell>
                <TableCell className="text-right text-white py-2">
                  {formatNumber(region.clicks)}
                </TableCell>
                <TableCell className="text-right text-white py-2">
                  {formatNumber(region.conversions)}
                </TableCell>
                <TableCell className="text-right text-white py-2">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-16 bg-[#1A0A2B] h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#4A148C]"
                        style={{ width: `${region.distribution * 100}%` }}
                      />
                    </div>
                    <span className="text-xs">{formatDistribution(region.distribution)}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right py-2">
                  <span className={`inline-flex items-center gap-1 text-xs ${
                    region.change >= 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {region.change >= 0 ? (
                      <ArrowUpIcon className="w-3 h-3" />
                    ) : (
                      <ArrowDownIcon className="w-3 h-3" />
                    )}
                    {Math.abs(region.change)}%
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>
  );
}

export { regionData };

export function RegionTableWrapper() {
  return (
    <RegionTable data={regionData} title="Top Performing States" />
  );
}