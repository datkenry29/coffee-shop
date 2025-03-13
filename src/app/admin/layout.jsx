import ReduxProvider from "@/components/shared/common/redux-provider";
export default function AdminLayout({children}) {
  return <ReduxProvider isAdmin={true}>{children}</ReduxProvider>;
}
