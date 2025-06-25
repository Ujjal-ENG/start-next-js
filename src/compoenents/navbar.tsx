"use client";

import { UserButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="border-b border-gray-200 bg-white p-4 flex justify-between items-center">
        <h1>Multi Tenant Blog Application</h1>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
