"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="border-b border-gray-200 bg-white p-4 flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-xl">
            Multi Tenant Blog Application
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <OrganizationSwitcher afterSelectOrganizationUrl={"/org/:slug"} />
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
