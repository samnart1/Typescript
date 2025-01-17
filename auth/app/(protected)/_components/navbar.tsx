"use client";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2"></div>
      <p>User Button</p>
    </nav>
  );
}
