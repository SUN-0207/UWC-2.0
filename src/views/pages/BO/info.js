import React, { useState } from "react";
import PropTypes from "prop-types";

import "jquery/dist/jquery.min.js";
import $ from "jquery";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import data from "../../../data/NhanVien";
import Typography from "../../theme/typography/Typography";

import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CAvatar,
  CProgress,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CProgressBar,
} from "@coreui/react";

function Table() {
  // State array variable to save and show data
  // $(document).ready(function () {
  //   setTimeout(function () {
  //     $("#sortTable").DataTable();
  //   }, 1000);
  // });

  const [idxVisible, setIdxVisible] = useState(-1);

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Thông tin</CCardHeader>
        <CCardBody>
          <div>
            <div className="container">
              <table
                id="sortTable"
                className="dataTable table-hover table-bordered"
              >
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>STT</th>
                    <th> </th>
                    <th style={{ textAlign: "center" }}>Họ và tên</th>
                    <th style={{ textAlign: "center" }}>Tiến độ</th>
                    <th style={{ textAlign: "center" }}>Trạng thái</th>
                    <th style={{ textAlign: "center" }}>Hoạt động</th>
                    <th style={{ textAlign: "center" }}>Thông tin</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((result) => {
                    return (
                      <tr key={result.id}>
                        <td style={{ textAlign: "center" }}>{result.id}</td>
                        <td>
                          <div
                            style={{
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            <CAvatar src={result.src_img} size="xl" />
                          </div>
                        </td>
                        <td style={{ textAlign: "center" }}>{result.name}</td>
                        <td>
                          <CProgress className="mb-3">
                            <CProgressBar
                              color={
                                result.status === "Busy" ? "danger" : "success"
                              }
                              variant="striped"
                              animated
                              value={Math.floor(Math.random() * 101)}
                            />
                          </CProgress>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <CButton
                            color={
                              result.status === "Busy" ? "danger" : "success"
                            }
                          >
                            {result.status}
                          </CButton>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {result.activity}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <CButton onClick={() => setIdxVisible(result.id)}>
                            Xem thêm
                          </CButton>
                          <CModal
                            size="xl"
                            visible={idxVisible === result.id}
                            onClose={() => setIdxVisible(-1)}
                          >
                            <CModalBody>
                              <Typography result={result} />
                            </CModalBody>
                            <CModalFooter>
                              <CButton
                                color="secondary"
                                onClick={() => setIdxVisible(-1)}
                              >
                                Đóng
                              </CButton>
                            </CModalFooter>
                          </CModal>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
}
export default Table;
