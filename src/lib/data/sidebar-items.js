import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Settings,
  Archive,
  Star,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/admin/dashboard",
  },
  {
    title: "Products",
    icon: Archive,
    url: "/admin/product",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    url: "/admin/order",
  },
  {
    title: "Customers",
    icon: Users,
    url: "/admin/customer",
  },
  {
    title: "Reviews",
    icon: Star,
    url: "/admin/review",
  },
];
