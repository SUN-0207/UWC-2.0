import React from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CCol,
  CCardImage,
  CCardTitle,
  CCardText,
  CHeaderText,
  CBadge,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import avatar from "./MCP.jpg";
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";

const Mcp = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader className="d-flex flex-row mb-2 justify-content-between">
          <CHeaderText className="p-2">Thông tin MCP</CHeaderText>
          <CButton>
            <CIcon icon={cilPlus}></CIcon>Thêm
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
            <CCol>
              <CCard>
                <CCardImage className="p-3" rounded thumbnail src={avatar} />
                <CCardBody className="d-inline-flex flex-column justify-content-center">
                  <CCardTitle>Địa điểm: XXX</CCardTitle>
                  <CCardText>
                    Tình trạng: {"   "}
                    <CBadge
                      className="ms-5"
                      color="success"
                      shape="rounded-pill"
                    >
                      Trống
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Tuyến đường:{" "}
                    <CDropdown className="ms-4" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Tuyến 01
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="">Tuyến 02</CDropdownItem>
                        <CDropdownItem href="">Tuyến 03</CDropdownItem>
                        <CDropdownItem href="">Tuyến 04</CDropdownItem>
                        <CDropdownItem href="">Tuyến 05</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CCardText>
                  <CButton
                    className="mt-4 align-self-end btn btn-info"
                    href="#"
                  >
                    Xem thêm
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol>
              <CCard>
                <CCardImage className="p-3" rounded thumbnail src={avatar} />
                <CCardBody className="d-inline-flex flex-column justify-content-center">
                  <CCardTitle>Địa điểm: XXX</CCardTitle>
                  <CCardText>
                    Tình trạng: {"   "}
                    <CBadge
                      className="ms-5"
                      color="warning"
                      shape="rounded-pill"
                    >
                      Sắp đầy
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Tuyến đường:{" "}
                    <CDropdown className="ms-4" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Tuyến 01
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="">Tuyến 02</CDropdownItem>
                        <CDropdownItem href="">Tuyến 03</CDropdownItem>
                        <CDropdownItem href="">Tuyến 04</CDropdownItem>
                        <CDropdownItem href="">Tuyến 05</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CCardText>
                  <CButton
                    className="mt-4 align-self-end btn btn-info"
                    href="#"
                  >
                    Xem thêm
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol>
              <CCard>
                <CCardImage className="p-3" rounded thumbnail src={avatar} />
                <CCardBody className="d-inline-flex flex-column justify-content-center">
                  <CCardTitle>Địa điểm: XXX</CCardTitle>
                  <CCardText>
                    Tình trạng: {"   "}
                    <CBadge
                      className="ms-5"
                      color="danger"
                      shape="rounded-pill"
                    >
                      Đầy
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Tuyến đường:{" "}
                    <CDropdown className="ms-4" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Tuyến 01
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="">Tuyến 02</CDropdownItem>
                        <CDropdownItem href="">Tuyến 03</CDropdownItem>
                        <CDropdownItem href="">Tuyến 04</CDropdownItem>
                        <CDropdownItem href="">Tuyến 05</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CCardText>
                  <CButton
                    className="mt-4 align-self-end btn btn-info"
                    href="#"
                  >
                    Xem thêm
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
    // <CRow>
    //   <CCol xs={12}>
    //     <CCard className="mb-4">
    //       <CCardHeader>
    //         <strong>React Toast</strong> <small>Basic</small>
    //       </CCardHeader>
    //       <CCardBody>
    //         <div className="row">
    //           <div className="col" style={{ marginTop: "25px" }}>
    //             <img src={avatar} alt="avatar" width="270" height="160" />
    //             <div className="mb-3" style={{ marginLeft: "50px" }}>
    //               <label className="form-label" htmlFor="District">
    //                 <strong>BKS: 59P3-19161</strong>
    //               </label>
    //             </div>
    //           </div>
    //           <div className="col" style={{ textAllign: "left" }}>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>ID MCP</strong>: 1
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Sức chứa</strong>: 1,8 tấn
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Tình trạng</strong>: 50%
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Người quản lý</strong>: Tus đẹp trai
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Thuộc tuyến đường</strong>: 1
    //               </label>
    //             </div>
    //           </div>
    //         </div>
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    //   <CCol xs={12}>
    //     <CCard className="mb-4">
    //       <CCardHeader>
    //         <strong>React Toast</strong> <small>Basic</small>
    //       </CCardHeader>
    //       <CCardBody>
    //         <div className="row">
    //           <div className="col" style={{ marginTop: "25px" }}>
    //             <img src={avatar} alt="avatar" width="270" height="160" />
    //             <div className="mb-3" style={{ marginLeft: "50px" }}>
    //               <label className="form-label" htmlFor="District">
    //                 <strong>BKS: 59P3-19161</strong>
    //               </label>
    //             </div>
    //           </div>
    //           <div className="col" style={{ textAllign: "left" }}>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>ID MCP</strong>: 1
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Sức chứa</strong>: 1,8 tấn
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Tình trạng</strong>: 50%
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Người quản lý</strong>: Tus đẹp trai
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Thuộc tuyến đường</strong>: 1
    //               </label>
    //             </div>
    //           </div>
    //         </div>
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    //   <CCol xs={12}>
    //     <CCard className="mb-4">
    //       <CCardHeader>
    //         <strong>React Toast</strong> <small>Basic</small>
    //       </CCardHeader>
    //       <CCardBody>
    //         <div className="row">
    //           <div className="col" style={{ marginTop: "25px" }}>
    //             <img src={avatar} alt="avatar" width="270" height="160" />
    //             <div className="mb-3" style={{ marginLeft: "50px" }}>
    //               <label className="form-label" htmlFor="District">
    //                 <strong>BKS: 59P3-19161</strong>
    //               </label>
    //             </div>
    //           </div>
    //           <div className="col" style={{ textAllign: "left" }}>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>ID MCP</strong>: 1
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Sức chứa</strong>: 1,8 tấn
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Tình trạng</strong>: 50%
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Người quản lý</strong>: Tus đẹp trai
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Thuộc tuyến đường</strong>: 1
    //               </label>
    //             </div>
    //           </div>
    //         </div>
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    //   <CCol xs={12}>
    //     <CCard className="mb-4">
    //       <CCardHeader>
    //         <strong>React Toast</strong> <small>Basic</small>
    //       </CCardHeader>
    //       <CCardBody>
    //         <div className="row">
    //           <div className="col" style={{ marginTop: "25px" }}>
    //             <img src={avatar} alt="avatar" width="270" height="160" />
    //             <div className="mb-3" style={{ marginLeft: "50px" }}>
    //               <label className="form-label" htmlFor="District">
    //                 <strong>BKS: 59P3-19161</strong>
    //               </label>
    //             </div>
    //           </div>
    //           <div className="col" style={{ textAllign: "left" }}>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>ID MCP</strong>: 1
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Sức chứa</strong>: 1,8 tấn
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Tình trạng</strong>: 50%
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Người quản lý</strong>: Tus đẹp trai
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Thuộc tuyến đường</strong>: 1
    //               </label>
    //             </div>
    //           </div>
    //         </div>
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    // </CRow>
  );
};

export default Mcp;
