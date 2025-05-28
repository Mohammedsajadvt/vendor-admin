import React from 'react';
import SideBar from '@/components/SideBar';
import Navbar from '@/components/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <SideBar/>
      <div className="flex flex-col flex-1 ml-64">
        <Navbar value={"https://picsum.photos/id/237/200/300"}/>
        <main className="flex-1 p-6 bg-[#F8F8FB]">{children}</main>
      </div>
    </div>
  );
}
