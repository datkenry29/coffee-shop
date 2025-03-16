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
export default function StatisticBox({title, description}) {
  return (
    <Card className="flex-1 py-4">
      <CardHeader>
        <CardTitle className="font-bold text-lg">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground uppercase">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DashboardBarChart />
      </CardContent>
    </Card>
  );
}
