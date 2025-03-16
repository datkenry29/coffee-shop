"use client";
import {Pie, PieChart} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {bestSellingProducts} from "@/mock/admin";
const chartConfig = {};
export default function BestSellingChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square h-24 m-0"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={bestSellingProducts}
          dataKey="value"
          nameKey="name"
          innerRadius={30}
          outerRadius={40}
        ></Pie>
      </PieChart>
    </ChartContainer>
  );
}
