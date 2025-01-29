
  import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brand from './components/Brand'
import NewArrival from './components/NewArrival'
import Favourite from './components/Favourite'
import App from './components/App'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
  
  function Home() {
    return (
      <div>
        <main>
          <Navbar/>
         <Hero/>
         <Brand/>
         <NewArrival/>
         <Favourite/>
         <App/>
         <Newsletter/>
         <Footer/>
        </main>
      </div>
    )
  }
  
  export default Home
  