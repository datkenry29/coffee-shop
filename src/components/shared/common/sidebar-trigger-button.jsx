import {useSidebar} from "@/components/ui/sidebar";
import {MenuIcon} from "lucide-react";
import {Button} from "../../ui/button";

export default function SidebarTriggerButton() {
  const {toggleSidebar} = useSidebar();
  return (
    <Button
      onClick={toggleSidebar}
      variant="ghost"
      size="icon"
      className=" h-8 w-8"
    >
      <MenuIcon className=" h-6 w-6" />
    </Button>
  );
}
