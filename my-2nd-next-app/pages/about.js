import Navbar from "@/components/navbar";
import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <>
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
