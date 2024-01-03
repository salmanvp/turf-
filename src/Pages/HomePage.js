import React from 'react'
import Navbar from '../Component/NavBar/Navbar'
import Banner from '../Component/Banner/Banner'
import TopRated from '../Component/TopReated/TopRated'
import SearchBook from '../Component/SearchBook/SearchBook'

function HomePage() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <TopRated/>
      <SearchBook/>
    </div>
  )
}

export default HomePage
