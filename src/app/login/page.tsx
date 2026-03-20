"use client";

import { LoginForm, LoginLogo } from "@/components/login";

/**
 * Login page - pixel-perfect match to Figma/HTML
 * Page: 1440×900, background #f8f7fb
 * Logo: 368×72, centered
 * Card: 450×451, centered
 * Footer: Version 1.0 | Privacy Policy | Terms of Use
 */
export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-background-page flex flex-col items-center relative px-4 py-8 sm:py-[118px]">
      {/* Logo - 368×72 per HTML */}
      <div className="flex justify-center w-full max-w-[368px]">
        <LoginLogo />
      </div>

      {/* Main Wrapper - card, 64px gap from logo */}
      <div className="pt-16 flex justify-center w-full">
        <LoginForm />
      </div>

      {/* Page Footer - space-between per HTML */}
      <div className="mt-auto pt-8 w-full max-w-[450px] flex flex-row justify-between items-center">
        <span className="text-sm text-primary">Version 1.0</span>
        <span className="text-sm text-primary">
          Privacy Policy &nbsp; | &nbsp; Terms of Use
        </span>
      </div>
    </div>
  );
}
