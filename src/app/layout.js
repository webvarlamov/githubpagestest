"use client";
import "./Normalize.css";
import styles from "./layout.module.css";
import localFont from "next/font/local";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import Logo from "@/app/assets/logo.svg";
import {GetData} from "@/app/request";

const tacticSansReg = localFont({
  src: "assets/fonts/TacticSansReg.woff",
  variable: "--font-tactic-sans-reg",
});

const tacticSansMed = localFont({
    src: "assets/fonts/TacticSansMed.woff",
    variable: "--font-tactic-sans-med",
});

const tacticSansBold = localFont({
    src: "assets/fonts/TacticSansBold.woff",
    variable: "--font-tactic-sans-bold",
});

const tacticSansBlack = localFont({
    src: "assets/fonts/TacticSansBlack.woff",
    variable: "--font-tactic-sans-black",
});

const byDefault = "Chery";
export default function RootLayout({ children }) {
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await GetData(byDefault);
                sessionStorage.setItem('byDefault', JSON.stringify(result));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <html lang="en">
        <head>
            <link rel='icon' href='/favicon.ico'/>
            <title>Максимум</title>
        </head>
        <body className={`${tacticSansReg.variable} ${tacticSansBlack.variable} ${tacticSansMed.variable} ${tacticSansBold.variable}`}>
            <header className={styles.header}>
                  <Image className={styles.logo} src={Logo} alt="logo" onClick={() => router.push('/')}/>
                  <hr className={styles.delimiter}/>
                  <p className={styles.company}>Официальный дилер Максимум </p>
            </header>
            {children}
        </body>
        </html>
    );
}
