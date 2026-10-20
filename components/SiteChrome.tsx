
"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileOrderBar from "@/components/MobileOrderBar";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isEngage =
    pathname === "/engage" ||
    pathname.startsWith("/engage/");

  const isPromo =
    pathname === "/promo" ||
    pathname.startsWith("/promo/");

  if (isEngage || isPromo) {
    return (
      <main className="min-h-screen">
        {children}
      </main>
    );
  }

  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <MobileOrderBar />
    </>
  );
}
