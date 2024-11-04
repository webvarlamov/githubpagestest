"use client";
import "./globals.css";
import styles from "@/app/page.module.css";
import localFont from "next/font/local";
import Image from "next/image";
import {useRouter} from "next/navigation";
import Logo from "@/app/assets/logo.svg";

const tacticSansReg = localFont({
  src: "./fonts/TacticSansReg.woff",
  variable: "--font-tactic-sans",
  weight: "400",
});

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en">
    <head>
        <title>Максимум</title>
    </head>
    <body className={tacticSansReg.variable}>
      <>
          <header className={styles.header}>
              <Image className={styles.logo} src={Logo} alt="logo" onClick={() => router.push('/')}/>
              <hr className={styles.hr}/>
              <p className={styles.compony}>Официальный дилер Максимум </p>
          </header>
          {children}
      </>
      </body>
    </html>
  );
}
