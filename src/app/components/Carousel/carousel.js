import React, { useEffect, useState } from 'react';
import styles from './carousel.module.css';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const preloadImages = (images) => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    };

    useEffect(() => {
        preloadImages(images);
    }, [images]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={styles.slider}>
            <button className={`${styles.prev} ${styles.button}`} onClick={prevSlide}>❮</button>
            <img
                src={images[currentIndex]}
                className={styles.img}
                alt={`slide ${currentIndex}`}
                loading="lazy"
            />
            <button className={`${styles.next} ${styles.button}`} onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Carousel;
