import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { placesStore } from '../Store/MainStore';
import './LocationComponentDetails.css';

const LocationComponentDetail = () => {

    const params = useParams();
    const {loc} = params;
    
    const [petReview,setpetReview] = useState(false);
    const [openPets,setopenPets]   = useState(false);

    const [openFilter,setopenFilter] = useState(false);

     const [coupleToggle,setcoupleToggle] = useState(false);
     const [couple,setcouple] = useState(false);

        const placesDetailsArray = placesStore.filter((item) => 
            item.location.toLocaleLowerCase().includes(loc.toLocaleLowerCase())
        );
            // console.log('placesdetails 1 --', placesDetailsArray);
            
    const [originalarray ,setoriginalarray] = useState(placesDetailsArray);

    useEffect(() =>{
        setoriginalarray(placesDetailsArray);
    },[loc])
     

    const petsFilter = () => {
        let newstate = placesDetailsArray.filter((item) => {
           return item.pets === true;
        })
        setpetReview(true);
        setoriginalarray(newstate);
        setcouple(false);
   }

     const nopetsFilter = () => {
       setpetReview(false);
       setoriginalarray(placesDetailsArray);
     }

      const openPetsHandler = () => {          // toggling pets dropdown 
          setopenPets(!openPets);
          setopenFilter(false);
      }

      const openCoupleHandler = () => {         // toggle thee Couple Handler 
        setcoupleToggle(!coupleToggle);
        setopenFilter(false);
      }

      const nocoupleFilter = () => {
        setoriginalarray(placesDetailsArray)
        setcouple(false);
     }

      const coupleFilter = () => {
            let mutate = placesDetailsArray.filter((item) => {
                 return item.couple === true
            })
            setoriginalarray(mutate);
            setpetReview(false);
            setcouple(true);
      }


     
  return (
    <div>
                <h1>  Total  Stays in {loc} Here  </h1>

                        <div className="filter-boxes-partition" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                                <div className='petHold mt-3 zoom' onClick={openPetsHandler}>
                                    <p className=' inline-block'> Pet Friendly </p>
                                </div>

                                <div className='flex petHold mt-3 zoom' onClick={openCoupleHandler}>
                                            <p className=' inline-block pl-5'> Couple Friendly </p>
                            </div>
                        </div>
               
                            {openPets && <div className = "selectDropDown">
                                                <div  onClick = {petsFilter}   className = 'pt-4 mb-8 cursor-pointer h-2'  style = {{backgroundColor:'goldenrod'}} > 
                                                Yes </div>
                                                <div  onClick = {nopetsFilter} className = 'cursor-pointer h-2' style = {{backgroundColor:'royalblue'}}> 
                                                No </div>
                                    </div> 
                            }

                       

                       <div className='zindex'>
                                {coupleToggle && <div className='selectDropDownCouple cursor-pointer'>
                                    <div onClick={coupleFilter} className=" pt-4 mb-8 cursor-pointer h-2" style = {{backgroundColor:'royalblue'}}>  
                                    Yes </div>
                                    <div onClick={nocoupleFilter} className="cursor-pointer h-2" style = {{backgroundColor:'goldenrod'}}> No </div>
                                </div>
                                }
                            </div>
          
                    {originalarray.length > 0 ? (
                    <>
                        <div className = "cards-container" style = {{margin:'3%',display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
                            {originalarray.map((item) => {
                                return (
                                    <div key = {item.id}>
                                    <Link  to = {`/location/${item.id}`}>
                                        <div className="card-side"
                                        style = {{margin:'5%',backgroundColor:'lightgray',
                                                    display:'grid',gridTemplateRows:'2fr 0fr 0fr'}}>
                                            <div className="main-img">
                                                        <img src = {item.homeMainPic} style = {{width:'100%',height:'100%'}} />
                                            </div>
                                            <div className="main-price">
                                                        <h2> {petReview &&  <p> Pets are Welcome </p>} </h2>
                                                        <h2> {couple &&  <p>  Couple Friendly  </p>} </h2>
                                                                <h2> Location - {item.location} </h2>
                                                            <span> ${item.price}/month </span>
                                            </div> 
                                                <div className="main-name" style = {{display:'grid',
                                                gridTemplateRows:'1fr 1fr'}}>
                                                            <span> {item.name} </span>
                                                            <span> 2699 Green Valley Highland lake  </span>
                                            </div> 
                                        </div>
                                    </Link> 
                                    </div>
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