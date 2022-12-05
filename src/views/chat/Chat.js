import React, { useState } from "react";
import { CCard, CCardHeader, CCardBody, CAvatar } from "@coreui/react";
import "./chat.css";
import data from "../../data/NhanVien";
import CIcon from "@coreui/icons-react";
import { cilSend } from "@coreui/icons";

const Chat = () => {
  const [idBgColor, setIdBgColor] = useState(1);
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Trò chuyện</CCardHeader>
        <CCardBody>
          <div className="messaging">
            <div className="inbox_msg">
              <div className="inbox_people">
                <div className="headind_srch">
                  <div className="recent_heading">
                    <h4>Gần đây</h4>
                  </div>
                  <div className="srch_bar">
                    <div className="stylish-input-group">
                      <input
                        type="text"
                        className="search-bar"
                        placeholder="Tìm kiếm"
                      />
                      <span className="input-group-addon">
                        <button type="button">
                          {" "}
                          <i
                            className="fa fa-search"
                            aria-hidden="true"
                          ></i>{" "}
                        </button>
                      </span>{" "}
                    </div>
                  </div>
                </div>
                <div className="inbox_chat">
                  {data.map((employ) => {
                    return (
                      <div
                        style={{
                          backgroundColor:
                            employ.id === idBgColor ? "#9c9c9c" : "white",
                        }}
                        key={employ.id}
                        className="p-3 border-bottom"
                        onClick={() => setIdBgColor(employ.id)}
                      >
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-1 align-self-center">
                            {" "}
                            <CAvatar
                              src={employ.src_img}
                              alt="sunil"
                              size="xl"
                              status={
                                employ.status === "Busy" ? "danger" : "success"
                              }
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <div className="d-flex justify-content-between">
                              <p className="fw-semibold fs-5">{employ.name}</p>
                              <p className="fw-semibold fs-6">Dec 25</p>
                            </div>
                            <p className="fs-6 fw-light">Xác nhận</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mesgs">
                <div className="msg_history">
                  {data.map((employ) => {
                    return idBgColor === employ.id ? (
                      <>
                        {" "}
                        <div className="incoming_msg">
                          <div className="incoming_msg_img">
                            {" "}
                            <img src={employ.src_img} alt="sunil" />{" "}
                          </div>
                          <div className="received_msg">
                            <div className="received_withd_msg">
                              <p>{employ.send_msg}</p>
                              <span className="time_date">
                                {" "}
                                11:01 AM | June 9
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="outgoing_msg">
                          <div className="sent_msg">
                            <p className="text-center">{employ.received_msg}</p>
                            <span className="time_date">
                              {" "}
                              11:01 AM | June 9
                            </span>{" "}
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    );
                  })}
                </div>
                <div className="type_msg">
                  <div className="input_msg_write">
                    <input
                      type="text"
                      className="write_msg"
                      placeholder="Nhắn tin"
                    />
                    <button className="msg_send_btn" type="button">
                      <CIcon icon={cilSend} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Chat;
