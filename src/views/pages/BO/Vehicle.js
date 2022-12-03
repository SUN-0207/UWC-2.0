import React from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CCol,
  CToast,
  CToastBody,
  CToastHeader,
  CToaster,
  CCardImage,
  CCardTitle,
  CCardText,
  CContainer,
  CHeader,
} from "@coreui/react";
import avatar from "./truck.png";

const Vehicle = () => {
  return (
    <>
      <CContainer>
        <CHeader>Xe tải</CHeader>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
          <CCol>
            <CCard>
              <CCardImage rounded thumbnail src={avatar} />
              <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardText>Some quick</CCardText>
                <CButton href="#">Go somewhere</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol>
            <CCard>
              <CCardImage src={avatar} />
              <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardText>Some quick</CCardText>
                <CButton href="#">Go somewhere</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol>
            <CCard>
              <CCardImage src={avatar} />
              <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardText>Some quick</CCardText>
                <CButton href="#">Go somewhere</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol>
            <CCard>
              <CCardImage src={avatar} />
              <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardText>Some quick</CCardText>
                <CButton href="#">Go somewhere</CButton>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <CCard>
              <CCardImage src={avatar} />
              <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardText>Some quick</CCardText>
                <CButton href="#">Go somewhere</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol>
            <CCard>
              <CCardImage src={avatar} />
              <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardText>Some quick</CCardText>
                <CButton href="#">Go somewhere</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol>
            <CCard>
              <CCardImage src={avatar} />
              <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardText>Some quick</CCardText>
                <CButton href="#">Go somewhere</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol>
            <CCard>
              <CCardImage src={avatar} />
              <CCardBody>
                <CCardTitle>Card title</CCardTitle>
                <CCardText>Some quick</CCardText>
                <CButton href="#">Go somewhere</CButton>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
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
    //                 <strong>ID phương tiện</strong>: 1
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Thể loại</strong>: Xe tải lớn
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Sức chứa</strong>: 1,8 tấn
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Tình trạng xăng</strong>: 50%
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Người lái</strong>: Tus đẹp trai
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Tuyến đường</strong>: 1
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
    //                 <strong>ID phương tiện</strong>: 1
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Thể loại</strong>: Xe tải lớn
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Sức chứa</strong>: 1,8 tấn
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Tình trạng xăng</strong>: 50%
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Người lái</strong>: Tus đẹp trai
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Tuyến đường</strong>: 1
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
    //                 <strong>BKS: 67P1 88888</strong>
    //               </label>
    //             </div>
    //           </div>
    //           <div className="col" style={{ textAllign: "left" }}>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>ID phương tiện</strong>: 1
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Thể loại</strong>: Xe tải lớn
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Sức chứa</strong>: 1,8 tấn
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Tình trạng xăng</strong>: 50%
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Người lái</strong>: Tus đẹp trai
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Tuyến đường</strong>: 1
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
    //                 <strong>ID phương tiện</strong>: 1
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Thể loại</strong>: Xe tải lớn
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Sức chứa</strong>: 1,8 tấn
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Tình trạng xăng</strong>: 50%
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Người lái</strong>: Tus đẹp trai
    //               </label>
    //             </div>
    //             <div className="mb-3">
    //               <label className="form-label" htmlFor="province">
    //                 <strong>Tuyến đường</strong>: 1
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

export default Vehicle;
