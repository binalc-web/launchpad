"use client";

import { SuperAdminSidebar } from "@/components/sidebar";
import { ViewContactDetails } from "@/components/view-user-details/ViewContactDetails";

/**
 * User Directory / View Details - Added Contact
 * Full page layout: 1440×900, sidebar 280px + main content 1160px
 * data-node-id="591-1530735" - Page container
 */
export default function ViewContactDetailsPage() {
  return (
    <div
      data-node-id="591-1530735"
      className="flex w-full min-h-screen bg-[#f8f7fb] flex-row"
    >
      {/* Super Admin Sidebar - 280×900, data-node-id 591-1530736 */}
      <SuperAdminSidebar />

      {/* Main content area - 1160px */}
      <main className="flex flex-1 min-w-0 min-h-[664px] flex-col">
        <ViewContactDetails />
      </main>
    </div>
  );
}
