"use client";

import {ChartContainer} from "@/components/ui/chart";
import {salesChartData} from "@/mock/admin";
import {Bar, BarChart} from "recharts";

const chartConfig = {
  value: {
    label: "value",
  },
};

export default function DashboardBarChart() {
  return (
    <ChartContainer config={chartConfig} className="w-full h-16">
      <BarChart accessibilityLayer data={salesChartData}>
        <Bar dataKey="value" />
      </BarChart>
    </ChartContainer>
  );
}
