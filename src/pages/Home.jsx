import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductViewer from '../components/ProductViewer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductViewer />
    </div>
  )
}
