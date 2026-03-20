"use client";

import Link from "next/link";
import { ChevronRight, Trash2, Send, Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ROUTES } from "@/const/routes";

/**
 * View Details - Added Contact
 * Pixel-perfect implementation from Figma/HTML spec.
 * data-node-id="591-1530735" - Page container 1440×900, bg #f8f7fb
 */
export function ViewContactDetails() {
  return (
    <div
      data-node-id="591-1530737"
      className="flex flex-1 min-w-0 w-full min-h-[664px] flex-col"
    >
        {/* Header - 591-1530738 */}
        <header
          data-node-id="591-1530738"
          className="flex-none w-full h-[60px] border-b border-border bg-background flex flex-row items-center justify-between px-4 py-3 gap-2"
        >
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href={ROUTES.USER_DIRECTORY}
              className="text-primary hover:underline"
            >
              User Directory
            </Link>
            <ChevronRight className="w-4 h-4 text-primary shrink-0" />
            <span className="text-foreground">View User Details</span>
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-[37px] h-[36px] rounded-md flex items-center justify-center hover:bg-muted/50"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4 text-foreground" />
            </button>
            <button
              type="button"
              className="w-[37px] h-[36px] rounded-md flex items-center justify-center hover:bg-muted/50"
              aria-label="Settings"
            >
              <Settings className="w-4 h-4 text-foreground" />
            </button>
            <div className="w-px h-[36px] bg-border" />
            <div className="w-[37px] h-[36px] rounded-md flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <User className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </header>

        {/* Content DIV - 591-1530739 */}
        <div
          data-node-id="591-1530739"
          className="flex flex-1 flex-col items-start px-6 pb-6 gap-6 min-h-0 overflow-auto"
        >
          {/* Title Section - 591-1530740 */}
          <div
            data-node-id="591-1530740"
            className="w-full flex flex-row flex-wrap items-end pt-4 gap-4"
          >
            <Button variant="outline" className="w-[87px] h-[36px] shrink-0">
              <ChevronRight className="w-4 h-4 text-foreground rotate-180" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <h1 className="text-xl text-foreground">Sarah Davis</h1>
              <Badge variant="default" className="shrink-0">
                CNT-005
              </Badge>
              <Badge variant="outline" className="shrink-0">
                Not Invited
              </Badge>
            </div>
            <div
              data-node-id="591-1530657"
              className="ml-auto flex flex-row flex-wrap items-center gap-[10px]"
            >
              <Button
                variant="outline"
                className="border border-destructive text-destructive bg-background hover:bg-destructive/10"
              >
                <Trash2 className="w-4 h-4" />
                Remove
              </Button>
              <Button className="bg-brand-primary text-white hover:bg-brand-primary/90">
                <Send className="w-4 h-4" />
                Send Invite
              </Button>
            </div>
          </div>

          {/* Cards Wrapper - 591-1530753 */}
          <div
            data-node-id="591-1530753"
            className="w-full flex flex-row flex-wrap items-start gap-4 flex-1 min-h-0"
          >
            {/* Basic Info Card */}
            <Card className="w-full max-w-[548px] min-h-[504px] flex flex-col shrink-0 flex-1">
              <CardHeader className="w-full h-[56px] border-b border-border flex items-center">
                <h2 className="text-base text-muted-foreground">Basic Info.</h2>
              </CardHeader>
              <CardContent className="flex flex-col gap-0 flex-1 overflow-auto">
                <div className="flex flex-col gap-4 py-4">
                  <InfoRow label="Contact ID" value="CNT-005" />
                  <Separator className="w-full" />
                  <InfoRow label="Status" value="Not Invited" />
                  <Separator className="w-full" />
                  <InfoRow label="Full Name" value="Sarah Davis" />
                  <Separator className="w-full" />
                  <InfoRow label="Nickname" value="Sarah" />
                  <Separator className="w-full" />
                  <InfoRow label="Email" value="sarah.davis@email.com" />
                  <Separator className="w-full" />
                  <InfoRow label="Work/Cell Phone No." value="+1 (555) 123-4567" />
                  <Separator className="w-full" />
                  <InfoRow label="Time Zone" value="America/New_York (EST)" />
                  <Separator className="w-full" />
                  <InfoRow label="Created On" value="Jan 15, 2024" />
                </div>
              </CardContent>
            </Card>

            {/* Right Column - Frame 123 - 591-1530794 */}
            <div
              data-node-id="591-1530794"
              className="w-full max-w-[548px] flex flex-col gap-4 shrink-0 flex-1"
            >
              {/* Corporation & Company Info Card */}
              <Card className="flex flex-col flex-1 min-h-0">
                <CardHeader className="w-full h-[56px] border-b border-border flex items-center">
                  <h2 className="text-base text-muted-foreground">
                    Corporation & Company Info.
                  </h2>
                </CardHeader>
                <CardContent className="flex flex-col gap-0 flex-1 overflow-auto">
                  <div className="flex flex-col gap-4 py-4">
                    <InfoRow label="Corporation" value="Acme Corp" />
                    <Separator className="w-full" />
                    <InfoRow label="Company" value="Acme Industries" />
                  </div>
                </CardContent>
              </Card>

              {/* Role & Team Info Card */}
              <Card className="flex flex-col flex-1 min-h-0">
                <CardHeader className="w-full h-[56px] border-b border-border flex items-center">
                  <h2 className="text-base text-muted-foreground">
                    Role & Team Info.
                  </h2>
                </CardHeader>
                <CardContent className="flex flex-col gap-0 flex-1 overflow-auto">
                  <div className="flex flex-col gap-4 py-4">
                    <InfoRow label="Category" value="Developer" />
                    <Separator className="w-full" />
                    <InfoRow label="Role Name" value="Senior Developer" />
                    <Separator className="w-full" />
                    <InfoRow label="Team" value="Product Development" />
                    <Separator className="w-full" />
                    <InfoRow label="Team Management" value="John Smith" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm text-foreground">{value}</span>
    </div>
  );
}
