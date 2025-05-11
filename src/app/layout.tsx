import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog com Next.js",
  description:
    "Blog criado para o Curso de React e Next.js - Udemy - Luiz O. Miranda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
