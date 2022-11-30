import React from "react";
import { CCard, CCardHeader, CCardBody, CFormSelect } from "@coreui/react";
import { DocsLink } from "src/components";
import avatar from "../../../assets/images/avatars/1.jpg";
import "./dropdown.css";
import PropTypes from "prop-types";

const Typography = ({ result }) => {
  return (
    <>
      <div className="container-fluid">
        <h3 className="text-dark mb-4">Thông tin cá nhân</h3>
        <div
          className="row mb-3"
          style={{ marginBottom: "16px", paddingBottom: "0px" }}
        >
          <div
            className="col-lg-4"
            style={{ paddingBottom: "0px", marginBottom: "0px" }}
          >
            <div className="card mb-3">
              <div className="card-body text-center shadow">
                <img
                  className="rounded-circle mb-3 mt-4"
                  src={avatar}
                  alt="avatar"
                  width="160"
                  height="160"
                />
                <h4 className="small fw-bold">ID: 2010767</h4>
                <div className="mb-3">
                  <button className="btn btn-primary btn-sm" type="button">
                    Thay đổi ảnh
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="text-primary fw-bold m-0">Tiến độ công việc</h6>
              </div>
              <div className="card-body">
                <h4 className="small fw-bold">
                  Công việc #1<span className="float-end">20%</span>
                </h4>
                <div className="progress progress-sm mb-3">
                  <div
                    className="progress-bar bg-danger"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "20%" }}
                  >
                    <span className="visually-hidden">20%</span>
                  </div>
                </div>
                <h4 className="small fw-bold">
                  Công việc #2<span className="float-end">40%</span>
                </h4>
                <div className="progress progress-sm mb-3">
                  <div
                    className="progress-bar bg-warning"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "40%" }}
                  >
                    <span className="visually-hidden">40%</span>
                  </div>
                </div>
                <h4 className="small fw-bold">
                  Công việc #3<span className="float-end">60%</span>
                </h4>
                <div className="progress progress-sm mb-3">
                  <div
                    className="progress-bar bg-primary"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "60%" }}
                  >
                    <span className="visually-hidden">60%</span>
                  </div>
                </div>
                <h4 className="small fw-bold">
                  Công việc #4<span className="float-end">80%</span>
                </h4>
                <div className="progress progress-sm mb-3">
                  <div
                    className="progress-bar bg-info"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  >
                    <span className="visually-hidden">80%</span>
                  </div>
                </div>
                <h4 className="small fw-bold">
                  Công việc #5<span className="float-end">Complete!</span>
                </h4>
                <div className="progress progress-sm mb-3">
                  <div
                    className="progress-bar bg-success"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  >
                    <span className="visually-hidden">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8"
            style={{ marginBottom: "130px", paddingBottom: "24px" }}
          >
            <div className="row mb-3 d-none">
              <div className="col">
                <div className="card text-white bg-primary shadow">
                  <div className="card-body">
                    <div className="row mb-2">
                      <div className="col">
                        <p className="m-0">Peformance</p>
                        <p className="m-0">
                          <strong>65.2%</strong>
                        </p>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-rocket fa-2x"></i>
                      </div>
                    </div>
                    <p className="text-white-50 small m-0">
                      <i className="fas fa-arrow-up"></i> 5% since last month
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card text-white bg-success shadow">
                  <div className="card-body">
                    <div className="row mb-2">
                      <div className="col">
                        <p className="m-0">Peformance</p>
                        <p className="m-0">
                          <strong>65.2%</strong>
                        </p>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-rocket fa-2x"></i>
                      </div>
                    </div>
                    <p className="text-white-50 small m-0">
                      <i className="fas fa-arrow-up"></i> 5% since last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="card shadow"
                  style={{
                    marginBottom: "16px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                  }}
                >
                  <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">
                      Thông tin liên hệ
                    </p>
                  </div>
                  <div
                    className="card-body"
                    style={{
                      paddingTop: "0px",
                      paddingLeft: "0px",
                      marginLeft: "10px",
                      paddingRight: "6px",
                      paddingBottom: "58px",
                      marginBottom: "-62px",
                    }}
                  >
                    <form>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="address">
                          <strong>Email</strong>
                          <br />
                        </label>
                        <input
                          id="address"
                          className="form-control"
                          type="text"
                          placeholder="abc@gmail.com"
                          name="address"
                          value={result.email}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="address">
                          <strong>Số điện thoại</strong>
                          <br />
                        </label>
                        <input
                          id="address-2"
                          className="form-control"
                          type="text"
                          placeholder="012345678"
                          name="address"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="address">
                          <strong>Địa chỉ</strong>
                          <br />
                        </label>
                        <input
                          id="address-1"
                          className="form-control"
                          type="text"
                          placeholder="KTX Khu A ĐHQG-HCM"
                          name="address"
                        />
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="District">
                              <strong>Quận/Huyện</strong>
                            </label>
                            <input
                              id="city"
                              className="form-control"
                              type="text"
                              placeholder="Thủ Đức"
                              name="city"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="province">
                              <strong>Tỉnh/Thành phố</strong>
                              <br />
                            </label>
                            <input
                              id="country"
                              className="form-control"
                              type="text"
                              placeholder="Hồ Chí Minh"
                              name="country"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button
                          className="btn btn-primary btn-sm"
                          type="submit"
                        >
                          Lưu thay đổi
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card shadow mb-3">
                  <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Giao công việc</p>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col">
                          {/* <CFormSelect aria-label="Default select example">
                            <option>Chọn MCP</option>
                            <option value="1">Vị trí 1</option>
                            <option value="2">Vị trí 2</option>
                            <option value="3" disabled>
                              Vị trí 3
                            </option>
                          </CFormSelect> */}

                          <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                              <strong>Chọn MCP</strong>
                            </label>
                            <input
                              id="MCP"
                              className="form-control"
                              type="text"
                              placeholder="xxxxxxxxxxxx"
                              name="MCP"
                            />
                          </div>
                        </div>

                        <div className="col">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                              <strong>Chọn lộ trình</strong>
                            </label>
                            <input
                              id="route"
                              className="form-control"
                              type="text"
                              placeholder="xxxxxxxxxxxx"
                              name="route"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="first_name">
                              <strong>Chọn ca làm việc</strong>
                            </label>
                            <input
                              id="shift"
                              className="form-control"
                              type="text"
                              placeholder="UWC"
                              name="first_name"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="last_name">
                              <strong>Chọn phương tiện</strong>
                              <br />
                            </label>
                            <input
                              id="last_name"
                              className="form-control"
                              type="text"
                              placeholder="Sunny"
                              name="last_name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button
                          className="btn btn-primary btn-md"
                          type="submit"
                        >
                          Tạo nhiệm vụ
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow mb-5">
          <div className="card-header py-3">
            <p className="text-primary m-0 fw-bold">Cập nhật trạng thái</p>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <form>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="signature">
                      <strong>Trạng thái</strong>
                      <br />
                    </label>
                    <textarea
                      id="signature"
                      className="form-control"
                      rows="4"
                      name="signature"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <div className="form-check form-switch">
                      <input
                        id="formCheck-1"
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label" htmlFor="formCheck-1">
                        <strong>Thông báo cho tôi về những phản hồi</strong>
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary btn-sm" type="submit">
                      Lưu thay đổi
                    </button>
                  </div>
                </form>
              </div>
              <div className="col">
                <label className="form-label" htmlFor="signature">
                  <strong>Gửi tin nhắn</strong>
                  <br />
                </label>
                <form
                  className="p-3 p-xl-4"
                  method="post"
                  style={{
                    marginBottom: "24px",
                    paddingTop: "0px",
                    marginTop: "-26px",
                  }}
                >
                  <div className="mb-3">
                    <input
                      id="name-1"
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Đến"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      id="email-1"
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Chủ đề"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      id="message-1"
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Tin nhắn"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary d-block w-100"
                      type="submit"
                    >
                      Gửi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Typography.propTypes = {
  result: PropTypes.node.isRequired,
};

export default Typography;
