import Navbar from "@/components/navbar";

import React from "react";

export const getStaticPaths = async () => {
  const fetchURL = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await fetchURL.json();
  const paths = data.map((el) => {
    return {
      params: { pageNo: el.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const fetchURL = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await fetchURL.json();
  return {
    props: {
      data,
    },
  };
};

const pageNo = ({ data }) => {
  return (
    <div>
      <Navbar />
      <h1>{data.body}</h1>
    </div>
  );
};

export default pageNo;
