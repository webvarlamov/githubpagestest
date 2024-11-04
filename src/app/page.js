"use client";
import styles from "./page.module.css";
import Image from "next/image";
import {cars, engines, brands, complectations} from "./mock"
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
  const [brand, setBrand] = useState("");
  const [engine, setEngine] = useState("");
  const [complectation, setComplectation] = useState("");

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

  const handleClickSort = (count) => {
      setBrand(brands[count]);
  };

  const handleClickReset = () => {
      setBrand("");
      setEngine("");
      setComplectation("");
  };

  return (
    <div className={styles.page}>
        {isMobile ? (<div>nhifvebnnesov</div>) : (
            <main className={styles.main}>
                <h2 className={styles.brand}>Автомобили Chery в СПб</h2>
                <div className={styles.content}>
                    <div className={styles.filter}>
                        <p className={styles.heading}>Бренд</p>
                        <div className={styles.container}>
                            {brands.map((volume, index) => (
                                <p className={styles.variant} key={index}
                                   onClick={() => handleClickSort(index)}>{volume}</p>
                            ))}
                        </div>
                        <hr className={styles.hr}/>
                        <p className={styles.heading}>Объем двигателя</p>
                        <div className={styles.container}>
                            {engines.map((volume, index) => (
                                <p className={styles.variant} key={index}
                                   onClick={() => setEngine(engines[index])}>{volume}</p>
                            ))}
                        </div>
                        <hr className={styles.hr}/>
                        <p className={styles.heading}>Комплектация</p>
                        <div className={styles.container}>
                            {complectations.map((volume, index) => (
                                <p className={styles.variant} key={index}
                                   onClick={() => setComplectation(complectations[index])}>{volume}</p>
                            ))}
                        </div>
                        <hr className={styles.hr}/>
                        <button className={styles.resetButton} onClick={() => handleClickReset()}>Сбросить фильтр
                        </button>
                    </div>
                    <div className={styles.cards}>
                        {cars.map((car, index) => (
                            <div className={styles.card} key={index}>
                                <Image src={car.img} alt="car"/>
                                <p className={styles.title}>{car.title}</p>
                                <p className={styles.description}>{car.description}</p>
                                <button className={styles.information} onClick={() => router.push('/about')}>Подробнее
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
