import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../layouts'

export default function FindBc({ children }) {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:4000/doscg/findBC'
      )

      setData(result.data)
    }

    fetchData()
  }, [])

  return (
    <Layout>
      <div>
        <h1>This is an Find B, C page</h1>
        <p>If A = 21, A + B = 23, A + C = -21 - Please create a new function for finding B and C value</p>
        {
          data &&
          <div>
            <h3>{`A = ${data.A}`}</h3>
            <h3>{`B = ${data.B}`}</h3>
            <h3>{`C = ${data.C}`}</h3>
          </div>
        }
      </div>
    </Layout>
  )
}
