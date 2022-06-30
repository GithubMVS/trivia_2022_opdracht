import React, { FC, useContext } from "react";
import styles from "./life.module.css";

// context import
import { DataContext } from "../../../Context";

// images
import livesSVG from "../../../globals/images/lives/lives.svg";

const Life: FC = () => {
  const { lives } = useContext(DataContext);

  return (
    <>
      <div className={styles.lives_container}>
        <p className={styles.lives_text}>{lives}</p>
        <img className={styles.lives_image} src={livesSVG} alt="your lives" />
      </div>
    </>
  );
};

export default Life;
