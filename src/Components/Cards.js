import React from 'react'
import { decrement, increment, incremnetbyamount } from '../Store/counterslice.js';
import { useDispatch, useSelector } from 'react-redux';

const Cards = () => {
   const count = useSelector((state) => state.counter);
   const dispatch = useDispatch();

   const handleincrement = () => {
      dispatch(increment());
   };

   const handledecrement = () => {
      dispatch(decrement())
   };

   const handleincremnetbyamount = () => {
      dispatch(incremnetbyamount(5))
   }

  return (
    <>
       <h1> Cards  </h1> 
       <p> Count : {count} </p>
       <button  onClick = {handleincrement}> Add  </button>
       <button  onClick = {handledecrement}> minus  </button>
       <button  onClick = {handleincremnetbyamount} >   Add by amount  </button>
    </>
  )
}

export default Cards

// https://airbnbhome.free.beeceptor.com/airbnb-houses