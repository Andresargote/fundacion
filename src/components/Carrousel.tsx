import React from "react";
import styles from "./styles/Carrousel.module.css";
import VectorLeft from "./VectorLeft";
import VectorRight from "./VectorRight";

export default function Carrousel() {
  return (
    <div className={styles.carrousel}>
      <button>
        <VectorLeft />
      </button>
      <img src="./portImage.png" />
      <button>
        <VectorRight />
      </button>
    </div>
  );
}
