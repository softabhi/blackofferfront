import React from 'react'
import axios from 'axios'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import { useState, useEffect } from 'react'


import avatar1 from '../../../assets/images/avatars/1.jpg'
import avatar2 from '../../../assets/images/avatars/2.jpg'
import avatar3 from '../../../assets/images/avatars/3.jpg'
import avatar4 from '../../../assets/images/avatars/4.jpg'
import avatar5 from '../../../assets/images/avatars/5.jpg'
import avatar6 from '../../../assets/images/avatars/6.jpg'

const Colors = () => {
  const [productList, setProducts] = useState('')

  


  useEffect(() => {
    const feathData = async () => {
      const data = await axios.get('http://localhost:5000/api/allUsers')
        .then((res) => {
          setProducts(res.data)
        })
    }
    feathData()
  }, [])

  console.log(productList)


  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 50;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = productList.slice(firstIndex, lastIndex);
  const npages = Math.ceil(productList.length / recordPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1)

  return (
    <>
      {/* <WidgetsDropdown className="mb-4" /> */}
      <CCard className="mb-4">
        <CCardBody>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead className="text-nowrap">
              <CTableRow>
                <CTableHeaderCell className="bg-body-tertiary text-center">
                  <CIcon icon={cilPeople} />
                </CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">User Country</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">Sector</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Usage</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">
                  Payment Method
                </CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Activity</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {records &&
                records.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src={avatar1} status={'item.avatar.status'} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.country}</div>
                      <div className="small text-body-secondary text-nowrap">
                        <span>{'item.user.new' ? 'New' : 'Recurring'}</span> | Registered:{' '}
                        {'item.user.registered'}
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      {/* <CIcon size="xl" icon={item.country} title={item.sector} /> */}
                      <div>{item.sector}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex justify-content-between text-nowrap">
                        <div className="fw-semibold">{item.intensity}%</div>
                        <div className="ms-3">
                          <small className="text-body-secondary">{'item.usage.period'}</small>
                        </div>
                      </div>
                      <CProgress thin className="text-success" value={item.intensity} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" icon={'item.payment.icon'} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="small text-body-secondary text-nowrap">Last login</div>
                      <div className="fw-semibold text-nowrap">{'item.activity'}</div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      <nav className="d-flex justify-content-center mb-3">
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>Prev</a>
          </li>
          {
            numbers.map((n, i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
              <a href="#" className="page-link" onClick={() => changeCurrPage(n)}>
                {n}
              </a>
              </li>
            ))
          }
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>

    </>
  )


  function prePage() {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }
  function nextPage() {
    if (currentPage !== npages) setCurrentPage(currentPage * 1)
  }
  function changeCurrPage(id) {
    setCurrentPage(id)
  }




}

export default Colors
