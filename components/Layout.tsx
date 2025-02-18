import ActivityBar from "./ActivityBar";
import FileExplorer from "./FileExplorer";
import FileTab from "./FileTab";
import Footer from "./Footer";
import MenuBar from "./MenuBar";
import React from "react";

export default function Layout({ children } : {children: React.ReactNode}) {
  return (
    <div className="flex flex-col h-screen">
      <MenuBar />
      <div className="flex flex-row h-full  overflow-hidden">
        <ActivityBar />
        <FileExplorer />
        <div className="w-full">
          <FileTab />
          <div className="bg-dark2 h-full overflow-y-auto text-white p-4">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
