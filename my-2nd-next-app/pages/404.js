import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Navbar />
      <h1>404</h1>
      <h3>
        We are sorry to say, this page is under maintenance or the page is
        remove or not include in our websites!!!
      </h3>
      <a style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
        Go back Home Page Click Here/..
      </a>
    </>
  );
};

export default error;
