import React from "react";
import Head from "next/head";
export const Meta = () => {
  return (
    <>
      <Head>
        <title>Cordo Plants</title>
        <meta
          name="description"
          content={`Cordoplants is a web-app community based application where we connect partners/organizations to it's community. We are empowering partners to contribute to tree-planting initiatives. Through their support, volunteers can accumulate "Cordo-points" that can be converted into real-money. The goal for this app is to ease the immense global warming.`}
        />
        <meta name="" href="/images/opengraph/og-default.jpg" />
      </Head>
    </>
  );
};
