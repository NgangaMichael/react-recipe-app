import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Home from './Home'

export default function Pages() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
      </Routes>
  )
}
