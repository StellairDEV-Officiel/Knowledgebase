import React from "react";
import { BlueButton } from "../layout/Button";
import { Spacer } from "../layout/Spacer";
import { CodeExample } from "./CodeExample";
import styles from "./ifyouknowreact.module.css";

const IMG_WIDTH = 6410;
const IMG_HEIGHT = 3321;
const ASPECT = IMG_WIDTH / IMG_HEIGHT;

const container = {
  maxWidth: 500,
  height: (1 / ASPECT) * 500,
  position: "relative" as const,
};

export const IfYouKnowReact: React.FC = () => {
  return (
    <div className={styles.ifyouknowrow}>
      <div style={container}>
        <img src="/img/helping3.png" />
      </div>
      <div style={{ width: 40 }} />
      <div>
        <h2 className={styles.ifyouknowtitle}>
          Toute l'aide dont vous avez <span className={styles.rea}>besoin</span><br />
          à tout <span className={styles.rea}>instant</span> !
        </h2>
        <Spacer />
        <Spacer />
        <a className={styles.aknow} href="/docs">
          <BlueButton size="sm" fullWidth={false} loading={false}>
            Commencer
          </BlueButton>
        </a>
      </div>
    </div>
  );
};
