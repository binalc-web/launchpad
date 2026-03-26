"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Trash2, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { SuperAdminSidebar } from "@/components/sidebar";
import { ROUTES } from "@/const/routes";

function VerticalField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-muted-foreground">
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function EditUserDetailsPage() {
  return (
    <div
      data-node-id="591-1530735"
      data-name="User Directory/ Edit User Details - Active Status"
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
            <span className="text-foreground">Edit User Details</span>
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
          {/* Title Section - Edit User Details variant */}
          <div
            data-node-id="591-1530740"
            className="w-full flex flex-row flex-wrap items-end pt-4 gap-4"
          >
            <Link href={ROUTES.VIEW_USER_DETAILS}>
              <Button variant="outline" className="w-[87px] h-[36px] shrink-0">
                <ChevronLeft className="w-4 h-4 text-foreground" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <h1 className="text-xl text-foreground">Jane Smith</h1>
              <Badge className="shrink-0" variant="default">
                USER-001
              </Badge>
              <Badge className="shrink-0" variant="success">
                Active
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
              <Button
                variant="outline"
                className="border border-destructive text-destructive bg-background hover:bg-destructive/10"
              >
                Block User
              </Button>
            </div>
          </div>

          {/* Fields Wrapper */}
          <div
            data-node-id="591-1530845"
            className="w-full max-w-[1112px] flex flex-col gap-6"
          >
            {/* Title */}
            <div data-node-id="591-1530847" className="flex flex-col gap-1">
              <h2 className="text-xl text-foreground">Edit User Details</h2>
              <p className="text-sm text-muted-foreground">
                Update the invited user details as per the requirements.
              </p>
            </div>

            {/* Cards Wrapper */}
            <div
              data-node-id="591-1530850"
              className="w-full flex flex-row flex-wrap items-start gap-4"
            >
              {/* Basic Info Card */}
              <Card
                data-node-id="591-1530851"
                className="w-full max-w-[548px] flex flex-col shrink-0 flex-1"
              >
                <CardHeader className="w-full h-[56px] border-b border-border flex items-center">
                  <h3 className="text-base text-muted-foreground">
                    Basic Info.
                  </h3>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 py-4">
                  <VerticalField label="Status">
                    <Select defaultValue="active">
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="pending">Pending</option>
                    </Select>
                  </VerticalField>
                  <VerticalField label="First Name" required>
                    <Input placeholder="Jane" defaultValue="Jane" />
                  </VerticalField>
                  <VerticalField label="Last Name" required>
                    <Input placeholder="Smith" defaultValue="Smith" />
                  </VerticalField>
                  <VerticalField label="Nickname">
                    <Input placeholder="Jane" />
                  </VerticalField>
                  <VerticalField label="Email">
                    <Input
                      type="email"
                      placeholder="jane.smith@email.com"
                      defaultValue="jane.smith@email.com"
                    />
                  </VerticalField>
                  <VerticalField label="Work Phone No.">
                    <Input placeholder="+1 (555) 123-4567" />
                  </VerticalField>
                  <VerticalField label="Cell Phone No.">
                    <Input placeholder="+1 (555) 987-6543" />
                  </VerticalField>
                  <VerticalField label="Time Zone (Personal)">
                    <Select defaultValue="america-new-york">
                      <option value="america-new-york">
                        America/New_York (UTC-5)
                      </option>
                      <option value="america-los-angeles">
                        America/Los_Angeles (UTC-8)
                      </option>
                      <option value="europe-london">
                        Europe/London (UTC+0)
                      </option>
                    </Select>
                  </VerticalField>
                </CardContent>
              </Card>

              {/* Right Side Cards */}
              <div
                data-node-id="591-1530702"
                className="w-full max-w-[548px] flex flex-col gap-4 shrink-0 flex-1"
              >
                {/* Corporation & Company Info Card */}
                <Card
                  data-node-id="591-1530871"
                  className="flex flex-col flex-1 min-h-0"
                >
                  <CardHeader className="w-full h-[56px] border-b border-border flex items-center">
                    <h3 className="text-base text-muted-foreground">
                      Corporation & Company Info.
                    </h3>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 py-4">
                    <VerticalField label="Corporation">
                      <Select defaultValue="acme-corp">
                        <option value="acme-corp">Acme Corp</option>
                        <option value="other">Other</option>
                      </Select>
                    </VerticalField>
                    <VerticalField label="Company">
                      <Select defaultValue="acme-industries">
                        <option value="acme-industries">
                          Acme Industries
                        </option>
                        <option value="other">Other</option>
                      </Select>
                    </VerticalField>
                  </CardContent>
                </Card>

                {/* Role & Team Info Card */}
                <Card
                  data-node-id="591-1530878"
                  className="flex flex-col flex-1 min-h-0"
                >
                  <CardHeader className="w-full h-[56px] border-b border-border flex items-center">
                    <h3 className="text-base text-muted-foreground">
                      Role & Team Info.
                    </h3>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 py-4">
                    <VerticalField label="Category">
                      <Select defaultValue="user">
                        <option value="user">User</option>
                        <option value="contact">Contact</option>
                      </Select>
                    </VerticalField>
                    <VerticalField label="Role Name">
                      <Select defaultValue="senior-developer">
                        <option value="senior-developer">
                          Senior Developer
                        </option>
                        <option value="other">Other</option>
                      </Select>
                    </VerticalField>
                    <VerticalField label="Team">
                      <Select defaultValue="product-development">
                        <option value="product-development">
                          Product Development
                        </option>
                        <option value="other">Other</option>
                      </Select>
                    </VerticalField>
                    <VerticalField label="Team Manager">
                      <Select defaultValue="john-smith">
                        <option value="john-smith">John Smith</option>
                        <option value="other">Other</option>
                      </Select>
                    </VerticalField>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              data-node-id="Btns Wrapper"
              className="w-full h-[76px] flex flex-row items-center justify-end gap-3 pt-4"
            >
              <Button variant="outline" className="min-w-[87px] h-[36px]">
                Cancel
              </Button>
              <Button className="min-w-[140px] h-[36px] bg-primary text-primary-foreground hover:bg-primary/90">
                Save & Update
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
