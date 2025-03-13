"use client";
import {House} from "lucide-react";
import {Breadcrumb, BreadcrumbList, BreadcrumbItem} from "../../ui/breadcrumb";
import AppBreadcrumbSeparator from "./app-breadcrumb-separator";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function AppBreadcrumb({breadcrumItems}) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);
  const matchBreadcrumbs = breadcrumItems.filter((item) => {
    return pathname.startsWith(item.route);
  });
  console.log(matchBreadcrumbs);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <House className=" w-5 h-5 text-gray-500" />
        </BreadcrumbItem>
        {matchBreadcrumbs.length > 0 && <AppBreadcrumbSeparator />}
        {matchBreadcrumbs.map((item, index) => {
          const isLast = index === matchBreadcrumbs.length - 1;
          return (
            <div key={index} className="flex items-center">
              <BreadcrumbItem>
                {isLast ? (
                  <span className="text-black">{item.label}</span>
                ) : (
                  <Link
                    href={item.route}
                    className="text-gray-500 hover:text-gray-700  hover:underline"
                  >
                    {item.label}
                  </Link>
                )}
              </BreadcrumbItem>
              {!isLast && <AppBreadcrumbSeparator />}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
