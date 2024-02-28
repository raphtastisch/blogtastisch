"use client";

import { useRouter, usePathname } from "@/navigation";
import { useSearchParams } from "next/navigation";
import {} from "next/router";
import { track } from "@vercel/analytics";

export default function TrackRefs() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");

  const router = useRouter();
  const path = usePathname();
  if (ref) {
    track("SourceURL", { source: ref });
    router.push(path);
  }

  return <></>;
}
