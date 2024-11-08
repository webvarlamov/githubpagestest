"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import {useEffect, useState} from "react";
import Carousel from "@/app/components/Carousel/carousel";
import Model from "@/app/assets/mock2.png";
import Warranty from "@/app/assets/warranty.svg";
import icon1 from "@/app/assets/specifications/icon1.png";
import icon2 from "@/app/assets/specifications/icon2.png";
import icon3 from "@/app/assets/specifications/icon3.png";
import Advertisemet from "@/app/assets/advertisemet.png";

function formatPrice(price) {
    return price.toLocaleString('ru-RU', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function About() {
    const [data, setData] = useState([]);
    const [imgs, setImgs] = useState([Model]);
    const [price, setPrice] = useState("");

    useEffect(() => {
        const storedData = sessionStorage.getItem('model');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setData(parsedData);
            setPrice(parsedData.price);
            const imgUrls = parsedData.photos.imgs.map(img => img.url);
            setImgs(imgUrls);
        }
    }, []);

    return (
        <>
            <main className={styles.main}>
                <div className={styles.model}>
                    <p className={styles.brand}>{data.brandName} {data.modelName}</p>
                    <p className={styles.vin}>vin 123456789123</p>
                </div>
                <div className={styles.container}>
                    <div className={styles.information}>
                        <div className={`${styles.general} ${styles.price}`}>{`${formatPrice(price)} ₽`}</div>
                        <div className={styles.general}>
                            <Image className={styles.done} src={Warranty} alt="warranty"/>
                            <p className={styles.warranty}>Гарантия юр. чистоты</p>
                        </div>
                        <p className={styles.additional}>Характеристики</p>
                        <div className={styles.specifications}>
                            <div className={styles.specification}>
                                <Image className={styles.icon} src={icon1} alt="icon"/>
                                <p className={styles.text}>{data.modelYear} год выпуска</p>
                            </div>
                            <div className={styles.specification}>
                                <Image className={styles.icon} src={icon2} alt="icon"/>
                                <p className={styles.text}>{data.EngineSize} л. / {data.Power} л. с.
                                    / {data.Transmission}</p>
                            </div>
                            <div className={styles.specification}>
                                <Image className={styles.icon} src={icon3} alt="icon"/>
                                <p className={styles.text}>КП - Вариатор</p>
                            </div>
                        </div>
                    </div>
                    <Carousel images={imgs}/>
                </div>
            </main>
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
        </>
    )
}
