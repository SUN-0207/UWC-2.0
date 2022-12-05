import React from "react";

import { CImage } from "@coreui/react";

const StartPage = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <CImage
          rounded
          src={require("../../assets/images/logo-1.png")}
          width={400}
          height={400}
        />
        <CImage
          rounded
          src={require("../../assets/images/logo-2.png")}
          width={400}
          height={400}
        />
      </div>
      <div className="mt-5">
        <h1>HỆ THỐNG QUẢN LÝ RÁC THẢI UWC 2.0</h1>
      </div>
    </div>
  );
};

export default StartPage;
