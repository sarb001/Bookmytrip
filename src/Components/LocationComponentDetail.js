import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { placesStore } from '../Store/MainStore';

const LocationComponentDetail = () => {

    const {loc} = useParams();

    const  placesDetailsArray  =  placesStore.filter((item) => item.location.toLocaleLowerCase().includes(loc.toLocaleLowerCase()));
        console.log('placesdetails --',placesDetailsArray);

    const [originalarray ,setoriginalarray] = useState(placesDetailsArray);

  return (
    <div>
            <h1> ocatiodfv  </h1>

                {originalarray.length > 0 ? (
                <>
                    <div className = "cards-container" style = {{margin:'3%',display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
                        {originalarray.map((item) => {
                            return (
                                <>
                                <Link  to = {`/card/${item.id}`}>
                                    <div className="card-side" key = {item.id} style = {{margin:'5%',backgroundColor:'lightgray',
                                                display:'grid',gridTemplateRows:'2fr 0fr 0fr'}}>
                                        <div className="main-img">
                                                    <img src = {item.homeMainPic} style = {{width:'100%',height:'100%'}} />
                                        </div>
                                        <div className="main-price">
                                                            <h2> Location - {item.location} </h2>
                                                        <span> ${item.price}/month </span>
                                        </div> 
                                            <div className="main-name" style = {{display:'grid',gridTemplateRows:'1fr 1fr'}}>
                                                        <span> {item.name} </span>
                                                        <span> 2699 Green Valley Highland lake  </span>
                                        </div> 
                                    </div>
                                </Link> 
                                </>
                            )
                        })}
                    </div>
                </>) : 
                (
                <>
                        No Cards  
                </>)}

    </div>
  )
}

export default LocationComponentDetail