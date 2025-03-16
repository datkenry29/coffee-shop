"use client";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "../../../ui/sidebar";
import Link from "next/link";
import SidebarTriggerButton from "../../common/sidebar-trigger-button";
import {sidebarItems} from "@/lib/data";
import {usePathname} from "next/navigation";

export default function AdminSidebar() {
  const {open} = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className={`flex items-center h-16 justify-end`}>
              <div
                className={`flex items-center gap-4 duration-300 absolute left-0 ease-in-out transform ${
                  open ? " visible opacity-100" : " invisible opacity-0"
                }`}
              >
                <img
                  className="h-16 scale-100"
                  src="/images/admin/logo.png"
                  alt="logo"
                />
                <span className="text-2xl font-bold text-amber-800 whitespace-nowrap">
                  F Coffee
                </span>
              </div>
              <SidebarTriggerButton />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={
                        item.url.startsWith(pathname)
                          ? "bg-gray-200 text-amber-800"
                          : ""
                      }
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
