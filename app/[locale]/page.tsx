"use client";
import React, { useEffect } from "react";
import { Home } from "@/components/Home/Home";
import Notification from "@/components/Notification/Notification";

export default function HomePage() {
  return (
    <section className="container rid items-center gap-6">
      <Home />
      <Notification />
    </section>
  );
}
