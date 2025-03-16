import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Settings,
  Archive,
  Star,
  Warehouse,
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
  {title: "Inventory", icon: Warehouse, url: "/admin/inventory"},
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
