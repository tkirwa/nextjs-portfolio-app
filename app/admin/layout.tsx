import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      {/* Sidebar and content will be rendered here */}
      {children}
    </div>
  );
}
