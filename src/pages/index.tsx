import Head from "@docusaurus/Head";
import splitbee from "@splitbee/web";
import Layout from "@theme/Layout";
import React from "react";
import { VideoApps } from "../../components/LambdaSplash/VideoApps";
import { VideoAppsTitle } from "../../components/LambdaSplash/VideoAppsTitle";
import { BackgroundAnimation } from "../../components/LandingPage/BackgroundAnimation";
import { LightningFastEditor } from "../../components/LandingPage/editor";
import { FreePricing } from "../../components/LandingPage/FreePricing";
import { IfYouKnowReact } from "../../components/LandingPage/if-you-know-react";
import { Parametrize } from "../../components/LandingPage/parametrize";
import { RealMP4Videos } from "../../components/LandingPage/real-mp4-videos";
import { WriteInReact } from "../../components/LandingPage/WriteInReact";
import styles from "./landing.module.css";

setTimeout(() => {
  splitbee.init();
}, 100);

const NewLanding: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>LiteCloud | Documentation</title>
        <meta
          name="description"
          content="L'hébergeur engagé sans engagement - Documentation LiteCloud"
        />
      </Head>
      <BackgroundAnimation />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.content}>
        <WriteInReact />
        <br />
        <br />
        <IfYouKnowReact />
        <br />
        <br />
        <RealMP4Videos />
        <br />
        <br />
      </div>
    </Layout>
  );
};

export default NewLanding;
