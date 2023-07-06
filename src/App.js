

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import CardsDetail from './Components/CardsDetail'
import LocationComponentDetail from './Components/LocationComponentDetail'
import Header from './Components/Header'
import Footer from './Components/Footer'
import TabsSelection from './Components/TabsSelection'

const App = () => {
  return (
    <>
      <TabsSelection />
     <Routes>
         <Route path='/' element = {<Home />}>  </Route>
         <Route path='/card/:id' element = {<CardsDetail  />}>  </Route>
         <Route path='/location/:loc' exact element = {   <LocationComponentDetail  />  }> 
         </Route>
     </Routes>
     <Footer />
    </>
  )
}

export default App