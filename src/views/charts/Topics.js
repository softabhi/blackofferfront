import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Chart as ChartJS } from 'chart.js'
import { Doughnut, Bar, Line } from 'react-chartjs-2'
const Topics = () => {
  const [productList, setProducts] = useState([])


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

  return (
    <>
      <div>
        <Line
          data={{
            labels: productList && productList.map((data) => data.intensity),
            datasets: [
              {
                label: "Revenue",
                data: productList && productList.map((data) => data.intensity),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Cost",
                data: productList && productList.map((data) => data.intensity),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </div>
    </>
  )
}

export default Topics
