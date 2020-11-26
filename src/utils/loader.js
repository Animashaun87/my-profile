import React from "react";
import { Icon } from "antd";
import colors from "./colors";

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
      <Icon
        type="sync"
        style={{ fontSize: 45, color: colors.lightBrown }}
        spin
      />
    </div>
  );
};

export default Loader;
