"use client";
import "./globals.css";
import styles from "./layout.module.css";
import localFont from "next/font/local";
import Image from "next/image";
import {useRouter} from "next/navigation";
import Logo from "@/app/assets/logo.svg";
import {useEffect} from "react";
import Advertisemet from "@/app/assets/advertisemet.png";

const tacticSansReg = localFont({
  src: "./fonts/TacticSansReg.woff",
  variable: "--font-tactic-sans-reg",
});

const tacticSansMed = localFont({
    src: "./fonts/TacticSansMed.woff",
    variable: "--font-tactic-sans-med",
});

const tacticSansBold = localFont({
    src: "./fonts/TacticSansBold.woff",
    variable: "--font-tactic-sans-bold",
});

const tacticSansBlack = localFont({
    src: "./fonts/TacticSansBlack.woff",
    variable: "--font-tactic-sans-black",
});

export default function RootLayout({ children }) {
    const router = useRouter();

    const checkDeviceType = () => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windowssce|palm/i.test(userAgent);
        sessionStorage.setItem('mobile', JSON.stringify(mobile));
    };

    useEffect(() => {
        checkDeviceType();
        window.addEventListener('resize', checkDeviceType);
        return () => {
            window.removeEventListener('resize', checkDeviceType);
        };
    }, []);

    return (
        <html lang="en">
        <head>
            <title>Максимум</title>
        </head>
        <body className={`${tacticSansReg.variable} ${tacticSansBlack.variable} ${tacticSansMed.variable} ${tacticSansBold.variable}`}>
            <header className={styles.header}>
                  <Image className={styles.logo} src={Logo} alt="logo" onClick={() => router.push('/')}/>
                  <hr className={styles.delimiter}/>
                  <p className={styles.company}>Официальный дилер Максимум </p>
            </header>
            {children}
            <footer className={styles.footer}>
                <div className={styles.content}>
                    <p className={styles.title}>Кредит на новый Chery Tiggo</p>
                    <p className={styles.description}>Оформите кредит на любой автомобиль ассортимента дилерского
                        центра «Максимум»</p>
                    <button className={styles.next}>Оформить</button>
                </div>
                <div>
                    <Image className={styles.car} src={Advertisemet} alt="car"/>
                </div>
            </footer>
        </body>
        </html>
    );
}
