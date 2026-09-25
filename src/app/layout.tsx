import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NeuralBackground from "@/components/NeuralBackground";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: '--font-sans' });
const firaCode = Fira_Code({ subsets: ["latin", "cyrillic"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: "VibePrompts | 50 готовых промптов для вайбкодинга",
  description: "От идеи до работающего приложения — одним точным промптом. One-shot prompts для создания сайтов, SaaS, Telegram-ботов и AI-инструментов.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans min-h-screen text-slate-900 dark:text-slate-100 selection:bg-indigo-500/30 bg-transparent`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NeuralBackground />
          <div className="relative z-0 min-h-screen flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
