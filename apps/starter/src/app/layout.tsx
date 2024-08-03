import "~/styles/globals.css";
import { fontSans } from "~/lib/utils/fonts";

import { cn } from "@acme/ui";
import { constructMetadata } from "~/lib/utils/construct-metadata";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
