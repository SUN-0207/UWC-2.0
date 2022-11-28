import React from 'react'

import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import data from "./list.json"
import avatar from './Picture1.png'

import { CCard, CCardHeader, CCardBody, CButton } from '@coreui/react'

function Table() {
  // State array variable to save and show data
  $(document).ready(function () {      
    setTimeout(function(){
      $('#sortTable').DataTable();
    } ,1000);
  }) 
  return (

    <CCard className="mb-4">
        <CCardHeader>
          Janitors
          <img src = "./Picture1.png" alt =""/>
        </CCardHeader>
        <CCardBody>
          <div>
            <div className="container">
              <table id="sortTable" className="dataTable table-hover table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th> </th>
                  <th>User</th>
                  <th>Usage</th>
                  <th>Status</th>
                  <th>Activity</th>
                  <th>Thông tin</th>
                </tr>
              </thead>
              <tbody>
              {data.map((result) => { 
                return (
                    <tr key = {result.id}>
                        <td>{result.id}</td>
                        <td>{<img src ={result.avatar} width=""  height="" alt=""/>}</td>
                        <td>{result.name}</td>
                        <td>{result.usage}</td>
                        <td>
                            {result.status === "Busy" && <CButton color="danger">Busy</CButton>}
                            {result.status === "Free" && <CButton color="success">Free</CButton>} 
                        </td>
                        <td>{result.activity}</td>
                        <td><CButton>Xem thêm</CButton></td>
                    </tr>
                )
              })}
              </tbody>
              </table>
            </div>
          </div>
        </CCardBody>
      </CCard>

    
  );
}
export default Table;
