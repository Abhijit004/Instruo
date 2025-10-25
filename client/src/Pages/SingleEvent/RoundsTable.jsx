import React from "react";
import { Table } from "antd";
import dayjs from "dayjs";

const RoundsTable = ({ rounds }) => {
  const columns = [
    {
      title: "RNo",
      dataIndex: "roundNumber",
      key: "roundNumber",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
      render: (text) => dayjs(text).format("DD MMM YYYY, HH:mm"),
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
      render: (text) => dayjs(text).format("DD MMM YYYY, HH:mm"),
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      responsive: ["xs", "sm", "md", "lg"],
    },
  ];

  const dataSource = rounds.map((round) => ({
    key: round.roundNumber,
    ...round,
  }));

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      scroll={{ x: "max-content" }}
      style={{ maxWidth: "700px", paddingTop: "20px" }}
      size="large"
    />
  );
};

export default RoundsTable;
