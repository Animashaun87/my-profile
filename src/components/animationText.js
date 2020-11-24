import React from "react";
import Typical from "react-typical";

function ChangeText() {
  return (
    <>
      <Typical
        steps={["Hire me", 2000, " for a project", 1500]}
        loop={Infinity}
      />
    </>
  );
}

export default ChangeText;
