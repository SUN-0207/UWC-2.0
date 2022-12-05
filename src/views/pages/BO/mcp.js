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
                        <CDropdownItem>Tuyến 02</CDropdownItem>
                        <CDropdownItem>Tuyến 03</CDropdownItem>
                        <CDropdownItem>Tuyến 04</CDropdownItem>
                        <CDropdownItem>Tuyến 05</CDropdownItem>
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
                        <CDropdownItem>Tuyến 02</CDropdownItem>
                        <CDropdownItem>Tuyến 03</CDropdownItem>
                        <CDropdownItem>Tuyến 04</CDropdownItem>
                        <CDropdownItem>Tuyến 05</CDropdownItem>
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
                        <CDropdownItem>Tuyến 02</CDropdownItem>
                        <CDropdownItem>Tuyến 03</CDropdownItem>
                        <CDropdownItem>Tuyến 04</CDropdownItem>
                        <CDropdownItem>Tuyến 05</CDropdownItem>
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
  );
};

export default Mcp;
