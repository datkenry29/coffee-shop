import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import DashboardBarChart from "./bashboard-bar-chart";
export default function StatisticBox() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">100</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          sdfdssdf
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DashboardBarChart />
      </CardContent>
    </Card>
  );
}
