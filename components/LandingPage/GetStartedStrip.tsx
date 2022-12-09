import React from "react";
import { useMobileLayout } from "../../src/helpers/mobile-layout";
import { BlueButton } from "../layout/Button";
import styles from "./get-started.module.css";

export const GetStarted: React.FC = () => {
  const mobileLayout = useMobileLayout();

  return (
    <div
      className={styles.myrow}
      style={{
        flexDirection: mobileLayout ? "column" : "row",
      }}
    >
      <div className={styles.partialrow}>
        <a className={styles.a} href="/docs">
          <BlueButton size="sm" loading={false} fullWidth={false}>
            Consulter notre Docs
          </BlueButton>
        </a>
        <div style={{ width: 10 }} />
        <a className={styles.a} href="https://litecloud.fr">
          <BlueButton size="sm" loading={false} fullWidth={false}>
            Commander un service
          </BlueButton>
        </a>
        <div style={{ width: 10 }} />
        <a className={styles.a} href="https://discord.gg/gxAuEK6Qm5">
          <BlueButton size="sm" loading={false} fullWidth={false}>
            Nous rejoindre sur Discord
          </BlueButton>
        </a>
      </div>
    </div>
  );
};
