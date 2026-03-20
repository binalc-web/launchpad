"use client";

import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Trash2,
  Edit,
  Bell,
  User,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SuperAdminSidebar } from "@/components/sidebar";
import { ROUTES } from "@/const/routes";

export default function ViewUserDetailsPage() {
  return (
    <div
      data-node-id="591-1530735"
      data-name="User Directory/ View Details - Added Contact"
      className="min-h-screen flex flex-row bg-background"
    >
      <SuperAdminSidebar />

      {/* Main Wrapper */}
      <div
        data-node-id="591-1530737"
        className="flex-1 flex flex-col min-w-0 min-h-screen"
      >
        {/* Header */}
        <header
          data-node-id="591-1530738"
          className="flex-none w-full h-[60px] border-b border-border bg-background flex flex-row items-center px-4 py-3 gap-2"
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
          <div className="ml-auto flex items-center gap-2">
            <div className="w-[37px] h-[36px] rounded-md flex items-center justify-center hover:bg-muted/50">
              <Bell className="w-4 h-4 text-foreground" />
            </div>
            <div className="w-[37px] h-[36px] rounded-md flex items-center justify-center hover:bg-muted/50">
              <User className="w-4 h-4 text-foreground" />
            </div>
            <div className="w-px h-[36px] bg-border" />
            <div className="w-[37px] h-[36px] rounded-md flex items-center justify-center bg-background">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <User className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main
          data-node-id="591-1530739"
          className="w-full flex flex-col items-start px-6 pb-6 gap-6 flex-1 min-h-0 overflow-auto"
        >
          {/* Title Section - Added Contact variant */}
          <div
            data-node-id="591-1530740"
            className="w-full flex flex-row flex-wrap items-end pt-4 gap-4"
          >
            <Button variant="outline" className="w-[87px] h-[36px] shrink-0">
              <ChevronLeft className="w-4 h-4 text-foreground" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <h1 className="text-xl text-foreground">Sarah Davis</h1>
              <Badge className="shrink-0" variant="default">
                CNT-005
              </Badge>
              <Badge className="shrink-0" variant="outline">
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
                <Edit className="w-4 h-4" />
                Edit Contact
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="w-4 h-4" />
                Send Invite
              </Button>
            </div>
          </div>

          {/* Cards Wrapper */}
          <div
            data-node-id="591-1530753"
            className="w-full flex flex-row flex-wrap items-start gap-4 flex-1 min-h-0"
          >
            {/* Basic Info Card - Added Contact fields */}
            <Card
              data-node-id="591-1530754"
              className="w-full max-w-[548px] min-h-[504px] flex flex-col shrink-0 flex-1"
            >
              <CardHeader className="w-full h-[56px] border-b border-border flex items-center">
                <h2 className="text-base text-muted-foreground">Basic Info.</h2>
              </CardHeader>
              <CardContent className="flex flex-col gap-0 flex-1 overflow-auto">
                <div className="flex flex-col gap-4 py-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">
                      Contact ID
                    </span>
                    <span className="text-sm text-foreground">CNT-005</span>
                  </div>
                  <Separator className="w-full" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <span className="inline-flex w-fit px-2 py-1 rounded-md bg-brand-muted text-sm text-brand-secondary">
                      Not Invited
                    </span>
                  </div>
                  <Separator className="w-full" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">
                      Full Name
                    </span>
                    <span className="text-sm text-foreground">Sarah Davis</span>
                  </div>
                  <Separator className="w-full" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">
                      Nickname
                    </span>
                    <span className="text-sm text-foreground">Sarah</span>
                  </div>
                  <Separator className="w-full" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">Email</span>
                    <span className="text-sm text-foreground">
                      sarah.davis@email.com
                    </span>
                  </div>
                  <Separator className="w-full" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">
                      Work Phone No.
                    </span>
                    <span className="text-sm text-foreground">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <Separator className="w-full" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">
                      Cell Phone No.
                    </span>
                    <span className="text-sm text-foreground">
                      +1 (555) 987-6543
                    </span>
                  </div>
                  <Separator className="w-full" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">
                      Time Zone (Personal)
                    </span>
                    <span className="text-sm text-foreground">
                      America/New_York (UTC-5)
                    </span>
                  </div>
                  <Separator className="w-full" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">
                      Created On
                    </span>
                    <span className="text-sm text-foreground">Jan 15, 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right Side Cards */}
            <div
              data-node-id="591-1530702"
              className="w-full max-w-[548px] flex flex-col gap-4 shrink-0 flex-1"
            >
              {/* Corporation & Company Info Card */}
              <Card
                data-node-id="591-1530795"
                className="flex flex-col flex-1 min-h-0"
              >
                <CardHeader className="w-full h-[56px] border-b border-border flex items-center">
                  <h2 className="text-base text-muted-foreground">
                    Corporation & Company Info
                  </h2>
                </CardHeader>
                <CardContent className="flex flex-col gap-0 flex-1 overflow-auto">
                  <div className="flex flex-col gap-4 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-muted-foreground">
                        Corporation
                      </span>
                      <span className="text-sm text-foreground">
                        Acme Corp
                      </span>
                    </div>
                    <Separator className="w-full" />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-muted-foreground">
                        Company
                      </span>
                      <span className="text-sm text-foreground">
                        Acme Industries
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Role & Team Info Card - Added Contact fields */}
              <Card
                data-node-id="591-1530807"
                className="flex flex-col flex-1 min-h-0"
              >
                <CardHeader className="w-full h-[56px] border-b border-border flex items-center">
                  <h2 className="text-base text-muted-foreground">
                    Role & Team Info
                  </h2>
                </CardHeader>
                <CardContent className="flex flex-col gap-0 flex-1 overflow-auto">
                  <div className="flex flex-col gap-4 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-muted-foreground">
                        Category
                      </span>
                      <span className="text-sm text-foreground">Contact</span>
                    </div>
                    <Separator className="w-full" />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-muted-foreground">
                        Role Name
                      </span>
                      <span className="text-sm text-foreground">
                        Senior Developer
                      </span>
                    </div>
                    <Separator className="w-full" />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-muted-foreground">Team</span>
                      <span className="text-sm text-foreground">
                        Product Development
                      </span>
                    </div>
                    <Separator className="w-full" />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-muted-foreground">
                        Team Management
                      </span>
                      <span className="text-sm text-foreground">
                        John Smith
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
