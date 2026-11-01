import type { Metadata } from "next";
import "./globals.css";
import GlobalEffects from "./components/GlobalEffects";

export const metadata: Metadata = {
  title: "Yazan Alhassanat | Full-Stack Developer",
  description: "Portfolio of Yazan Alhassanat, a full-stack developer building responsive web applications, educational platforms, and content management systems.",
  keywords: ["Yazan Alhassanat", "Full-Stack Developer", "React Developer", "Next.js Developer", "Jordan"],
  openGraph: {
    title: "Yazan Alhassanat | Full-Stack Developer",
    description: "Selected work, experience, and skills of Yazan Alhassanat.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><GlobalEffects />{children}</body>
    </html>
  );
}
