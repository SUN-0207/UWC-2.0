import React, { useRef, useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CCol,
  CToast,
  CToastBody,
  CToastClose,
  CToastHeader,
  CToaster,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import avatar from './truck.png'


const ExampleToast = () => {
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const exampleToast = (
    <CToast title="CoreUI for React.js">
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <strong className="me-auto">CoreUI for React.js</strong>
        <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
  )
  return (
    <>
      <CButton onClick={() => addToast(exampleToast)}>Send a toast</CButton>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

const Toasts = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Basic</small>
          </CCardHeader>
          <CCardBody>
            <div className="row">
              <div className="col" style = {{marginTop: "25px"}}>
                <img src={avatar} alt ="avatar" width="270" height="160" />
                <div className="mb-3" style = {{marginLeft: "50px"}}><label className="form-label" htmlFor="District"><strong>BKS: 59P3-19161</strong></label></div>
              </div>
              <div className="col" style = {{textAllign: "left"}}>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>ID phương tiện</strong>: 1</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Thể loại</strong>: Xe tải lớn</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Sức chứa</strong>: 1,8 tấn</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Tình trạng xăng</strong>: 50%</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Người lái</strong>: Tus đẹp trai</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Tuyến đường</strong>: 1</label></div>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Basic</small>
          </CCardHeader>
          <CCardBody>
            <div className="row">
              <div className="col" style = {{marginTop: "25px"}}>
                <img src={avatar} alt ="avatar" width="270" height="160" />
                <div className="mb-3" style = {{marginLeft: "50px"}}><label className="form-label" htmlFor="District"><strong>BKS: 59P3-19161</strong></label></div>
              </div>
              <div className="col" style = {{textAllign: "left"}}>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>ID phương tiện</strong>: 1</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Thể loại</strong>: Xe tải lớn</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Sức chứa</strong>: 1,8 tấn</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Tình trạng xăng</strong>: 50%</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Người lái</strong>: Tus đẹp trai</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Tuyến đường</strong>: 1</label></div>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Basic</small>
          </CCardHeader>
          <CCardBody>
            <div className="row">
              <div className="col" style = {{marginTop: "25px"}}>
                <img src={avatar} alt ="avatar" width="270" height="160" />
                <div className="mb-3" style = {{marginLeft: "50px"}}><label className="form-label" htmlFor="District"><strong>BKS: 67P1 88888</strong></label></div>
              </div>
              <div className="col" style = {{textAllign: "left"}}>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>ID phương tiện</strong>: 1</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Thể loại</strong>: Xe tải lớn</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Sức chứa</strong>: 1,8 tấn</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Tình trạng xăng</strong>: 50%</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Người lái</strong>: Tus đẹp trai</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Tuyến đường</strong>: 1</label></div>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Toast</strong> <small>Basic</small>
          </CCardHeader>
          <CCardBody>
            <div className="row">
              <div className="col" style = {{marginTop: "25px"}}>
                <img src={avatar} alt ="avatar" width="270" height="160" />
                <div className="mb-3" style = {{marginLeft: "50px"}}><label className="form-label" htmlFor="District"><strong>BKS: 59P3-19161</strong></label></div>
              </div>
              <div className="col" style = {{textAllign: "left"}}>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>ID phương tiện</strong>: 1</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Thể loại</strong>: Xe tải lớn</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Sức chứa</strong>: 1,8 tấn</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Tình trạng xăng</strong>: 50%</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Người lái</strong>: Tus đẹp trai</label></div>
                <div className="mb-3"><label className="form-label" htmlFor="province"><strong>Tuyến đường</strong>: 1</label></div>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Toasts
