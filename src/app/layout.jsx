"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  useEffect(() => {
    import("lightbox2/dist/js/lightbox-plus-jquery.min.js");
  });
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
