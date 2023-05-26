"use client";

import { ReactNode } from "react";

import { ThemeProvider } from "@wits/next-themes";

// https://github.com/pacocoursey/next-themes/issues/161#issuecomment-1399412698
export default function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
