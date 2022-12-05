import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WebFont from "webfontloader";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
  CHeaderBrand,
  CImage,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { cilTrash } from "@coreui/icons";

import { AppSidebarNav } from "./AppSidebarNav";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../_nav";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Droid Serif"],
      },
    });
  }, []);
  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex p-2" to="/">
        <CImage
          fluid
          width={80}
          height={80}
          src={require("../assets/images/logo-1.png")}
        ></CImage>
        {/* <CIcon className="sidebar-brand-full" icon={cilTrash} size="3xl" /> */}
        <CHeaderBrand
          style={{ fontFamily: "Droid Sans" }}
          className="p-3 fs-2 font-weight-bold"
          href="#/home"
        >
          UWC 2.0
        </CHeaderBrand>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
        }
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
