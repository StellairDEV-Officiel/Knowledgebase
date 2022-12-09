import React from "react";
import { ChooseTemplate } from "../../src/components/ChooseTemplate";
import { GetStarted } from "./GetStartedStrip";
import styles from "./writeinreact.module.css";

export const WriteInReact: React.FC = () => {
  return (
    <div>
      <h1 className={styles.writeincsstitle}>L'hébergeur engagé sans engagement ...|</h1>
      <br />
      <p
        style={{
          textAlign: "center",
          fontSize: "1.2em",
          fontWeight: 500,
        }}
        className={styles.text}
      >
         Bienvenue sur la Documentation LiteCloud, une question, une réponse, en un clic !
      </p>
      <br />
      <div className={styles.writeincss}>
        <GetStarted />
      </div>
      <br />
    </div>
  );
};
