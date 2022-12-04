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
import avatar from "./truck.png";
import trolley from "./Trolley.jpg";
import CIcon from "@coreui/icons-react";
import { cilPlus } from "@coreui/icons";

const Vehicle = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader className="d-flex flex-row mb-2 justify-content-between">
          <CHeaderText className="p-2">Thông tin xe tải</CHeaderText>
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
                  <CCardTitle>Biển số xe: 61A-xxxxx</CCardTitle>
                  <CCardText>
                    Sức chứa:{"   "}
                    <CBadge className="ms-5" color="info" shape="rounded-pill">
                      1 tấn
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Tình trạng: {"   "}
                    <CBadge
                      className="ms-5"
                      color="warning"
                      shape="rounded-pill"
                    >
                      60%
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Người lái:{" "}
                    <CDropdown className="ms-5" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Chọn nhân viên
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="#">Lâm Nhật Tân</CDropdownItem>
                        <CDropdownItem href="#">Cù Thanh Sơn</CDropdownItem>
                        <CDropdownItem href="#">Phương Chung Tú</CDropdownItem>
                        <CDropdownItem href="#">Thi Khắc Quân</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CCardText>
                  <CCardText>
                    Tuyến đường:{" "}
                    <CDropdown className="ms-4" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Chọn tuyến đường
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="">Lâm Nhật Tân</CDropdownItem>
                        <CDropdownItem href="">Cù Thanh Sơn</CDropdownItem>
                        <CDropdownItem href="">Phương Chung Tú</CDropdownItem>
                        <CDropdownItem href="">Thi Khắc Quân</CDropdownItem>
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
                  <CCardTitle>Biển số xe: 61A-xxxxx</CCardTitle>
                  <CCardText>
                    Sức chứa:{"   "}
                    <CBadge className="ms-5" color="info" shape="rounded-pill">
                      1 tấn
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Tình trạng: {"   "}
                    <CBadge
                      className="ms-5"
                      color="warning"
                      shape="rounded-pill"
                    >
                      60%
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Người lái:{" "}
                    <CDropdown className="ms-5" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Chọn nhân viên
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="#">Lâm Nhật Tân</CDropdownItem>
                        <CDropdownItem href="#">Cù Thanh Sơn</CDropdownItem>
                        <CDropdownItem href="#">Phương Chung Tú</CDropdownItem>
                        <CDropdownItem href="#">Thi Khắc Quân</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CCardText>
                  <CCardText>
                    Tuyến đường:{" "}
                    <CDropdown className="ms-4" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Chọn tuyến đường
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="">Lâm Nhật Tân</CDropdownItem>
                        <CDropdownItem href="">Cù Thanh Sơn</CDropdownItem>
                        <CDropdownItem href="">Phương Chung Tú</CDropdownItem>
                        <CDropdownItem href="">Thi Khắc Quân</CDropdownItem>
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
                  <CCardTitle>Biển số xe: 61A-xxxxx</CCardTitle>
                  <CCardText>
                    Sức chứa:{"   "}
                    <CBadge className="ms-5" color="info" shape="rounded-pill">
                      1 tấn
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Tình trạng: {"   "}
                    <CBadge
                      className="ms-5"
                      color="warning"
                      shape="rounded-pill"
                    >
                      60%
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Người lái:{" "}
                    <CDropdown className="ms-5" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Chọn nhân viên
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="#">Lâm Nhật Tân</CDropdownItem>
                        <CDropdownItem href="#">Cù Thanh Sơn</CDropdownItem>
                        <CDropdownItem href="#">Phương Chung Tú</CDropdownItem>
                        <CDropdownItem href="#">Thi Khắc Quân</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CCardText>
                  <CCardText>
                    Tuyến đường:{" "}
                    <CDropdown className="ms-4" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Chọn tuyến đường
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="">1</CDropdownItem>
                        <CDropdownItem href="">2</CDropdownItem>
                        <CDropdownItem href="">3</CDropdownItem>
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
      <CCard className="mb-4">
        <CCardHeader className="d-flex flex-row mb-2 justify-content-between">
          <CHeaderText className="p-2">Thông tin xe đẩy</CHeaderText>
          <CButton>
            <CIcon icon={cilPlus}></CIcon>Thêm
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
            <CCol>
              <CCard>
                <CCardImage className="p-3" rounded thumbnail src={trolley} />
                <CCardBody className="d-inline-flex flex-column justify-content-center">
                  <CCardTitle>Biển số xe: 61A-xxxxx</CCardTitle>
                  <CCardText>
                    Sức chứa:{"   "}
                    <CBadge className="ms-5" color="info" shape="rounded-pill">
                      1 tấn
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Tình trạng xăng: {"   "}
                    <CBadge
                      className="ms-5"
                      color="warning"
                      shape="rounded-pill"
                    >
                      60%
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Người sử dụng:{" "}
                    <CDropdown className="ms-3" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Chọn nhân viên
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="#">Lâm Nhật Tân</CDropdownItem>
                        <CDropdownItem href="#">Cù Thanh Sơn</CDropdownItem>
                        <CDropdownItem href="#">Phương Chung Tú</CDropdownItem>
                        <CDropdownItem href="#">Thi Khắc Quân</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CCardText>
                  <CCardText>
                    Tuyến đường:{" "}
                    <CDropdown className="ms-4" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Chọn tuyến đường
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="">Lâm Nhật Tân</CDropdownItem>
                        <CDropdownItem href="">Cù Thanh Sơn</CDropdownItem>
                        <CDropdownItem href="">Phương Chung Tú</CDropdownItem>
                        <CDropdownItem href="">Thi Khắc Quân</CDropdownItem>
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
                <CCardImage className="p-3" rounded thumbnail src={trolley} />
                <CCardBody className="d-inline-flex flex-column justify-content-center">
                  <CCardTitle>Biển số xe: 61A-xxxxx</CCardTitle>
                  <CCardText>
                    Sức chứa:{"   "}
                    <CBadge className="ms-5" color="info" shape="rounded-pill">
                      1 tấn
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Tình trạng: {"   "}
                    <CBadge
                      className="ms-5"
                      color="warning"
                      shape="rounded-pill"
                    >
                      60%
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Người sử dụng:{" "}
                    <CDropdown className="ms-3" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Chọn nhân viên
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="#">Lâm Nhật Tân</CDropdownItem>
                        <CDropdownItem href="#">Cù Thanh Sơn</CDropdownItem>
                        <CDropdownItem href="#">Phương Chung Tú</CDropdownItem>
                        <CDropdownItem href="#">Thi Khắc Quân</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CCardText>
                  <CCardText>
                    Tuyến đường:{" "}
                    <CDropdown className="ms-4" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Chọn tuyến đường
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="">Lâm Nhật Tân</CDropdownItem>
                        <CDropdownItem href="">Cù Thanh Sơn</CDropdownItem>
                        <CDropdownItem href="">Phương Chung Tú</CDropdownItem>
                        <CDropdownItem href="">Thi Khắc Quân</CDropdownItem>
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
                <CCardImage className="p-3" rounded thumbnail src={trolley} />
                <CCardBody className="d-inline-flex flex-column justify-content-center">
                  <CCardTitle>Biển số xe: 61A-xxxxx</CCardTitle>
                  <CCardText>
                    Sức chứa:{"   "}
                    <CBadge className="ms-5" color="info" shape="rounded-pill">
                      1 tấn
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Tình trạng: {"   "}
                    <CBadge
                      className="ms-5"
                      color="warning"
                      shape="rounded-pill"
                    >
                      60%
                    </CBadge>
                  </CCardText>
                  <CCardText>
                    Người sử dụng:{" "}
                    <CDropdown className="ms-3" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Chọn nhân viên
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="#">Lâm Nhật Tân</CDropdownItem>
                        <CDropdownItem href="#">Cù Thanh Sơn</CDropdownItem>
                        <CDropdownItem href="#">Phương Chung Tú</CDropdownItem>
                        <CDropdownItem href="#">Thi Khắc Quân</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CCardText>
                  <CCardText>
                    Tuyến đường:{" "}
                    <CDropdown className="ms-4" variant="btn-group">
                      <CDropdownToggle color="secondary">
                        Chọn tuyến đường
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="">1</CDropdownItem>
                        <CDropdownItem href="">2</CDropdownItem>
                        <CDropdownItem href="">3</CDropdownItem>
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

export default Vehicle;
