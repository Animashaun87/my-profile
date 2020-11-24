import React from "react";

const Container = (props) => {
  const { height, children, display, minHeight } = props;
  return (
    <>
      <div
        style={{
          width: "90%",
          marginLeft: "5%",
          height: height || "100%",
          minHeight: minHeight || "",
          display: display || "",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
