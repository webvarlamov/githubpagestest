"use client";
import styles from "./page.module.css";
import Image from "next/image";
import Model from "@/app/assets/mock2.png";
import Car from "@/app/assets/mock3.png";

import mock1 from "@/app/assets/specifications/icon1.png";
import mock2 from "@/app/assets/specifications/icon2.png";
import mock3 from "@/app/assets/specifications/icon3.png";
import {useEffect, useState} from "react";
import Carousel from "@/app/components/Carousel/carousel";

export default function page() {
    const [data, setData] = useState([]);
    const [imgs, setImgs] = useState([Model]);

    useEffect(() => {
        const storedData = sessionStorage.getItem('data');
        if (storedData) {
            setData(JSON.parse(storedData));
            setImgs(JSON.parse(storedData).photos.imgs.map(img => img.url));
        }
    }, []);


    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.company}>
                    <p className={styles.brand}>{data.brandName} {data.modelName}</p>
                    <p className={styles.vin}>vin 123456789123</p>
                </div>
                <div className={styles.container}>
                    <div className={styles.information}>
                        <p className={`${styles.general} ${styles.price}`}>{data.price} ₽</p>
                        <p className={styles.general}>Гарантия юр. чистоты</p>
                        <p className={styles.additional}>Характеристики</p>
                        <div className={styles.specifications}>
                            <div className={styles.specification}>
                                <Image src={mock1} alt="icon"/>
                                <p className={styles.text}>{data.modelYear} год выпуска</p>
                            </div>
                            <div className={styles.specification}>
                                <Image src={mock2} alt="icon"/>
                                <p className={styles.text}>{data.EngineSize} л. / {data.Power} л. с. / {data.Transmission}</p>
                            </div>
                            <div className={styles.specification}>
                                <Image src={mock3} alt="icon"/>
                                <p className={styles.text}>КП - Вариатор</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Carousel images={imgs}/>
                    </div>
                </div>
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