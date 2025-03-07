import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: "MenuBarIcons\icons8-visual-studio-code.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;  
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
