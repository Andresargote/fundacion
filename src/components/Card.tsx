import styles from "./styles/Card.module.css";

interface cardProps {
    id: number,
    name: string,
    motto: string,
    img: string
}

export default function Card ({id, name, motto, img}: cardProps) {
    return (
        <article className={styles.article}>
            <img className={styles.articleImg} src={img} alt={name}/>
            <div className={styles.articleContent}>
                <h2>{name}</h2>
                <p>{motto}</p>
            </div>
        </article>
    );
}