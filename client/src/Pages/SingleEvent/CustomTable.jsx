import React from "react";
import { Table } from "antd";

const CustomTable = ({ columns, rows }) => {
  const dataSource = rows.map((row, i) => ({
    key: i,
    ...row,
  }));

  return (
    <Table
      columns={columns}
      bordered
      dataSource={dataSource}
      pagination={false}
      scroll={{ x: "max-content" }}
      style={{ maxWidth: "700px", paddingTop: "20px" }}
      size="large"      
    />
  );
};

export default CustomTable;
