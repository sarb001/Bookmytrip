import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { placesStore } from '../Store/MainStore';
// import './LocationComponentDetails.css';

const LocationComponentDetail = () => {

    const params = useParams();
    const {loc} = params;
    const [originalarray ,setoriginalarray] = useState([]);
    
   const [petReview,setpetReview] = useState(false);
   const [openPets,setopenPets]   = useState(false);
    const [openFilter,setopenFilter] = useState(false);

    
    useEffect(() => {
        const filterPlaces = () => {
        const placesDetailsArray = placesStore.filter((item) =>
            item.location.toLocaleLowerCase().includes(loc.toLocaleLowerCase())
        );
            console.log('placesdetails --', placesDetailsArray);
            setoriginalarray(placesDetailsArray);
        };
        filterPlaces();

    }, [loc])
   
    // when data is updated in placesdetialsarray  only then run effect means update data with final state  

    const petsFilter = () => {
        let newstate = originalarray.filter((item) => {
           return item.pets === true;
        })
        setpetReview(true);
        setoriginalarray(newstate);
   }

     const nopetsFilter = () => {
       setpetReview(false);
       setoriginalarray((prevarray) => prevarray);
     }

      const openPetsHandler = () => {       // toggling pets dropdown 
          setopenPets(!openPets);
          setopenFilter(false);
      }

      console.log('original array is -',originalarray);

  return (
    <div>
                <h1>  Total  Stays in {loc} Here  </h1>

                <div className='petHold mt-3 zoom' onClick={openPetsHandler}>
                    {/* <MdOutlinePets className=' inline-block text-2xl pr-2' /> */}
                    <p className=' inline-block'> Pet Friendly </p>
                </div>

               
                {openPets && <div className = "selectDropDown">
                                    <div  onClick = {petsFilter}   className = 'pt-4 mb-8 cursor-pointer h-2' > 
                                    Yes </div>
                                    <div  onClick = {nopetsFilter} className = 'cursor-pointer h-2' > 
                                     No </div>
                            
                        </div> 
                }
          
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