"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // does not work with the intl router, keep it as next router

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="flex flex-col items-center spacey-4 mt-4">
      <h1 className="text-main-700 text-2xl font-semibold ">Not Found</h1>
      <p>Forwarding to Home</p>
    </div>
  );
}
