"use client";
import { useState } from 'react';
import styles from './carousel.module.css';
import Image from "next/image"; // Импортируем стили

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={styles.slider}>
            <button className={`${styles.prev} ${styles.button}`} onClick={prevSlide}>❮</button>
            <Image width={876} height={719} src={images[currentIndex]} alt={`slide ${currentIndex}`} className={styles.image} />
            <button className={`${styles.next} ${styles.button}`} onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Carousel;