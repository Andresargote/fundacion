import Button from "../components/Button";
import Header from "../components/Header";
import Search from "../components/Search";

import fakeApi from "../../fakeApi.json";

import styles from "../styles/Home.module.css";
import Card from "../components/Card";

export default function Home({ data }) {
  console.log(data);
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {data.map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              name={data.name}
              motto={data.motto}
              img={data.cardImage}
            />
          );
        })}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      data: fakeApi,
    },
  };
}
