import Navbar from "@/components/navbar";
import React from "react";
import Image from "next/image";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Page</title>
      </Head>
      <Navbar />
      <div className="about">
        about
        <Image
          src="https://plus.unsplash.com/premium_photo-1676310601649-c0a78a17cc20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          width="500"
          height="600"
          alt="kopa"
        />
        <style jsx>
          {`
            .about {
              display: flex;
              justify-content: center;
              width: 100%;
              align-items: center;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default about;
