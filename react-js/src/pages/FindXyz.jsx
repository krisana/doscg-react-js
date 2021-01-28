import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../layouts'

export default function FindXyz({ children }) {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:4000/doscg/findXyz'
      )

      setData(result.data)
    }

    fetchData()
  }, [])

  console.log(data)

  return (
    <Layout>
      <h1>This is an Find X,Y,Z page</h1>
      <p>X, Y, 5, 9, 15, 23, Z  - Please create a new function for finding X, Y, Z value</p>
      {
        data &&
        <pre>
          {data.value}
        </pre>
      }
    </Layout>
  )
}
