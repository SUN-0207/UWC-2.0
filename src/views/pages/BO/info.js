import React from 'react'
import {redirect} from 'react-router-dom'
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

  function showDetail(id){
    {
      console.log("ten la" + data[id-1].name)
      const url = "localhost:3000/#/employee" + id
      window.location.href = 'url'
      if(id === "2") window.location.href = "http://localhost:3000/#/employee1"
      if(id === "2") window.location.href = "http://localhost:3000/#/employee2"
      if(id === "3") window.location.href = "http://localhost:3000/#/employee3"
      if(id === "4") window.location.href = "http://localhost:3000/#/employee4"
      if(id === "5") window.location.href = "http://localhost:3000/#/employee5"
      if(id === "6") window.location.href = "http://localhost:3000/#/employee6"
      if(id === "7") window.location.href = "http://localhost:3000/#/employee7"
      if(id === "8") window.location.href = "http://localhost:3000/#/employee8"
      if(id === "9") window.location.href = "http://localhost:3000/#/employee9"
      if(id === "10") window.location.href = "http://localhost:3000/#/employee10"
      if(id === "11") window.location.href = "http://localhost:3000/#/employee11"
      if(id === "12") window.location.href = "http://localhost:3000/#/employee12"
      if(id === "13") window.location.href = "http://localhost:3000/#/employee13"
      if(id === "14") window.location.href = "http://localhost:3000/#/employee14"
      if(id === "15") window.location.href = "http://localhost:3000/#/employee15"
      if(id === 16) window.location.href = "http://localhost:3000/#/employee16"
      if(id === 17) window.location.href = "http://localhost:3000/#/employee17"
      if(id === 18) window.location.href = "http://localhost:3000/#/employee18"
      if(id === 19) window.location.href = "http://localhost:3000/#/employee19"
    }
  }

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
                        <td><CButton onClick={(e)=>showDetail(result.id)}>Xem thêm</CButton></td>
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
