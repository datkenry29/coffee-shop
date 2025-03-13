import {ChevronRight} from "lucide-react";
import {BreadcrumbSeparator} from "../../ui/breadcrumb";

export default function AppBreadcrumbSeparator() {
  return (
    <BreadcrumbSeparator>
      <ChevronRight className="w-5 h-5" />
    </BreadcrumbSeparator>
  );
}
