"use client";
import styles from "./page.module.css";
import Image from "next/image";
import Car from "@/app/assets/mock1.png";
import {engines, brands, complectations} from "./mock"
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {GetData} from "@/app/request";

const byDefault = "Chery";

export default function Home() {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    const [brand, setBrand] = useState(byDefault);
    const [engine, setEngine] = useState("");
    const [complectation, setComplectation] = useState("");
    const [data, setData] = useState([]);


    const storedData = sessionStorage.getItem('mobile');
    useEffect(() => {
        if(storedData === "true"){
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    }, [storedData]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await GetData(brand);
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [brand]);


    const handleClickAbout = (count) => {
        sessionStorage.setItem('data', JSON.stringify(data[count]));
        router.push('/about');
    };

    const handleClickReset = () => {
        setBrand(byDefault);
        setEngine("");
        setComplectation("");
        setData([]);
    };

    return (
        <main className={styles.main}>
            <p className={styles.brand}>Автомобили Chery в СПб</p>
            <div className={styles.content}>
                <div className={styles.filter}>
                    {isMobile ? null :(<p className={styles.heading}>Бренд</p>)}
                    <div className={styles.container}>
                        {brands.map((volume, index) => (
                            <p
                                className={`${styles.variant} ${volume === brand ? styles.selected : ''}`}
                                key={index}
                                onClick={() => setBrand(brands[index])}
                            >
                                {volume}
                            </p>
                        ))}
                    </div>
                    {isMobile ? null :(
                        <>
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
                        </>
                    )}
                </div>
                <div className={styles.cards}>
                    {data.length === 0 ? <p>Такой модели, к сожалению, нет в салоне. Попробуйте зайти позднее.</p> : (
                        data.map((car, index) => (
                        <div className={styles.card} key={index}>
                            <Image className={styles.car} src={Car} alt="car"/>
                            <p className={styles.title}>{car.brandName} {car.modelName}</p>
                            <p className={styles.description}>{car.EngineSize} л. / {car.Power} л. с.
                                / {car.Transmission}</p>
                            <button className={styles.information}
                                    onClick={() => handleClickAbout(index)}
                            >
                                Подробнее
                            </button>
                        </div>
                    )))}
                </div>
            </div>
        </main>
    );
}
