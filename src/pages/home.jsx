import React from 'react'
import Hero from '../components/hero.jsx'
import OurPolicy from '../components/ourPolicy.jsx'
import LatestCollectionPreview from '../components/latestCollectionPreview.jsx'
import Footer from '../components/footer.jsx'
import AboutPreview from '../components/aboutPreview.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <LatestCollectionPreview />
      <Footer />
    </div>
  )
}

export default Home