import StatisticBox from "@/components/shared/admin/dashboard/statistics-box";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";

import BestSellingChart from "@/components/shared/admin/dashboard/bestselling-chart";
import {bestSellingProducts, recentOrders} from "@/mock/admin";
import RecentOrderTable from "@/components/shared/admin/dashboard/recent-order-table";

export default function DashboardPage() {
  return (
    <div className="flex gap-6">
      <div className=" flex flex-col mb-6 gap-6 flex-1">
        <StatisticBox title="Total Sales" description="This Month" />
        <Card className="flex-1 py-4 min-h-[330px]">
          <CardHeader>
            <CardTitle className=" text-lg font-bold">Best Selling</CardTitle>
            <CardDescription className="text-sm text-muted-foreground uppercase">
              This month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Separator className="mb-2" />
            <div className="flex gap-2 items-center">
              <Label className=" text-lg font-bold">
                {new Intl.NumberFormat("vo-VN").format(
                  bestSellingProducts.reduce(
                    (acc, product) => acc + product.value,
                    0
                  )
                )}
                <span>VND</span>
              </Label>
              <div className="w-4 h-[2px] bg-gray-400"></div>
              <Label className="text-sm text-muted-foreground">
                Total Sales
              </Label>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              {bestSellingProducts.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex gap-1 items-center border-[1px] rounded-2xl px-2 w-fit"
                >
                  <Label className="text-[12px] text-muted-foreground">
                    {item.name}
                    <div className="w-1 h-[1px] bg-gray-400"></div>
                  </Label>
                  <Label className="text-[12px] gap-0.5">
                    {new Intl.NumberFormat("vo-VN").format(item.value)}
                    <span>VND</span>
                  </Label>
                </div>
              ))}
            </div>
            <BestSellingChart />
          </CardContent>
        </Card>
      </div>
      <div className=" flex flex-col gap-6 flex-1/3">
        <div className="flex gap-6">
          <StatisticBox title="Customers" description="This Month" />
          <StatisticBox title="Orders" description="This Month" />
        </div>
        <Card className=" py-4 min-h-[330px]">
          <CardHeader>
            <CardTitle className="flex gap-4 items-center">
              <Label className="font-bold text-lg">Recent Orders</Label>
              <Button
                variant="outline"
                className="rounded-3xl bg-gray-100 w-20 text-gray-600 h-7"
                size="small"
              >
                View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RecentOrderTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
