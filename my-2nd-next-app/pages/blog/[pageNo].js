import { useRouter } from "next/router";
import React from "react";

const pageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    <div>
      <h1>this is dp {pageNumber} is kopa</h1>
    </div>
  );
};

export default pageNo;
