import React from "react";

import { CImage } from "@coreui/react";

const StartPage = () => {
  return (
    <div className="d-flex align-items-center">
      <CImage
        align="center"
        rounded
        src={require("../../assets/images/logo-1.png")}
        width={400}
        height={400}
      />
      <CImage
        align="center"
        rounded
        src={require("../../assets/images/logo-2.png")}
        width={400}
        height={400}
      />
    </div>
  );
};

export default StartPage;
