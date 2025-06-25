import { useState } from "react";
import styles from "./LuckyNumber.module.css";

export function LuckyNumber () {
    const [luckyNumber, setLuckyNumber]= useState(0);

    function handleClick() {
      setLuckyNumber(Math.floor(Math.random() * 40) + 1);
    }

    return (
        <div className={styles.container}>
            <h1> Lucky Number = {luckynumber}</h1>
            <button className = {styles.button} onClick={handleClick}>I'm Feeling Lucky</button>
        </div>
    );
}