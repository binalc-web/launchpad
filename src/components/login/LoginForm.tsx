"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Login form - pixel-perfect match to Figma/HTML
 * Main Wrapper: 450×451px, border-radius 12px, padding 32px, gap 24px
 */
export function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login
  };

  return (
    <Card className="w-full max-w-[450px] rounded-[12px] border border-border bg-background p-8 flex flex-col gap-6 shrink-0">
      <form onSubmit={handleSubmit}>
        <CardContent className="p-0 flex flex-col gap-6">
        {/* Content Wrapper - Welcome */}
        <div className="flex flex-col gap-2 w-full max-w-[386px]">
          <h1 className="text-xl font-semibold text-foreground text-center">
            Welcome back!
          </h1>
          <p className="text-sm text-muted-text text-center">
            Enter your email and password to sign in.
          </p>
        </div>

        {/* Fields Wrapper - 386px, gap 24px */}
        <div className="flex flex-col gap-6 w-full max-w-[386px]">
          {/* Email - gap 4px between label and input */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="email" className="text-sm text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              className="w-full h-9 rounded-lg px-3 py-[7.5px]"
              autoComplete="email"
            />
          </div>

          {/* Password - with eye toggle */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="password" className="text-sm text-foreground">
              Password
            </Label>
            <div className="relative w-full">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full h-9 rounded-lg px-3 py-[7.5px] pr-10"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded p-0.5"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Switch + Forgot Password - 386×24 */}
        <div className="flex flex-row justify-between items-center w-full max-w-[386px]">
          <div className="flex flex-row items-center gap-2">
            <Switch
              checked={rememberMe}
              onCheckedChange={setRememberMe}
              aria-label="Remember me"
            />
            <Label
              htmlFor="remember"
              className="text-sm text-foreground cursor-pointer"
              onClick={() => setRememberMe(!rememberMe)}
            >
              Remember me
            </Label>
          </div>
          <a
            href="#"
            className="text-sm text-brand-secondary hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        {/* Login Button - 386×36, rounded 8px */}
        <Button
          type="submit"
          variant="brand"
          className="w-full max-w-[386px] h-9 rounded-[8px] px-4 py-[7.5px]"
        >
          Login
        </Button>

        {/* Card Footer - Need help? Contact Us */}
        <div className="flex justify-center items-center w-full max-w-[386px] h-8">
          <span className="text-sm text-muted-text">Need help? </span>
          <a
            href="#"
            className="text-sm text-brand-secondary hover:underline ml-1"
          >
            Contact Us
          </a>
        </div>
      </CardContent>
      </form>
    </Card>
  );
}
