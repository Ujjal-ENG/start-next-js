import Navbar from "@/components/navbar";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next App</title>
      </Head>
      <header>
        <Navbar />
      </header>

      <main></main>
      <footer></footer>
    </>
  );
};

export default index;
