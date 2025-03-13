import StatisticBox from "@/components/shared/admin/dashboard/statistics-box";
import {Card} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div>
      <div className=" flex justify-between">
        <StatisticBox />
        <StatisticBox />
        <StatisticBox />
      </div>
      <div>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}
