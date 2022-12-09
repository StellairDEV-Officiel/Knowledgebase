import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./realvideos.module.css";

export const RealMP4Videos: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const callback: IntersectionObserverCallback = useCallback((data) => {
    setIsIntersecting(data[0].isIntersecting);
  }, []);

  useEffect(() => {
    const { current } = ref;
    if (!current) {
      return;
    }

    const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.5,
    });
    observer.observe(current);

    return () => observer.unobserve(current);
  }, [callback]);

  return (
    <div ref={ref} className={styles.realvideos}>
      <div>
        <h2 className={styles.realtitle}>
          On construit <span className={styles.realgradient}>l'hébergeur</span> du <span className={styles.realgradient}>futur</span> ensemble !
        </h2>
        <p>
        Parce que nous sommes plus fort ensemble, on agit au quotidien pour améliorer nos services. <br /> Vous aussi, vous pouvez contribuer à rendre meilleur litecloud, n'hésitez pas à ajouter vos tutoriels !
        </p>
      </div>
      <div className={styles.realmp4container}>
        <img
          src="/img/stellar.png"
          className={styles.icon}
          style={{
            width: 110
          }}
        />
      </div>
    </div>
  );
};
