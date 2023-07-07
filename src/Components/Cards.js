import React, { useState } from 'react'
import { placesStore } from '../Store/MainStore'
import { Link } from 'react-router-dom'

const Cards = () => {

  return (
        <>
          <h2> Cards Dropdown here B-  </h2>

          <div className = "cards-container" style = {{margin:'3%',display:'grid',
          gridTemplateColumns:'1fr 1fr 1fr'}}>
                {placesStore.map((item) => {
                    return (
                      <div key = {item.id}>
                            <Link to = {`/card/${item.id}`}>
                          <div className = "card-side"  
                          style = {{margin:'5%',backgroundColor:'lightgray',
                          display:'grid',gridTemplateRows:'2fr 0fr 0fr'}}>
                            <div className="main-img">
                              <img src = {item.homeMainPic} style = {{width:'100%',height:'100%'}} />
                            </div>
                            <div className="main-price">
                                <h1> Pets - {item.pets} </h1> 
                                <h2> Location - {item.location} </h2>
                                <h1> Petssss - 
                                  {
                                    item.pets === true ? (<> "TRUEEE" </>) : ( <> "FALSEE" </>)
                                  }
                                </h1>
                                
                                <span> ${item.price}/month </span>
                            </div> 
                            <div className="main-name" style = {{display:'grid',gridTemplateRows:'1fr 1fr'}}>
                                <span> {item.name} </span>
                                <span> 2699 Green Valley Highland lake  </span>
                            </div> 
                          </div>
                            </Link>
                      </div>
                    )
                })}
          </div>
        </>
  )
}

export default Cards