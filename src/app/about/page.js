import styles from "./page.module.css";
import Image from "next/image";
import Car from "@/app/assets/mock3.png";

export default function page() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>

            </main>

            <footer className={styles.footer}>
                <div className={styles.content}>
                    <p className={styles.title}>Кредит на новый Chery Tiggo</p>
                    <p className={styles.description}>Оформите кредит на любой автомобиль ассортимента дилерского центра «Максимум»</p>
                    <button className={styles.last}>Оформить</button>
                </div>
                <div>
                    <Image className={styles.car} src={Car} alt="car"/>
                </div>
            </footer>
        </div>
    )
}