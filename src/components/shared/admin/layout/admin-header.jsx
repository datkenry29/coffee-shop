import {adminBreadcrumItems} from "@/lib/data";
import AppBreadcrumb from "../../common/app-breadcrumb";

export default function AdminHeader() {
  return (
    <header className=" m-2 p-2 h-20 flex items-center">
      <AppBreadcrumb breadcrumItems={adminBreadcrumItems} />
    </header>
  );
}
