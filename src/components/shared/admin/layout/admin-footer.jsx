import {Separator} from "@/components/ui/separator";

export default function AdminFooter() {
  return (
    <footer className="p-4 text-center text-sm text-muted-foreground">
      <Separator className=" mb-4 text-black" />
      <div className="flex justify-center items-center gap-2">
        <img
          src="/images/admin/footer-logo.svg"
          alt="NextJS"
          className=" w-8 h-8"
        />
        <span>© {new Date().getFullYear()} by NextJS</span>
      </div>
    </footer>
  );
}
