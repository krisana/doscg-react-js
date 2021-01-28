import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="py-5">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
