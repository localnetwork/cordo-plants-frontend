import Head from "next/head";
import React, { useState, useEffect } from "react";
export const Meta = () => {
  const [currentDomain, setCurrentDomain] = useState("");
  useEffect(() => {
    const domain = window.location.protocol + "//" + window.location.host;

    setCurrentDomain(domain);
  }, []);

  return (
    <>
      <Head>
        <title>Cordo Plants</title>
        <meta
          name="description"
          content={`Cordoplants is a web-app community based application where we connect partners/organizations to it's community. We are empowering partners to contribute to tree-planting initiatives. Through their support, volunteers can accumulate "Cordo-points" that can be converted into real-money. The goal for this app is to ease the immense global warming.`}
        />
        <meta
          property="og:image"
          content={`${currentDomain}/images/opengraph/og-default.jpg`}
        />
      </Head>
    </>
  );
};
