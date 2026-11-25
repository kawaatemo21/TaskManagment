import Sidebar from "./Sidebar";
import Header from "./Header";

import { Outlet } from "@tanstack/react-router";

function AppLayout() {
  return (
    <div className="flex min-h-screen bg-[rgba(113, 55, 14, 0.2)]">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
