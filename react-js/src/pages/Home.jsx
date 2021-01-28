import React from 'react'
import Layout from '../layouts'

export default function Home({ children }) {
  return (
    <Layout>
      <div className="d-flex align-items-center justify-content-center">
        <div className="text-center py-5">
          <h1>Hi, Wellcome</h1>
          <h2>My name is <span className="text-primary">Krisana Malaseeta</span></h2>
        </div>
      </div>
      <div className="text-center py-5">
        <h2 className="text-secondary">Tech Dev Asseignment</h2>
      </div>
    </Layout>
  )
}
