import React from 'react'
import Hero from '../components/hero.jsx'
import OurPolicy from '../components/ourPolicy.jsx'
import LatestCollectionPreview from '../components/latestCollectionPreview.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollectionPreview />
      <OurPolicy />
    </div>
  )
}

export default Home