import React from "react";
import { Pagination as PaginationBase } from "antd";

import "./style.scss";

const Pagination = () => {
  return (
    <div className="next_page">
      <PaginationBase defaultCurrent={1} total={100} showSizeChanger={false} />
    </div>
  );
};

export default Pagination;
