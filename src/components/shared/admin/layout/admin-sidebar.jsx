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

export default function AdminSidebar() {
  const {open} = useSidebar();

  const selectMenu = (sidebarItem) => {};

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div
              className={`flex items-center justify-between transition-all duration-300 ease-linear ${
                open ? "translate-x-0" : "-translate-x-[108px]"
              }`}
            >
              <div
                className={`flex items-center gap-4 duration-100 ${
                  open ? "visible" : "invisible"
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
                    <Link href={item.url} onClick={() => selectMenu(item)}>
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
