import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Chart as ChartJS } from 'chart.js'
import { Doughnut, Bar, Line } from 'react-chartjs-2'

const Likehood = () => {
  const [productList, setProducts] = useState([])

  useEffect(() => {
    const feathData = async () => {
      const data = await axios.get('http://localhost:5000/api/allUsers').then((res) => {
        setProducts(res.data)
      })
    }
    feathData()
  }, [])

  return (
    <>
      <div>
        <Doughnut
          data={{
            labels: productList && productList.map((data) => data.Liklihood),
            datasets: [
              {
                label: 'Count',
                data: ['12', '56', '56'],
                backgroundColor: [
                  'rgba(43, 63, 229, 0.8)',
                  'rgba(250, 192, 19, 0.8)',
                  'rgba(253, 135, 135, 0.8)',
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: 'Revenue Source',
              },
            },
          }}
        />
      </div>
    </>
  )
}

export default Likehood
