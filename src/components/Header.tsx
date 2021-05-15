import React from "react";
import Search from "./Search";

import styles from "./styles/Header.module.css"

export default function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.headerSearchContainer}>
                <Search />
            </div>
        </header>
    )
}