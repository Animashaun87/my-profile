import React from "react";
import colors from "./colors";
import { SyncOutlined } from "@ant-design/icons";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: colors.dark,
        marginTop: "15%",
      }}
    >
      <SyncOutlined style={{ fontSize: 45, color: colors.lightBrown }} spin />
    </div>
  );
};

export default Loader;
