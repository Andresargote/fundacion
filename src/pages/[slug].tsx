import Button from "../components/Button";
import Carrousel from "../components/Carrousel";

import styles from "../styles/Page.module.css";

export default function Page(){
    return (
        <div className={styles.container}>
            <header className={styles.headerPage}>
                <h1>HogarBambi</h1>
                <p>25 años alojando corazones, aflorando sueños.</p>
            </header>
            <section className={styles.sectionPage}>
                <Carrousel/>
                <div className={styles.sectionPageContact}>
                    <div className={styles.sectionPageAdress}>
                        <span></span>
                        <span>Edif. Hogar Bambi, Av. José Manuel Sanz, Caracas 1011, Distrito Capital, Venezuela</span>
                    </div>
                    <Button className="btn btn-green">Contactar</Button>
                </div>
            </section>
            <main className={styles.mainPage}>
                <p>En Hogar Bambi brindamos atención integral con enfoque sistémico a niños y niñas de 0 a 18 años, en nuestras cuatro casas ubicadas en San Bernardino.</p>
            </main>
        </div>
    )
}