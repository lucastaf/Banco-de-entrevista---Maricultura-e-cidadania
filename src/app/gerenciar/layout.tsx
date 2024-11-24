"use client";

import type { Metadata } from "next";
import AppBar from "@/components/ui/appbar";
import { AuthContextProvider, useAuth } from "@/components/auth/authContext";
import LoginCard from "@/components/auth/loginCard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <>
      <AuthContextProvider>
        <AuthLayout>{children}</AuthLayout>
      </AuthContextProvider>
    </>
  );
}

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  const auth = useAuth();
  return auth.isLogged ? children : <LoginCard />;
}
