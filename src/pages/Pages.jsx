import { AnimatePresence } from 'framer-motion'
import React from 'react'
import {Route, Routes, useLocation } from 'react-router-dom'
import Search from '../components/Search'
import Cuisine from './Cuisine'
import Home from './Home'
import Recipe from './Recipe'
import Searched from './Searched'

export default function Pages() {

  const location = useLocation();
  return (
    // animate presence is for fading out and in when swithing between routes 
    <AnimatePresence exitBeforeEnter>
      {/* you have to set location for the animation  */}
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipe/:name' element={<Recipe />} />
      </Routes>
    </AnimatePresence>

  )
}
