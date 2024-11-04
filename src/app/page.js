"use client";
import styles from "./page.module.css";
import Image from "next/image";
import Car from "@/app/assets/mock1.png";
import {engines, brands, complectations} from "./mock"
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {GetData} from "@/app/request";


export default function Home() {
    const [brand, setBrand] = useState("Chery");
    const [engine, setEngine] = useState("");
    const [complectation, setComplectation] = useState("");

    const [data, setData] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    const checkDeviceType = () => {
        const userAgent = navigator.userAgent.toLowerCase();
        setIsMobile(/mobile|iphone|ipad|ipod|android|blackberry|mini|windowssce|palm/i.test(userAgent));
    };

    const router = useRouter();
    useEffect(() => {
        checkDeviceType();
        window.addEventListener('resize', checkDeviceType);
        return () => {
            window.removeEventListener('resize', checkDeviceType);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await GetData(brand);
            setData(result);
        };
        fetchData();
    }, [brand]);

    const handleClickAbout = (count) => {
        sessionStorage.setItem('data', JSON.stringify(data[count]));
        router.push('/about');
    };

    const handleClickReset = () => {
        setBrand("");
        setEngine("");
        setComplectation("");
        setData([]);
    };

    return (
        <div className={styles.page}>
            {isMobile ? (<div>nhifvebnnesov</div>) : (
                <main className={styles.main}>
                    <p className={styles.brand}>Автомобили Chery в СПб</p>
                    <div className={styles.content}>
                        <div className={styles.filter}>
                            <p className={styles.heading}>Бренд</p>
                            <div className={styles.container}>
                                {brands.map((volume, index) => (
                                    <p className={styles.variant}
                                       key={index}
                                       onClick={() => setBrand(brands[index])}
                                    >
                                        {volume}
                                    </p>
                                ))}
                            </div>
                            <hr className={styles.hr}/>
                            <p className={styles.heading}>Объем двигателя</p>
                            <div className={styles.container}>
                                {engines.map((volume, index) => (
                                    <p className={styles.variant}
                                       key={index}
                                       onClick={() => setEngine(engines[index])}
                                    >
                                        {volume}
                                    </p>
                                ))}
                            </div>
                            <hr className={styles.hr}/>
                            <p className={styles.heading}>Комплектация</p>
                            <div className={styles.container}>
                                {complectations.map((volume, index) => (
                                    <p className={styles.variant}
                                       key={index}
                                       onClick={() => setComplectation(complectations[index])}
                                    >
                                        {volume}
                                    </p>
                                ))}
                            </div>
                            <hr className={styles.hr}/>
                            <button className={styles.resetButton} onClick={() => handleClickReset()}>Сбросить фильтр
                            </button>
                        </div>
                        <div className={styles.cards}>
                            {data.map((car, index) => (
                                <div className={styles.card} key={index}>
                                    <Image src={Car} alt="car"/>
                                    <p className={styles.title}>{car.brandName} {car.modelName}</p>
                                    <p className={styles.description}>{car.modificationName}</p>
                                    <button className={styles.information}
                                            onClick={() => handleClickAbout(index)}
                                    >
                                        Подробнее
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
}
