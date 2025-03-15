import StatisticBox from "@/components/shared/admin/dashboard/statistics-box";
import {Card} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div>
      <div className=" flex justify-between gap-8 mb-8">
        <StatisticBox />
        <StatisticBox />
        <StatisticBox />
      </div>
      <div className=" flex justify-between gap-8">
        <Card className="flex-1"></Card>
        <Card className="flex-1/3"></Card>
      </div>
    </div>
  );
}
