"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { recordVisit } from "@/lib/firbase";

const VISIT_KEY = "hyperlocal_visit_recorded";

export function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname?.startsWith("/admin")) return;
    if (sessionStorage.getItem(VISIT_KEY)) return;

    sessionStorage.setItem(VISIT_KEY, "1");
    recordVisit();
  }, [pathname]);

  return null;
}
