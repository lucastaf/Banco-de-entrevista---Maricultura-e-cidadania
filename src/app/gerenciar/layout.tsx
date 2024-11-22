import type { Metadata } from "next";
import AppBar from "@/components/ui/appbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return <div>{children}</div>;
}
