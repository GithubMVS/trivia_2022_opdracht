import styles from "./home.module.css";

// images
import behind from "./globals/images/background_images/behind.svg";
import bottom_right from "./globals/images/background_images/bottom_right.svg";
import top_left from "./globals/images/background_images/top_left.svg";
import top_right from "./globals/images/background_images/top_right.svg";

function App() {
  return (
    <>
      <img className={`${styles.absolute} ${styles.behind}`} src={behind} alt="behind" />
      <img className={`${styles.absolute} ${styles.bottom_right}`} src={bottom_right} alt="bottom_right" />
      <img className={`${styles.absolute} ${styles.top_left}`} src={top_left} alt="top_left" />
      <img className={`${styles.absolute} ${styles.top_right}`} src={top_right} alt="top_right" />

      <div className={styles.container_full}>
        <p className={styles.title}>Quiz Varia 2022</p>
        <div className={styles.center}>
          <div className={styles.content}>
            <p>content in here</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
