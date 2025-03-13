import {SidebarProvider} from "@/components/ui/sidebar";
import AdminSidebar from "@/components/shared/admin/layout/admin-sidebar";
import AdminFooter from "@/components/shared/admin/layout/admin-footer";
import AdminHeader from "@/components/shared/admin/layout/admin-header";

export default function AdminLayout({children}) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <div className="flex flex-col flex-1">
        <AdminHeader />
        <main className="flex-1 p-4">{children}</main>
        <AdminFooter />
      </div>
    </SidebarProvider>
  );
}
