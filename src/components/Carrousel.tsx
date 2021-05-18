import styles from "./styles/Carrousel.module.css";

export default function Carrousel() {
    return (
        <div className={styles.carrousel}>
            <button>Atras</button>
            <img src="./portImage.png"/>
            <button>delante</button>            
        </div>
    )
}